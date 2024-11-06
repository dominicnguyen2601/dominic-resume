import React from "react";
import avatar from '../assets/images/avatar2.jpg';


interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors">
    <i className={`fab ${icon} text-2xl`} aria-hidden="true"></i>
    <span className="sr-only">{label}</span>
  </a>
);

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl font-bold text-emerald-400">{value}</p>
    <p className="text-gray-400 mt-2">{label}</p>
  </div>
);

const Page: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
            <img
              src={avatar}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="flex gap-6">
              <SocialIcon href="#" icon="fa-twitter" label="Twitter" />
              <SocialIcon href="#" icon="fa-instagram" label="Instagram" />
              <SocialIcon href="#" icon="fa-facebook-f" label="Facebook" />
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl text-left lg:text-6xl font-bold leading-tight">
              I'm Dominic, a solid Software Engineer
            </h1>

            <p className="text-gray-400 text-left text-lg">
              Hello! I'm a passionate Frontend Developer with experience in
              building dynamic and responsive web applications. I specialize in
              using technologies like Vue.js, TypeScript, and modern UI
              frameworks, focusing on creating user-friendly interfaces and
              enhancing user experience.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-16">
              <StatItem value="5+" label="Years Experience" />
              <StatItem value="67+" label="Completed Projects" />
              <div className="md:col-span-1 col-span-2">
                <StatItem value="15+" label="Happy Clients" />
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-colors rounded-full px-8 py-3 text-lg font-semibold"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
