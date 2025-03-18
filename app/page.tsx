"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Title, Tab, TabGroup, TabList, Grid, Col, Text, Metric, Badge } from "@tremor/react";
import DashboardLayout from './components/layouts/DashboardLayout';
import StrategyOverview from './components/dashboard/StrategyOverview';
import RegionalPerformance from './components/dashboard/RegionalPerformance';
import ChannelAnalytics from './components/dashboard/ChannelAnalytics';
import BudgetPlanning from './components/dashboard/BudgetPlanning';
import CampaignManagement from './components/dashboard/CampaignManagement';
import PerformanceMetrics from './components/dashboard/PerformanceMetrics';

const sections = [
  { id: 'overview', name: 'Overview' },
  { id: 'performance', name: 'Performance' },
  { id: 'campaigns', name: 'Campaigns' },
  { id: 'budget', name: 'Budget' }
];

export default function Home() {
  const [activeSection, setActiveSection] = React.useState('overview');

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-tremor-background-muted"
      >
        {/* Header Section */}
        <div className="bg-white border-b border-tremor-border">
          <div className="px-6 py-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-tremor-content-strong">
                  eCommerce Dashboard
                </h1>
                <Text className="text-tremor-content-subtle mt-1">
                  Southeast Asia Digital Sales Performance
                </Text>
              </div>
              <Badge size="xl" className="bg-primary-50 text-primary-700">
                Last Updated: {new Date().toLocaleDateString()}
              </Badge>
            </div>

            {/* Navigation Tabs */}
            <TabGroup 
              className="mt-6"
              index={sections.findIndex(s => s.id === activeSection)}
              onIndexChange={(index) => setActiveSection(sections[index].id)}
            >
              <TabList className="bg-primary-50 p-1 rounded-tremor-default">
                {sections.map((section) => (
                  <Tab
                    key={section.id}
                    className="px-4 py-2 text-sm font-medium rounded-tremor-default transition-all duration-200 ui-selected:bg-white ui-selected:text-primary-600 ui-selected:shadow-sm ui-not-selected:text-primary-600 ui-not-selected:hover:bg-white/50"
                  >
                    {section.name}
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
            {/* Performance Metrics - Full Width */}
            <Col numColSpan={1} numColSpanSm={2} numColSpanLg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <PerformanceMetrics />
              </motion.div>
            </Col>

            {/* Strategy Overview */}
            <Col numColSpan={1} numColSpanSm={2} numColSpanLg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <Card className="h-full">
                  <StrategyOverview />
                </Card>
              </motion.div>
            </Col>

            {/* Regional Performance */}
            <Col numColSpan={1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="h-full"
              >
                <Card className="h-full">
                  <RegionalPerformance />
                </Card>
              </motion.div>
            </Col>

            {/* Campaign Management */}
            <Col numColSpan={1} numColSpanSm={2} numColSpanLg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CampaignManagement />
                </Card>
              </motion.div>
            </Col>

            {/* Channel Analytics */}
            <Col numColSpan={1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="h-full"
              >
                <Card className="h-full">
                  <ChannelAnalytics />
                </Card>
              </motion.div>
            </Col>

            {/* Budget Planning - Full Width */}
            <Col numColSpan={1} numColSpanSm={2} numColSpanLg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <BudgetPlanning />
                </Card>
              </motion.div>
            </Col>
          </Grid>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
