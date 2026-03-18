import React, { useState, useEffect, useMemo } from 'react';
import { RATINGS_DATA } from '../constants';
import { RatingCategory } from '../types';
import { Star, TrendingUp, Users, ThumbsUp } from 'lucide-react';

const STORAGE_KEY = 'portfolio_user_ratings';

// Get user ratings from localStorage
const getUserRatings = (): Record<string, number> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Save user rating to localStorage
const saveUserRating = (categoryId: string, rating: number) => {
  const current = getUserRatings();
  current[categoryId] = rating;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};

// Star rating component
const StarRating: React.FC<{
  rating: number;
  size?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
  userRating?: number;
}> = ({ rating, size = 20, interactive = false, onRate, userRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const displayRating = hoverRating || userRating || rating;

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(displayRating);
        const partial = star === Math.ceil(displayRating) && displayRating % 1 !== 0;
        const fillPercent = partial ? (displayRating % 1) * 100 : filled ? 100 : 0;

        return (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            className={`relative ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && onRate?.(star)}
          >
            {/* Background star (empty) */}
            <Star
              size={size}
              className="text-gray-300 dark:text-gray-600"
              strokeWidth={1.5}
            />
            {/* Foreground star (filled) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star
                size={size}
                className="text-yellow-400 fill-yellow-400"
                strokeWidth={1.5}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

const Ratings: React.FC = () => {
  const [userRatings, setUserRatings] = useState<Record<string, number>>({});
  const [hasRated, setHasRated] = useState(false);

  // Load user ratings on mount
  useEffect(() => {
    const stored = getUserRatings();
    setUserRatings(stored);
    setHasRated(Object.keys(stored).length > 0);
  }, []);

  // Calculate combined ratings (base + user contribution)
  const combinedRatings = useMemo(() => {
    return RATINGS_DATA.map((category) => {
      const userRating = userRatings[category.id];
      if (userRating) {
        // Recalculate average with user's vote
        const newTotal = category.totalVotes + 1;
        const newRating = ((category.rating * category.totalVotes) + userRating) / newTotal;
        return {
          ...category,
          rating: Math.round(newRating * 10) / 10,
          totalVotes: newTotal,
          userRated: true
        };
      }
      return { ...category, userRated: false };
    });
  }, [userRatings]);

  // Overall stats
  const overallStats = useMemo(() => {
    const avgRating = combinedRatings.reduce((sum, c) => sum + c.rating, 0) / combinedRatings.length;
    const totalVotes = combinedRatings.reduce((sum, c) => sum + c.totalVotes, 0);
    return {
      avgRating: Math.round(avgRating * 10) / 10,
      totalVotes,
      totalReviewers: Math.max(...combinedRatings.map(c => c.totalVotes))
    };
  }, [combinedRatings]);

  const handleRate = (categoryId: string, rating: number) => {
    saveUserRating(categoryId, rating);
    setUserRatings({ ...userRatings, [categoryId]: rating });
    setHasRated(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Colleague Ratings</h2>
        <p className="theme-text-muted mt-1">Đánh giá từ đồng nghiệp và visitors</p>
      </div>

      {/* Overall Summary Card */}
      <div className="p-6 rounded-2xl border theme-bg-card theme-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overall Rating */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl theme-bg-secondary">
            <div className="text-4xl font-bold theme-primary mb-2">{overallStats.avgRating}</div>
            <StarRating rating={overallStats.avgRating} size={24} />
            <p className="text-xs theme-text-muted mt-2 uppercase tracking-wider">Overall Rating</p>
          </div>

          {/* Total Votes */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl theme-bg-secondary">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={28} className="theme-primary" />
              <span className="text-4xl font-bold theme-text">{overallStats.totalVotes}</span>
            </div>
            <p className="text-xs theme-text-muted uppercase tracking-wider">Total Ratings</p>
          </div>

          {/* Reviewers */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl theme-bg-secondary">
            <div className="flex items-center gap-2 mb-2">
              <Users size={28} className="theme-primary" />
              <span className="text-4xl font-bold theme-text">{overallStats.totalReviewers}+</span>
            </div>
            <p className="text-xs theme-text-muted uppercase tracking-wider">Colleagues</p>
          </div>
        </div>
      </div>

      {/* Rating Categories */}
      <div className="space-y-4">
        {combinedRatings.map((category) => (
          <div
            key={category.id}
            className="p-5 rounded-xl border transition-all hover:shadow-md theme-bg-card theme-border-subtle hover:theme-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Category Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold theme-text">{category.name}</h3>
                  {category.userRated && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full theme-primary-bg text-white uppercase tracking-wider">
                      Voted
                    </span>
                  )}
                </div>
                <p className="text-sm theme-text-muted">{category.description}</p>
              </div>

              {/* Rating Display */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold theme-text">{category.rating}</span>
                    <StarRating rating={category.rating} size={18} />
                  </div>
                  <span className="text-xs theme-text-dimmed">{category.totalVotes} votes</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-2 rounded-full overflow-hidden theme-bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-500 theme-primary-bg"
                style={{ width: `${(category.rating / 5) * 100}%` }}
              />
            </div>

            {/* User Rating Section */}
            {!category.userRated && (
              <div className="mt-4 pt-4 border-t theme-border-subtle">
                <div className="flex items-center justify-between">
                  <span className="text-sm theme-text-muted">Rate this category:</span>
                  <StarRating
                    rating={0}
                    size={24}
                    interactive
                    userRating={userRatings[category.id]}
                    onRate={(rating) => handleRate(category.id, rating)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Thank You Message */}
      {hasRated && (
        <div className="p-4 rounded-xl border flex items-center gap-3 theme-bg-card theme-border-subtle">
          <ThumbsUp size={24} className="theme-primary" />
          <div>
            <p className="font-medium theme-text">Cảm ơn bạn đã đánh giá!</p>
            <p className="text-sm theme-text-muted">Your feedback helps improve this portfolio.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ratings;
