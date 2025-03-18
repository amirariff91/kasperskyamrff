"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CountryData {
  name: string;
  users: number;
  revenue: number;
  growth: number;
}

const countryData: CountryData[] = [
  { name: 'Indonesia', users: 25000, revenue: 450000, growth: 15 },
  { name: 'Thailand', users: 18000, revenue: 320000, growth: 20 },
  { name: 'Malaysia', users: 22000, revenue: 380000, growth: 25 },
  { name: 'Philippines', users: 15000, revenue: 280000, growth: 30 },
  { name: 'Singapore', users: 28000, revenue: 520000, growth: 12 },
];

export default function RegionalPerformance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Regional Performance</h2>
          <p className="text-gray-600">Key metrics by country</p>
        </div>
      </div>

      <div className="space-y-6">
        {countryData.map((country, index) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#00A88F] flex items-center justify-center text-white font-semibold">
                {country.name[0]}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.users.toLocaleString()} users</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">${country.revenue.toLocaleString()}</p>
              <p className={`text-sm ${country.growth >= 20 ? 'text-green-600' : 'text-[#00A88F]'}`}>
                {country.growth}% growth
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">
              {countryData.reduce((sum, country) => sum + country.users, 0).toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-[#00A88F]">
              ${countryData.reduce((sum, country) => sum + country.revenue, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 