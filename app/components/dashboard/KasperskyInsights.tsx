"use client";

import React from 'react';
import { Card, Title, Text, Metric, Flex, BarChart, DonutChart, Grid, Col, Badge } from "@tremor/react";

interface ProductCategory {
  category: string;
  revenue: number;
  growth: number;
  marketShare: number;
}

interface LicenseMetrics {
  type: string;
  renewalRate: number;
  averageTimeToRenew: number;
  value: number;
}

interface CompetitorData {
  competitor: string;
  marketShare: number;
  priceIndex: number;
  satisfactionScore: number;
}

interface PartnerMetrics {
  partner: string;
  revenue: number;
  growth: number;
  performance: number;
}

const productCategories: ProductCategory[] = [
  {
    category: 'Kaspersky Internet Security',
    revenue: 1250000,
    growth: 15.3,
    marketShare: 28.5
  },
  {
    category: 'Kaspersky Total Security',
    revenue: 980000,
    growth: 18.7,
    marketShare: 22.3
  },
  {
    category: 'Kaspersky Small Office',
    revenue: 850000,
    growth: 25.4,
    marketShare: 19.8
  },
  {
    category: 'Kaspersky Enterprise',
    revenue: 1450000,
    growth: 12.8,
    marketShare: 29.4
  }
];

const licenseMetrics: LicenseMetrics[] = [
  {
    type: 'Personal',
    renewalRate: 78.5,
    averageTimeToRenew: 15,
    value: 45
  },
  {
    type: 'Small Business',
    renewalRate: 85.2,
    averageTimeToRenew: 25,
    value: 30
  },
  {
    type: 'Enterprise',
    renewalRate: 92.7,
    averageTimeToRenew: 45,
    value: 25
  }
];

const competitorData: CompetitorData[] = [
  {
    competitor: 'Kaspersky',
    marketShare: 32.5,
    priceIndex: 100,
    satisfactionScore: 4.5
  },
  {
    competitor: 'Competitor A',
    marketShare: 28.3,
    priceIndex: 95,
    satisfactionScore: 4.2
  },
  {
    competitor: 'Competitor B',
    marketShare: 22.7,
    priceIndex: 85,
    satisfactionScore: 4.0
  },
  {
    competitor: 'Competitor C',
    marketShare: 16.5,
    priceIndex: 75,
    satisfactionScore: 3.8
  }
];

const partnerMetrics: PartnerMetrics[] = [
  {
    partner: 'Partner A',
    revenue: 450000,
    growth: 15.2,
    performance: 92
  },
  {
    partner: 'Partner B',
    revenue: 380000,
    growth: 12.8,
    performance: 88
  },
  {
    partner: 'Partner C',
    revenue: 320000,
    growth: 18.5,
    performance: 95
  }
];

const KasperskyInsights: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-2xl font-bold text-tremor-content-strong">Kaspersky Market Insights</Title>
          <Text className="mt-1 text-tremor-content-subtle">Product performance and market analysis</Text>
        </div>
        <Badge size="xl" className="bg-primary-50 text-primary-700">
          Updated {new Date().toLocaleDateString()}
        </Badge>
      </div>

      {/* Product Categories Performance */}
      <Card className="p-6">
        <div className="space-y-2">
          <Title className="text-tremor-content-strong">Product Categories Performance</Title>
          <Text className="text-tremor-content-subtle">Revenue and growth by product category</Text>
        </div>
        <BarChart
          className="mt-6 h-72"
          data={productCategories}
          index="category"
          categories={['revenue']}
          colors={['blue']}
          valueFormatter={(value) => `$${(value / 1000000).toFixed(2)}M`}
          yAxisWidth={80}
          showLegend={false}
          showGridLines={false}
        />
        <div className="mt-6 space-y-3">
          {productCategories.map((category) => (
            <Flex key={category.category} justifyContent="between" className="items-center">
              <Text className="font-medium text-tremor-content">{category.category}</Text>
              <div className="space-x-2">
                <Badge size="sm" className={category.growth >= 15 ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}>
                  {category.growth}% growth
                </Badge>
                <Badge size="sm" className="bg-primary-50 text-primary-700">
                  {category.marketShare}% share
                </Badge>
              </div>
            </Flex>
          ))}
        </div>
      </Card>

      {/* License Renewal Metrics */}
      <Grid numItems={1} numItemsSm={2} className="gap-6">
        <Col>
          <Card className="p-6">
            <div className="space-y-2">
              <Title className="text-tremor-content-strong">License Renewal Analytics</Title>
              <Text className="text-tremor-content-subtle">Renewal rates and timing by customer segment</Text>
            </div>
            <DonutChart
              className="mt-6 h-52"
              data={licenseMetrics}
              category="value"
              index="type"
              valueFormatter={(value) => `${value}%`}
              colors={['emerald', 'blue', 'amber']}
              showLabel={true}
              showAnimation={true}
            />
            <div className="mt-6 space-y-3">
              {licenseMetrics.map((metric) => (
                <Flex key={metric.type} justifyContent="between" className="items-center">
                  <Text className="font-medium text-tremor-content">{metric.type}</Text>
                  <div className="space-x-2">
                    <Badge size="sm" className="bg-emerald-50 text-emerald-700">
                      {metric.renewalRate}% renewal
                    </Badge>
                    <Badge size="sm" className="bg-blue-50 text-blue-700">
                      {metric.averageTimeToRenew}d to renew
                    </Badge>
                  </div>
                </Flex>
              ))}
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="p-6">
            <div className="space-y-2">
              <Title className="text-tremor-content-strong">Competitive Analysis</Title>
              <Text className="text-tremor-content-subtle">Market position vs competitors</Text>
            </div>
            <BarChart
              className="mt-6 h-52"
              data={competitorData}
              index="competitor"
              categories={['marketShare', 'satisfactionScore']}
              colors={['blue', 'emerald']}
              valueFormatter={(value) => `${value}%`}
              stack={false}
              showLegend={true}
              showGridLines={false}
            />
            <div className="mt-6 space-y-3">
              {competitorData.map((comp) => (
                <Flex key={comp.competitor} justifyContent="between" className="items-center">
                  <Text className="font-medium text-tremor-content">{comp.competitor}</Text>
                  <div className="space-x-2">
                    <Badge size="sm" className="bg-blue-50 text-blue-700">
                      Share: {comp.marketShare}%
                    </Badge>
                    <Badge size="sm" className="bg-emerald-50 text-emerald-700">
                      Score: {comp.satisfactionScore}
                    </Badge>
                  </div>
                </Flex>
              ))}
            </div>
          </Card>
        </Col>
      </Grid>

      {/* Partner Performance */}
      <Card className="p-6">
        <div className="space-y-2">
          <Title className="text-tremor-content-strong">Partner Network Performance</Title>
          <Text className="text-tremor-content-subtle">Revenue and growth by partner</Text>
        </div>
        <Grid numItems={1} numItemsSm={2} className="gap-6 mt-6">
          {partnerMetrics.map((partner) => (
            <Card key={partner.partner} className="p-4 bg-tremor-background-subtle">
              <Flex justifyContent="between" className="items-start">
                <div>
                  <Text className="font-medium text-tremor-content">{partner.partner}</Text>
                  <Metric className="mt-2">${(partner.revenue / 1000).toFixed(1)}K</Metric>
                </div>
                <Badge 
                  size="xl" 
                  className={partner.performance >= 90 ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}
                >
                  {partner.performance}% Performance
                </Badge>
              </Flex>
              <Text className="mt-4 text-tremor-content-subtle">Growth: {partner.growth}%</Text>
            </Card>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default KasperskyInsights; 