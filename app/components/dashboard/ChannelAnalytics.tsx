"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ChannelData {
  name: string;
  users: number;
  revenue: number;
  conversion: number;
  cpa: number;
}

const channelData: ChannelData[] = [
  { name: 'Paid Search', users: 15000, revenue: 280000, conversion: 3.2, cpa: 32.45 },
  { name: 'Display Ads', users: 8000, revenue: 150000, conversion: 2.8, cpa: 35.78 },
  { name: 'Social Media', users: 12000, revenue: 220000, conversion: 2.9, cpa: 38.92 },
  { name: 'Email Marketing', users: 5000, revenue: 95000, conversion: 3.5, cpa: 36.45 },
  { name: 'Affiliate', users: 3000, revenue: 55000, conversion: 3.1, cpa: 34.89 },
];

export default function ChannelAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Channel Analytics</h2>
          <p className="text-gray-600">Performance by marketing channel</p>
        </div>
      </div>

      <div className="space-y-6">
        {channelData.map((channel, index) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#00A88F] flex items-center justify-center text-white font-semibold">
                {channel.name[0]}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{channel.name}</h3>
                <p className="text-sm text-gray-600">{channel.users.toLocaleString()} users</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">${channel.revenue.toLocaleString()}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-[#00A88F]">{channel.conversion}% conversion</span>
                <span className="text-gray-600">${channel.cpa.toFixed(2)} CPA</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">
              {channelData.reduce((sum, channel) => sum + channel.users, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-[#00A88F]">
              ${channelData.reduce((sum, channel) => sum + channel.revenue, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 