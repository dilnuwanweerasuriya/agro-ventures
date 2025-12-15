import React from "react";
import { companies } from "../../data/content";

export default function Companies() {
  return (
    <div className="container-custom relative">
    <div className="mt-20 pt-16 border-t border-gray-200 pb-10">
      <h2 className="text-4xl md:text-4xl font-display font-bold text-center text-gray-900 mb-6">
        Group of Companies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-12">
        {companies.map((company, index) => (
          <div
            key={index}
            className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            <img src={company.img} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
