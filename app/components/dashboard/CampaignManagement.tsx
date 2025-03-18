"use client";

import React, { useState } from 'react';
import { Card, Title, Text, TabGroup, Tab, TabList, TabPanels, TabPanel, Badge, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Select, SelectItem, Button, Flex } from "@tremor/react";
import { motion } from 'framer-motion';

interface Campaign {
  id: string;
  name: string;
  platform: string;
  country: string;
  status: 'active' | 'scheduled' | 'completed' | 'paused';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  conversions: number;
  cpa: number;
  roas: number;
}

const campaigns: Campaign[] = [
  // Indonesia Campaigns
  {
    id: 'ID-001',
    name: 'Ramadan Security Bundle',
    platform: 'Tokopedia',
    country: 'Indonesia',
    status: 'active',
    startDate: '2025-03-01',
    endDate: '2025-04-15',
    budget: 150000,
    spent: 85000,
    conversions: 4200,
    cpa: 20.24,
    roas: 3.8
  },
  {
    id: 'ID-002',
    name: 'Business Protection Suite',
    platform: 'Shopee',
    country: 'Indonesia',
    status: 'active',
    startDate: '2025-02-15',
    endDate: '2025-05-15',
    budget: 200000,
    spent: 120000,
    conversions: 5800,
    cpa: 20.69,
    roas: 3.5
  },
  {
    id: 'ID-003',
    name: 'Mobile Security Campaign',
    platform: 'Lazada',
    country: 'Indonesia',
    status: 'scheduled',
    startDate: '2025-04-01',
    endDate: '2025-06-30',
    budget: 180000,
    spent: 0,
    conversions: 0,
    cpa: 0,
    roas: 0
  },
  // Thailand Campaigns
  {
    id: 'TH-001',
    name: 'Songkran Security Special',
    platform: 'Shopee',
    country: 'Thailand',
    status: 'active',
    startDate: '2025-03-10',
    endDate: '2025-04-20',
    budget: 120000,
    spent: 45000,
    conversions: 2200,
    cpa: 20.45,
    roas: 3.6
  },
  {
    id: 'TH-002',
    name: 'SME Cybersecurity Bundle',
    platform: 'Lazada',
    country: 'Thailand',
    status: 'scheduled',
    startDate: '2025-04-01',
    endDate: '2025-06-30',
    budget: 150000,
    spent: 0,
    conversions: 0,
    cpa: 0,
    roas: 0
  },
  // Malaysia Campaigns
  {
    id: 'MY-001',
    name: 'Raya Protection Package',
    platform: 'Shopee',
    country: 'Malaysia',
    status: 'active',
    startDate: '2025-03-01',
    endDate: '2025-04-15',
    budget: 100000,
    spent: 55000,
    conversions: 2800,
    cpa: 19.64,
    roas: 3.9
  },
  {
    id: 'MY-002',
    name: 'Digital Security Suite',
    platform: 'Lazada',
    country: 'Malaysia',
    status: 'completed',
    startDate: '2025-01-15',
    endDate: '2025-03-15',
    budget: 120000,
    spent: 118000,
    conversions: 5900,
    cpa: 20.00,
    roas: 3.7
  }
];

const platforms = ['All', 'Shopee', 'Lazada', 'Tokopedia'];
const countries = ['All', 'Indonesia', 'Thailand', 'Malaysia'];
const statuses = ['All', 'active', 'scheduled', 'completed', 'paused'];

export default function CampaignManagement() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredCampaigns = campaigns.filter(campaign => {
    return (selectedPlatform === 'All' || campaign.platform === selectedPlatform) &&
           (selectedCountry === 'All' || campaign.country === selectedCountry) &&
           (selectedStatus === 'All' || campaign.status === selectedStatus);
  });

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      completed: 'bg-gray-100 text-gray-800',
      paused: 'bg-yellow-100 text-yellow-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTotalMetrics = () => {
    return filteredCampaigns.reduce((acc, campaign) => {
      return {
        budget: acc.budget + campaign.budget,
        spent: acc.spent + campaign.spent,
        conversions: acc.conversions + campaign.conversions,
      };
    }, { budget: 0, spent: 0, conversions: 0 });
  };

  const totals = getTotalMetrics();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <Title>Campaign Management</Title>
        <Text>Track and manage digital marketing campaigns across Southeast Asia</Text>
      </div>

      <Card>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select
            value={selectedPlatform}
            onValueChange={setSelectedPlatform}
            placeholder="Select Platform"
          >
            {platforms.map((platform) => (
              <SelectItem key={platform} value={platform}>
                {platform}
              </SelectItem>
            ))}
          </Select>

          <Select
            value={selectedCountry}
            onValueChange={setSelectedCountry}
            placeholder="Select Country"
          >
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </Select>

          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
            placeholder="Select Status"
          >
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card decoration="top" decorationColor="indigo">
            <Title>Total Budget</Title>
            <Text className="mt-2">${totals.budget.toLocaleString()}</Text>
          </Card>
          <Card decoration="top" decorationColor="green">
            <Title>Total Spent</Title>
            <Text className="mt-2">${totals.spent.toLocaleString()}</Text>
          </Card>
          <Card decoration="top" decorationColor="orange">
            <Title>Total Conversions</Title>
            <Text className="mt-2">{totals.conversions.toLocaleString()}</Text>
          </Card>
        </div>

        {/* Campaigns Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Campaign</TableHeaderCell>
              <TableHeaderCell>Platform</TableHeaderCell>
              <TableHeaderCell>Country</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Budget</TableHeaderCell>
              <TableHeaderCell>Spent</TableHeaderCell>
              <TableHeaderCell>CPA</TableHeaderCell>
              <TableHeaderCell>ROAS</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>
                  <div>
                    <Text>{campaign.name}</Text>
                    <Text className="text-xs text-tremor-content-subtle">
                      {campaign.startDate} - {campaign.endDate}
                    </Text>
                  </div>
                </TableCell>
                <TableCell>{campaign.platform}</TableCell>
                <TableCell>{campaign.country}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>${campaign.budget.toLocaleString()}</TableCell>
                <TableCell>${campaign.spent.toLocaleString()}</TableCell>
                <TableCell>
                  {campaign.cpa > 0 ? `$${campaign.cpa.toFixed(2)}` : '-'}
                </TableCell>
                <TableCell>
                  {campaign.roas > 0 ? `${campaign.roas.toFixed(1)}x` : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </motion.div>
  );
} 