"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MarketInsight {
  country: string;
  marketSize: string;
  growthRate: string;
  penetration: string;
  keyOpportunities: string[];
}

interface StrategicInitiative {
  title: string;
  description: string;
  impact: string;
  timeline: string;
  kpis: string[];
}

const marketInsights: MarketInsight[] = [
  {
    country: "Singapore",
    marketSize: "$1.2B",
    growthRate: "15.8%",
    penetration: "High",
    keyOpportunities: [
      "Premium consumer segment targeting",
      "B2B e-commerce partnerships",
      "Digital banking integrations"
    ]
  },
  {
    country: "Malaysia",
    marketSize: "$800M",
    growthRate: "12.5%",
    penetration: "Medium",
    keyOpportunities: [
      "Shopee & Lazada optimization",
      "Local language content marketing",
      "Tech review partnerships"
    ]
  },
  {
    country: "Indonesia",
    marketSize: "$1.5B",
    growthRate: "18.2%",
    penetration: "Low-Medium",
    keyOpportunities: [
      "Tokopedia & Bukalapak presence",
      "Mobile-first campaigns",
      "Micro-influencer collaborations"
    ]
  },
  {
    country: "Thailand",
    marketSize: "$750M",
    growthRate: "14.3%",
    penetration: "Medium",
    keyOpportunities: [
      "Line shopping integration",
      "Local e-marketplace optimization",
      "Tech content partnerships"
    ]
  },
  {
    country: "Vietnam",
    marketSize: "$600M",
    growthRate: "20.1%",
    penetration: "Low",
    keyOpportunities: [
      "Tiki & Sendo optimization",
      "Zalo partnership potential",
      "Local agency collaboration"
    ]
  }
];

const strategicInitiatives: StrategicInitiative[] = [
  {
    title: "Regional E-commerce Marketplace Optimization",
    description: "Partner with top e-commerce platforms (Shopee, Lazada, Tokopedia) to optimize product listings, enhance visibility, and implement platform-specific promotional strategies.",
    impact: "High",
    timeline: "Q1-Q2 2025",
    kpis: [
      "35% increase in marketplace conversion rates",
      "50% growth in product visibility scores",
      "40% improvement in customer reviews"
    ]
  },
  {
    title: "Digital Agency Performance Network",
    description: "Build a network of specialized digital agencies across SEA markets for localized campaigns, content creation, and performance marketing, with focus on market-specific platforms.",
    impact: "High",
    timeline: "Q2-Q3 2025",
    kpis: [
      "25% reduction in customer acquisition cost",
      "60% increase in qualified leads",
      "45% improvement in campaign ROI"
    ]
  },
  {
    title: "Super-App Integration & Partnerships",
    description: "Integrate with regional super-apps (Grab, Gojek, Line) for seamless product discovery and purchase, leveraging their massive user bases and payment ecosystems.",
    impact: "High",
    timeline: "Q2-Q4 2025",
    kpis: [
      "1M+ new user touchpoints per market",
      "30% increase in mobile conversions",
      "40% growth in recurring subscriptions"
    ]
  },
  {
    title: "Local Content & Influencer Ecosystem",
    description: "Develop a comprehensive content and influencer strategy with market-leading agencies, focusing on educational content, tech reviewers, and business influencers.",
    impact: "Medium",
    timeline: "Q3-Q4 2025",
    kpis: [
      "50% increase in organic traffic",
      "35% higher engagement rates",
      "20% reduction in paid media costs"
    ]
  }
];

export default function StrategyOverview() {
  const [selectedTab, setSelectedTab] = useState('market');

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setSelectedTab('market')}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
            selectedTab === 'market'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Market Analysis
        </button>
        <button
          onClick={() => setSelectedTab('initiatives')}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
            selectedTab === 'initiatives'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Strategic Initiatives
        </button>
      </div>

      {/* Market Analysis Content */}
      {selectedTab === 'market' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketInsights.map((insight) => (
              <motion.div
                key={insight.country}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md p-6 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{insight.country}</h3>
                  <span className="text-primary font-medium">{insight.growthRate}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Market Size</span>
                    <span className="font-medium text-gray-900">{insight.marketSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Penetration</span>
                    <span className="font-medium text-gray-900">{insight.penetration}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Key Opportunities</h4>
                  <ul className="space-y-1">
                    {insight.keyOpportunities.map((opportunity, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Strategic Initiatives Content */}
      {selectedTab === 'initiatives' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {strategicInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{initiative.title}</h3>
                    <p className="text-gray-600 mt-1">{initiative.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      initiative.impact === 'High'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {initiative.impact} Impact
                    </span>
                    <span className="text-sm text-gray-500">{initiative.timeline}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Performance Indicators</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {initiative.kpis.map((kpi, kpiIndex) => (
                      <div
                        key={kpiIndex}
                        className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600"
                      >
                        {kpi}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
} 