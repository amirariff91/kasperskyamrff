"use client";

import React, { useState, useEffect } from 'react';
import { Card, Title, TabGroup, TabList, Tab, TabPanels, TabPanel, AreaChart, Badge, Metric, Flex, Text } from "@tremor/react";
import { format } from 'date-fns';
import regression from 'regression';
import { motion } from 'framer-motion';

interface KPIData {
  date: string;
  newUsers: number;
  revenue: number;
  cpa: number;
  ltv: number;
  subscriptionShare: number;
  totalActiveUsers?: number;
  subscribedUsers?: number;
}

interface MetricData {
  name: string;
  current: number;
  previous: number;
  target: number;
  forecast: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

interface CountryMetrics {
  newUsers: MetricData;
  revenue: MetricData;
  cpa: MetricData;
  ltv: MetricData;
  subscriptionShare: MetricData;
}

interface CountryData {
  historical: KPIData[];
  metrics: CountryMetrics;
}

type CountryDataMap = {
  [key in 'Indonesia' | 'Thailand' | 'Malaysia']: CountryData;
};

interface KPIMetric {
  name: string;
  current: number;
  previous: number;
  target: number;
  forecast: number;
  trend: 'up' | 'down' | 'neutral';
  unit: string;
}

interface DataPoint {
  x: number;
  y: number;
}

// Add new interfaces for better type organization
interface ChartData {
  date: string;
  value: number;
  type: 'actual' | 'forecast';
}

interface TooltipData {
  title: string;
  metrics: {
    label: string;
    value: string;
    color: string;
  }[];
}

// Add custom hooks for better state management
const useMetricAnimation = (metric: KPIMetric) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setProgress((metric.current / metric.target) * 100), 100);
      return () => clearTimeout(timer);
    }
    setProgress(0);
  }, [isHovered, metric]);

  return { isHovered, setIsHovered, progress };
};

// Add custom components for better organization
const MetricCard: React.FC<{ metric: KPIMetric; countryData: CountryData }> = ({ metric, countryData }) => {
  const { isHovered, setIsHovered, progress } = useMetricAnimation(metric);
  
  const formatMetricValue = (value: number, metricName: string, isPercentage: boolean = false) => {
    if (metricName === 'Subscription Share') {
      return (value * 100).toFixed(1) + '%';
    }
    return metric.unit + value.toLocaleString();
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card 
        className={`p-4 transition-all duration-200 ${
          isHovered ? 'ring-2 ring-primary-200 shadow-lg' : 'shadow-sm'
        }`}
      >
        <Flex className="justify-between items-start">
          <Title className="text-tremor-content">{metric.name}</Title>
          <Badge 
            size="sm"
            className={`${
              metric.trend === 'up' ? 'bg-green-100 text-green-700' :
              metric.trend === 'down' ? 'bg-red-100 text-red-700' :
              'bg-gray-100 text-gray-700'
            }`}
          >
            {((metric.current - metric.previous) / metric.previous * 100).toFixed(1)}%
          </Badge>
        </Flex>

        <Metric className="mt-2 text-tremor-content-strong">
          {formatMetricValue(metric.current, metric.name)}
        </Metric>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-tremor-background-subtle rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="mt-3 space-y-2">
          <Flex>
            <Text className="text-sm text-tremor-content-subtle">Target</Text>
            <Text className="text-sm font-medium">
              {formatMetricValue(metric.target, metric.name)}
            </Text>
          </Flex>
          <Flex>
            <Text className="text-sm text-primary-600">Forecast</Text>
            <Text className="text-sm font-medium text-primary-600">
              {formatMetricValue(metric.forecast, metric.name)}
            </Text>
          </Flex>
        </div>

        {metric.name === 'Subscription Share' && (
          <div className="text-xs text-tremor-content-subtle mt-3 p-2 bg-tremor-background-subtle rounded-tremor-default">
            <Flex>
              <Text>Active Users</Text>
              <Text className="font-medium">
                {countryData.historical[countryData.historical.length - 1].totalActiveUsers?.toLocaleString()}
              </Text>
            </Flex>
            <Flex className="mt-1">
              <Text>Subscribed</Text>
              <Text className="font-medium">
                {countryData.historical[countryData.historical.length - 1].subscribedUsers?.toLocaleString()}
              </Text>
            </Flex>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

// Update the historical data to reflect 2024-2025 timeline
const countryData: { [key: string]: CountryData } = {
  Indonesia: {
    historical: [
      {
        date: '2024-03-15',
        newUsers: 28000,
        revenue: 840000,
        cpa: 20,
        ltv: 90,
        subscriptionShare: 0.45,
        totalActiveUsers: 150000,
        subscribedUsers: 67500
      },
      {
        date: '2024-06-15',
        newUsers: 32000,
        revenue: 1120000,
        cpa: 19,
        ltv: 95,
        subscriptionShare: 0.48,
        totalActiveUsers: 180000,
        subscribedUsers: 86400
      },
      {
        date: '2024-09-15',
        newUsers: 38000,
        revenue: 1520000,
        cpa: 18,
        ltv: 100,
        subscriptionShare: 0.52,
        totalActiveUsers: 220000,
        subscribedUsers: 114400
      },
      {
        date: '2024-12-15',
        newUsers: 45000,
        revenue: 2025000,
        cpa: 17,
        ltv: 105,
        subscriptionShare: 0.55,
        totalActiveUsers: 275000,
        subscribedUsers: 151250
      },
      {
        date: '2025-03-18',
        newUsers: 52000,
        revenue: 2600000,
        cpa: 16,
        ltv: 110,
        subscriptionShare: 0.58,
        totalActiveUsers: 320000,
        subscribedUsers: 185600
      }
    ],
    metrics: {
      newUsers: {
        name: 'New Net Users',
        current: 52000,
        previous: 45000,
        target: 60000,
        forecast: 58000,
        trend: 'up',
        unit: ''
      },
      revenue: {
        name: 'Revenue',
        current: 2600000,
        previous: 2025000,
        target: 3000000,
        forecast: 2800000,
        trend: 'up',
        unit: '$'
      },
      cpa: {
        name: 'CPA',
        current: 16,
        previous: 17,
        target: 15,
        forecast: 15.5,
        trend: 'down',
        unit: '$'
      },
      ltv: {
        name: 'LTV',
        current: 110,
        previous: 105,
        target: 120,
        forecast: 115,
        trend: 'up',
        unit: '$'
      },
      subscriptionShare: {
        name: 'Subscription Share',
        current: 0.58,
        previous: 0.55,
        target: 0.65,
        forecast: 0.61,
        trend: 'up',
        unit: ''
      }
    }
  },
  Thailand: {
    historical: [
      {
        date: '2024-03-15',
        newUsers: 22000,
        revenue: 660000,
        cpa: 23,
        ltv: 85,
        subscriptionShare: 0.40,
        totalActiveUsers: 110000,
        subscribedUsers: 44000
      },
      {
        date: '2024-06-15',
        newUsers: 26000,
        revenue: 910000,
        cpa: 21,
        ltv: 90,
        subscriptionShare: 0.43,
        totalActiveUsers: 135000,
        subscribedUsers: 58050
      },
      {
        date: '2024-09-15',
        newUsers: 31000,
        revenue: 1240000,
        cpa: 19,
        ltv: 95,
        subscriptionShare: 0.46,
        totalActiveUsers: 165000,
        subscribedUsers: 75900
      },
      {
        date: '2024-12-15',
        newUsers: 37000,
        revenue: 1665000,
        cpa: 18,
        ltv: 100,
        subscriptionShare: 0.49,
        totalActiveUsers: 200000,
        subscribedUsers: 98000
      },
      {
        date: '2025-03-18',
        newUsers: 42000,
        revenue: 2100000,
        cpa: 17,
        ltv: 105,
        subscriptionShare: 0.52,
        totalActiveUsers: 240000,
        subscribedUsers: 124800
      }
    ],
    metrics: {
      newUsers: {
        name: 'New Net Users',
        current: 42000,
        previous: 37000,
        target: 50000,
        forecast: 46000,
        trend: 'up',
        unit: ''
      },
      revenue: {
        name: 'Revenue',
        current: 2100000,
        previous: 1665000,
        target: 2500000,
        forecast: 2300000,
        trend: 'up',
        unit: '$'
      },
      cpa: {
        name: 'CPA',
        current: 17,
        previous: 18,
        target: 16,
        forecast: 16.5,
        trend: 'down',
        unit: '$'
      },
      ltv: {
        name: 'LTV',
        current: 105,
        previous: 100,
        target: 115,
        forecast: 110,
        trend: 'up',
        unit: '$'
      },
      subscriptionShare: {
        name: 'Subscription Share',
        current: 0.52,
        previous: 0.49,
        target: 0.60,
        forecast: 0.55,
        trend: 'up',
        unit: ''
      }
    }
  },
  Malaysia: {
    historical: [
      {
        date: '2024-03-15',
        newUsers: 19000,
        revenue: 570000,
        cpa: 21,
        ltv: 87,
        subscriptionShare: 0.42,
        totalActiveUsers: 95000,
        subscribedUsers: 39900
      },
      {
        date: '2024-06-15',
        newUsers: 23000,
        revenue: 805000,
        cpa: 19,
        ltv: 92,
        subscriptionShare: 0.45,
        totalActiveUsers: 115000,
        subscribedUsers: 51750
      },
      {
        date: '2024-09-15',
        newUsers: 27000,
        revenue: 1080000,
        cpa: 18,
        ltv: 97,
        subscriptionShare: 0.48,
        totalActiveUsers: 140000,
        subscribedUsers: 67200
      },
      {
        date: '2024-12-15',
        newUsers: 32000,
        revenue: 1440000,
        cpa: 17,
        ltv: 102,
        subscriptionShare: 0.51,
        totalActiveUsers: 170000,
        subscribedUsers: 86700
      },
      {
        date: '2025-03-18',
        newUsers: 36000,
        revenue: 1800000,
        cpa: 16,
        ltv: 107,
        subscriptionShare: 0.54,
        totalActiveUsers: 200000,
        subscribedUsers: 108000
      }
    ],
    metrics: {
      newUsers: {
        name: 'New Net Users',
        current: 36000,
        previous: 32000,
        target: 42000,
        forecast: 39000,
        trend: 'up',
        unit: ''
      },
      revenue: {
        name: 'Revenue',
        current: 1800000,
        previous: 1440000,
        target: 2100000,
        forecast: 1950000,
        trend: 'up',
        unit: '$'
      },
      cpa: {
        name: 'CPA',
        current: 16,
        previous: 17,
        target: 15,
        forecast: 15.5,
        trend: 'down',
        unit: '$'
      },
      ltv: {
        name: 'LTV',
        current: 107,
        previous: 102,
        target: 115,
        forecast: 112,
        trend: 'up',
        unit: '$'
      },
      subscriptionShare: {
        name: 'Subscription Share',
        current: 0.54,
        previous: 0.51,
        target: 0.60,
        forecast: 0.57,
        trend: 'up',
        unit: ''
      }
    }
  }
};

type CountryName = 'Indonesia' | 'Thailand' | 'Malaysia';

const countries: CountryName[] = ['Indonesia', 'Thailand', 'Malaysia'];

export default function PerformanceMetrics() {
  const [selectedCountry, setSelectedCountry] = useState<number>(0);
  const [selectedView, setSelectedView] = useState<number>(0);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Get current country's data
  const currentCountryData = countryData[countries[selectedCountry] as CountryName];

  // Generate forecast for current country
  const generateForecast = (data: KPIData[], months: number = 6) => {
    const points: [number, number][] = data.map((d, i) => [i, d.newUsers]);
    const result = regression.linear(points);
    
    const lastDate = new Date(data[data.length - 1].date);
    const forecast = Array.from({ length: months }, (_, i) => {
      const forecastDate = new Date(lastDate);
      forecastDate.setMonth(lastDate.getMonth() + i + 1);
      
      const predictedUsers = Math.round(result.predict(data.length + i)[1]);
      const avgRevenuePerUser = data[data.length - 1].revenue / data[data.length - 1].newUsers;
      
      return {
        date: format(forecastDate, 'yyyy-MM'),
        newUsers: predictedUsers,
        revenue: Math.round(predictedUsers * avgRevenuePerUser),
        cpa: Math.max(15, currentCountryData.metrics.cpa.current - (i * 0.3)),
        ltv: Math.min(120, currentCountryData.metrics.ltv.current + (i * 0.8)),
        subscriptionShare: Math.min(0.65, currentCountryData.metrics.subscriptionShare.current + (i * 0.01))
      };
    });

    return forecast;
  };

  const forecastData = generateForecast(currentCountryData.historical);

  const kpiMetrics: KPIMetric[] = [
    {
      name: 'New Net Users',
      current: currentCountryData.metrics.newUsers.current,
      previous: currentCountryData.metrics.newUsers.previous,
      target: currentCountryData.metrics.newUsers.target,
      forecast: currentCountryData.metrics.newUsers.forecast,
      trend: currentCountryData.metrics.newUsers.current > currentCountryData.metrics.newUsers.previous ? 'up' : 'down',
      unit: ''
    },
    {
      name: 'Revenue',
      current: currentCountryData.metrics.revenue.current,
      previous: currentCountryData.metrics.revenue.previous,
      target: currentCountryData.metrics.revenue.target,
      forecast: currentCountryData.metrics.revenue.forecast,
      trend: currentCountryData.metrics.revenue.current > currentCountryData.metrics.revenue.previous ? 'up' : 'down',
      unit: '$'
    },
    {
      name: 'CPA',
      current: currentCountryData.metrics.cpa.current,
      previous: currentCountryData.metrics.cpa.previous,
      target: currentCountryData.metrics.cpa.target,
      forecast: currentCountryData.metrics.cpa.forecast,
      trend: currentCountryData.metrics.cpa.current < currentCountryData.metrics.cpa.previous ? 'up' : 'down',
      unit: '$'
    },
    {
      name: 'LTV',
      current: currentCountryData.metrics.ltv.current,
      previous: currentCountryData.metrics.ltv.previous,
      target: currentCountryData.metrics.ltv.target,
      forecast: currentCountryData.metrics.ltv.forecast,
      trend: currentCountryData.metrics.ltv.current > currentCountryData.metrics.ltv.previous ? 'up' : 'down',
      unit: '$'
    },
    {
      name: 'Subscription Share',
      current: currentCountryData.metrics.subscriptionShare.current,
      previous: currentCountryData.metrics.subscriptionShare.previous,
      target: currentCountryData.metrics.subscriptionShare.target,
      forecast: currentCountryData.metrics.subscriptionShare.forecast,
      trend: currentCountryData.metrics.subscriptionShare.current > currentCountryData.metrics.subscriptionShare.previous ? 'up' : 'down',
      unit: ''
    }
  ];

  const combinedData = [...currentCountryData.historical, ...forecastData].map(item => ({
    ...item,
    date: format(new Date(item.date), 'MMM yyyy')
  }));

  // Helper function to get the data key for a metric
  const getMetricKey = (metricName: string): string => {
    const keyMap: { [key: string]: string } = {
      'New Net Users': 'newUsers',
      'Revenue': 'revenue',
      'CPA': 'cpa',
      'LTV': 'ltv',
      'Subscription Share': 'subscriptionShare'
    };
    return keyMap[metricName] || metricName.toLowerCase().replace(/\s+/g, '');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card className="p-6">
        <Flex className="flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <Title className="text-2xl font-bold text-tremor-content-strong">
              Digital Paid Media Performance
            </Title>
            <Text className="text-tremor-content-subtle mt-1">
              KPI tracking and forecasting across Southeast Asia
            </Text>
          </div>
          <div className="flex items-center space-x-4">
            <Badge size="xl" className="bg-primary-50 text-primary-700">
              {countries[selectedCountry]}
            </Badge>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100"
              onClick={() => setSelectedCountry((prev) => (prev + 1) % countries.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8" />
              </svg>
            </motion.button>
          </div>
        </Flex>

        {/* Country Selection */}
        <TabGroup 
          index={selectedCountry} 
          onIndexChange={setSelectedCountry}
          className="mt-6"
        >
          <TabList 
            className="bg-primary-50 p-1 rounded-tremor-default"
          >
            {countries.map((country) => (
              <Tab 
                key={country}
                className="px-4 py-2 text-sm font-medium rounded-tremor-default transition-all duration-200 ui-selected:bg-white ui-selected:text-primary-600 ui-selected:shadow-sm ui-not-selected:text-primary-600 ui-not-selected:hover:bg-white/50"
              >
                {country}
              </Tab>
            ))}
          </TabList>
        </TabGroup>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {kpiMetrics.map((metric) => (
            <MetricCard
              key={metric.name}
              metric={metric}
              countryData={currentCountryData}
            />
          ))}
        </div>

        {/* Trend Charts */}
        <TabGroup 
          className="mt-6" 
          index={selectedView} 
          onIndexChange={setSelectedView}
        >
          <TabList 
            className="bg-tremor-background-subtle p-1 rounded-tremor-default"
          >
            {kpiMetrics.map((metric) => (
              <Tab 
                key={metric.name}
                className="ui-selected:bg-white ui-selected:shadow-sm"
              >
                {metric.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {kpiMetrics.map((metric) => (
              <TabPanel key={metric.name}>
                <Card className="mt-4">
                  <Flex className="items-start justify-between">
                    <div>
                      <Title>{metric.name} Trend</Title>
                      <Text className="text-tremor-content-subtle mt-1">
                        Historical data and forecast
                      </Text>
                    </div>
                    <Badge 
                      size="sm"
                      className="bg-primary-50 text-primary-700"
                    >
                      Updated {format(new Date(), 'MMM d, yyyy')}
                    </Badge>
                  </Flex>
                  <AreaChart
                    className="mt-6 h-72"
                    data={combinedData}
                    index="date"
                    categories={[getMetricKey(metric.name)]}
                    colors={["primary"]}
                    valueFormatter={(number: number) => 
                      metric.name === 'Subscription Share'
                        ? (number * 100).toFixed(1) + '%'
                        : metric.unit + number.toLocaleString()
                    }
                    showLegend={false}
                    curveType="monotone"
                  />
                </Card>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Card>
    </motion.div>
  );
} 