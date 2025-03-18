"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/layouts/DashboardLayout';
import StrategyOverview from '../components/dashboard/StrategyOverview';

export default function StrategyPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Strategy Overview</h1>
          <p className="text-gray-600">Digital Sales Strategy and Implementation Plan</p>
        </div>

        <StrategyOverview />
      </motion.div>
    </DashboardLayout>
  );
} 