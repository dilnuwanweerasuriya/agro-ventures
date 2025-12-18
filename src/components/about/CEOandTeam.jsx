import React, { useState } from 'react';

const CEOAndTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const ceoData = {
    name: 'Alexandre Rasolofo',
    designation: 'Chief Executive Officer',
    image: '/api/placeholder/400/400',
    message: `"At Vanilla Exports, we believe in more than just trading premium vanilla — we're building bridges between Madagascar's hardworking farmers and the world's finest culinary establishments. Every bean we export carries the dedication of our farmers, the expertise of our team, and our unwavering commitment to quality.

    Our journey began with a simple vision: to share the authentic taste of Madagascar with the world while ensuring sustainable livelihoods for our farming communities. Today, as we serve clients across 50+ countries, that vision remains at the heart of everything we do.

    I invite you to experience the Vanilla Exports difference — where tradition meets excellence, and every partnership is built on trust."`,
    experience: '15+ Years in Export Industry',
    education: 'MBA, International Business',
    achievements: [
      'Forbes 30 Under 30 - Africa',
      'Best Exporter Award 2023',
      'Sustainability Champion'
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'ceo@vanillaexports.com'
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Marie Andriamihaja',
      designation: 'Chief Operations Officer',
      image: '/api/placeholder/300/300',
      department: 'Operations',
      description: 'Oversees all operational processes from sourcing to delivery',
      experience: '12 years',
      social: { linkedin: '#', email: 'marie@vanillaexports.com' }
    },
    {
      id: 2,
      name: 'Jean-Pierre Rakoto',
      designation: 'Head of Quality Assurance',
      image: '/api/placeholder/300/300',
      department: 'Quality',
      description: 'Ensures every vanilla bean meets our premium standards',
      experience: '10 years',
      social: { linkedin: '#', email: 'jp@vanillaexports.com' }
    },
    {
      id: 3,
      name: 'Sofia Ramanantsoa',
      designation: 'Director of Client Relations',
      image: '/api/placeholder/300/300',
      department: 'Sales',
      description: 'Builds lasting partnerships with global clients',
      experience: '8 years',
      social: { linkedin: '#', email: 'sofia@vanillaexports.com' }
    },
    {
      id: 4,
      name: 'David Randrianarisoa',
      designation: 'Logistics Manager',
      image: '/api/placeholder/300/300',
      department: 'Logistics',
      description: 'Manages international shipping and supply chain',
      experience: '9 years',
      social: { linkedin: '#', email: 'david@vanillaexports.com' }
    }
  ];

  const getDepartmentColor = (dept) => {
    const colors = {
      Operations: 'bg-blue-100 text-blue-700',
      Quality: 'bg-green-100 text-green-700',
      Sales: 'bg-purple-100 text-purple-700',
      Logistics: 'bg-orange-100 text-orange-700'
    };
    return colors[dept] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      

      {/* CEO Section - Highlighted */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Message from Our CEO
          </h2>
        </div>

        {/* CEO Card - Premium Highlighted Design */}
        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl transform rotate-1 opacity-20 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl transform -rotate-1 opacity-20 blur-sm"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200">
            {/* Golden Top Banner */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400"></div>
            
            <div className="flex flex-col lg:flex-row">
              {/* CEO Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="relative p-8 lg:p-10">
                  {/* CEO Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-lg">👑</span>
                      <span className="font-bold text-sm">CEO</span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-amber-200 animate-pulse"></div>
                    <div className="absolute -inset-2 rounded-full border-2 border-amber-100"></div>
                    <div className="absolute -inset-4 rounded-full border border-amber-50"></div>
                    
                    {/* Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
                      <img
                        src={ceoData.image}
                        alt={ceoData.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -right-2 top-1/4 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm">✨</span>
                    </div>
                    <div className="absolute -left-2 bottom-1/4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs">⭐</span>
                    </div>
                  </div>

                  {/* Name & Title Below Image */}
                  <div className="text-center mt-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-stone-800">
                      {ceoData.name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg mt-1">
                      {ceoData.designation}
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                        📚 {ceoData.education}
                      </span>
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                        ⏱️ {ceoData.experience}
                      </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mt-4">
                      <a href={ceoData.social.linkedin} 
                        className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={ceoData.social.twitter}
                        className="w-10 h-10 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${ceoData.social.email}`}
                        className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Message Section */}
              <div className="lg:w-3/5 p-8 lg:p-10 bg-gradient-to-br from-stone-50 to-amber-50/50">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-16 h-16 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Message */}
                <blockquote className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">
                  {ceoData.message}
                </blockquote>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-amber-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-script text-3xl text-amber-700 italic">
                        {ceoData.name}
                      </p>
                      <p className="text-stone-500 text-sm mt-1">
                        Chief Executive Officer
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {ceoData.achievements.map((achievement, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-xs font-medium">
                          🏆 {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            A dedicated team of professionals committed to delivering excellence in every bean we export
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 
                ${hoveredMember === member.id ? 'shadow-2xl scale-105 -translate-y-2' : 'hover:shadow-xl'}`}>
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent 
                    transition-opacity duration-300 ${hoveredMember === member.id ? 'opacity-90' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm leading-relaxed">
                        {member.description}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <a href={member.social.linkedin}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href={`mailto:${member.social.email}`}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDepartmentColor(member.department)}`}>
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 text-sm font-medium mt-1">
                    {member.designation}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-stone-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{member.experience} experience</span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CEOAndTeam;