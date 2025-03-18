"use client";

import React from 'react';
import { Card, Title, Text, Metric, Flex, AreaChart, DonutChart, ProgressBar, Grid, Col, Badge } from "@tremor/react";

interface ConversionData {
  date: string;
  'Home Products': number;
  'Business Solutions': number;
  'Mobile Security': number;
}

interface CartMetrics {
  abandonmentRate: number;
  recoveryRate: number;
  topReasons: Array<{ reason: string; percentage: number }>;
}

interface ProductPerformance {
  category: string;
  conversionRate: number;
  aov: number;
  value: number;
}

const conversionData: ConversionData[] = [
  {
    date: '2024-01',
    'Home Products': 4.2,
    'Business Solutions': 3.8,
    'Mobile Security': 5.1,
  },
  {
    date: '2024-02',
    'Home Products': 4.5,
    'Business Solutions': 4.0,
    'Mobile Security': 5.3,
  },
  {
    date: '2024-03',
    'Home Products': 4.8,
    'Business Solutions': 4.2,
    'Mobile Security': 5.6,
  }
];

const cartMetrics: CartMetrics = {
  abandonmentRate: 68.5,
  recoveryRate: 25.3,
  topReasons: [
    { reason: 'High Price', percentage: 35 },
    { reason: 'Complex Checkout', percentage: 25 },
    { reason: 'Payment Issues', percentage: 20 },
    { reason: 'Technical Issues', percentage: 15 },
    { reason: 'Other', percentage: 5 }
  ]
};

const productPerformance: ProductPerformance[] = [
  {
    category: 'Internet Security',
    conversionRate: 4.8,
    aov: 89.99,
    value: 35
  },
  {
    category: 'Total Security',
    conversionRate: 5.2,
    aov: 129.99,
    value: 40
  },
  {
    category: 'Business Solutions',
    conversionRate: 3.9,
    aov: 299.99,
    value: 25
  }
];

const EcommerceMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-2xl font-bold text-tremor-content-strong">Ecommerce Performance</Title>
          <Text className="mt-1 text-tremor-content-subtle">Real-time conversion and cart analytics</Text>
        </div>
        <Badge size="xl" className="bg-primary-50 text-primary-700">
          Updated {new Date().toLocaleDateString()}
        </Badge>
      </div>
      
      {/* Conversion Rates Over Time */}
      <Card className="p-6">
        <div className="space-y-2">
          <Title className="text-tremor-content-strong">Conversion Rate Trends</Title>
          <Text className="text-tremor-content-subtle">Product category performance over time</Text>
        </div>
        <AreaChart
          className="mt-6 h-72"
          data={conversionData}
          index="date"
          categories={['Home Products', 'Business Solutions', 'Mobile Security']}
          colors={['emerald', 'blue', 'amber']}
          valueFormatter={(value) => `${value.toFixed(1)}%`}
          showLegend={true}
          showGridLines={false}
        />
      </Card>

      {/* Cart Metrics */}
      <Grid numItems={1} numItemsSm={2} className="gap-6">
        <Col>
          <Card className="p-6">
            <div className="space-y-2">
              <Title className="text-tremor-content-strong">Cart Abandonment</Title>
              <Text className="text-tremor-content-subtle">Analysis of cart abandonment patterns</Text>
            </div>
            <Flex className="mt-6" justifyContent="between">
              <div>
                <Text className="text-tremor-content-subtle">Abandonment Rate</Text>
                <Metric className="mt-2 text-tremor-content-strong">{cartMetrics.abandonmentRate}%</Metric>
              </div>
              <div>
                <Text className="text-tremor-content-subtle">Recovery Rate</Text>
                <Metric className="mt-2 text-tremor-content-strong">{cartMetrics.recoveryRate}%</Metric>
              </div>
            </Flex>
            <div className="mt-8">
              <Title className="text-sm font-medium text-tremor-content">Top Abandonment Reasons</Title>
              <div className="space-y-4 mt-4">
                {cartMetrics.topReasons.map((reason) => (
                  <div key={reason.reason}>
                    <Flex justifyContent="between" className="mb-2">
                      <Text className="text-tremor-content">{reason.reason}</Text>
                      <Text className="font-medium text-tremor-content-strong">{reason.percentage}%</Text>
                    </Flex>
                    <ProgressBar 
                      value={reason.percentage} 
                      className="h-2"
                      color={reason.percentage > 30 ? 'rose' : reason.percentage > 20 ? 'amber' : 'emerald'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="p-6">
            <div className="space-y-2">
              <Title className="text-tremor-content-strong">Product Performance</Title>
              <Text className="text-tremor-content-subtle">Average Order Value & Conversion Rate</Text>
            </div>
            <DonutChart
              className="mt-6 h-52"
              data={productPerformance}
              category="value"
              index="category"
              valueFormatter={(value) => `${value}%`}
              colors={['emerald', 'blue', 'amber']}
              showLabel={true}
              showAnimation={true}
            />
            <div className="mt-6 space-y-3">
              {productPerformance.map((product) => (
                <Flex key={product.category} justifyContent="between" className="items-center">
                  <Text className="font-medium text-tremor-content">{product.category}</Text>
                  <div className="space-x-2">
                    <Badge size="sm" className="bg-blue-50 text-blue-700">
                      AOV: ${product.aov.toFixed(2)}
                    </Badge>
                    <Badge size="sm" className="bg-emerald-50 text-emerald-700">
                      CR: {product.conversionRate}%
                    </Badge>
                  </div>
                </Flex>
              ))}
            </div>
          </Card>
        </Col>
      </Grid>
    </div>
  );
};

export default EcommerceMetrics; 