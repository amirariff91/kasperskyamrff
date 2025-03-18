"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/layouts/DashboardLayout';
import CustomerJourney from '../components/dashboard/CustomerJourney';

export default function CustomerJourneyPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Customer Journey Mapping</h1>
          <p className="text-gray-600">Southeast Asia Customer Journey Analysis</p>
        </div>

        <CustomerJourney />
      </motion.div>
    </DashboardLayout>
  );
} 