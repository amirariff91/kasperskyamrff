"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BudgetData {
  channel: string;
  allocated: number;
  spent: number;
  remaining: number;
  percentage: number;
}

const budgetData: BudgetData[] = [
  { channel: 'Paid Search', allocated: 350000, spent: 280000, remaining: 70000, percentage: 80 },
  { channel: 'Display Ads', allocated: 200000, spent: 150000, remaining: 50000, percentage: 75 },
  { channel: 'Social Media', allocated: 150000, spent: 120000, remaining: 30000, percentage: 80 },
  { channel: 'Email Marketing', allocated: 100000, spent: 75000, remaining: 25000, percentage: 75 },
  { channel: 'Affiliate', allocated: 50000, spent: 40000, remaining: 10000, percentage: 80 },
];

export default function BudgetPlanning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Budget Planning</h2>
          <p className="text-gray-600">Budget allocation and spending by channel</p>
        </div>
      </div>

      <div className="space-y-6">
        {budgetData.map((budget, index) => (
          <motion.div
            key={budget.channel}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{budget.channel}</span>
              <span className="text-sm text-gray-600">{budget.percentage}% spent</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${budget.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-[#00A88F] rounded-full"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>${budget.spent.toLocaleString()} spent</span>
              <span>${budget.remaining.toLocaleString()} remaining</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Budget</p>
            <p className="text-2xl font-bold text-gray-900">
              ${budgetData.reduce((sum, budget) => sum + budget.allocated, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-[#00A88F]">
              ${budgetData.reduce((sum, budget) => sum + budget.spent, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 