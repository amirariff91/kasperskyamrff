"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/layouts/DashboardLayout';
import RegionalPerformance from '../components/dashboard/RegionalPerformance';
import ChannelAnalytics from '../components/dashboard/ChannelAnalytics';

export default function PerformancePage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600">Regional Performance and Channel Analytics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <RegionalPerformance />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ChannelAnalytics />
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
} 