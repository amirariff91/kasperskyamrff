"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JourneyStage {
  name: string;
  description: string;
  touchpoints: string[];
  painPoints: string[];
  opportunities: string[];
  metrics: {
    name: string;
    value: string;
    trend: 'up' | 'down' | 'neutral';
  }[];
}

interface CountryJourney {
  country: string;
  stages: JourneyStage[];
}

const journeyData: CountryJourney[] = [
  {
    country: 'Indonesia',
    stages: [
      {
        name: 'Discovery',
        description: 'Initial product discovery through digital channels',
        touchpoints: [
          'Tokopedia Featured Products',
          'Shopee Search Ads',
          'Instagram Shopping',
          'Google Shopping',
          'TikTok Shop'
        ],
        painPoints: [
          'High competition in marketplaces',
          'Price comparison challenges',
          'Limited product education'
        ],
        opportunities: [
          'Marketplace optimization',
          'Platform-specific content',
          'Influencer partnerships'
        ],
        metrics: [
          { name: 'Click-through Rate', value: '2.8%', trend: 'up' },
          { name: 'Brand Search Volume', value: '+45%', trend: 'up' },
          { name: 'Ad Impression Share', value: '35%', trend: 'neutral' }
        ]
      },
      {
        name: 'Evaluation',
        description: 'Product research and comparison phase',
        touchpoints: [
          'Product Detail Pages',
          'Customer Reviews',
          'Tech Review Videos',
          'Comparison Tools',
          'Live Chat Support'
        ],
        painPoints: [
          'Complex feature comparison',
          'Trust in online reviews',
          'Technical language barriers'
        ],
        opportunities: [
          'Visual feature comparisons',
          'Verified review program',
          'Localized product guides'
        ],
        metrics: [
          { name: 'Page Time', value: '4:30', trend: 'up' },
          { name: 'Review Rating', value: '4.5', trend: 'up' },
          { name: 'Compare Rate', value: '25%', trend: 'up' }
        ]
      },
      {
        name: 'Purchase',
        description: 'Conversion and checkout process',
        touchpoints: [
          'Marketplace Checkout',
          'Direct Website',
          'Mobile App Purchase',
          'Payment Gateway',
          'Order Confirmation'
        ],
        painPoints: [
          'Payment method preferences',
          'Cart abandonment',
          'Discount expectations'
        ],
        opportunities: [
          'Local payment integration',
          'Cart recovery automation',
          'Dynamic pricing strategy'
        ],
        metrics: [
          { name: 'Conversion Rate', value: '3.2%', trend: 'up' },
          { name: 'Cart Abandonment', value: '65%', trend: 'down' },
          { name: 'Average Order Value', value: '$45', trend: 'up' }
        ]
      },
      {
        name: 'Activation',
        description: 'Initial product setup and usage',
        touchpoints: [
          'Welcome Email',
          'Setup Guide',
          'Product Dashboard',
          'Support Chat',
          'Tutorial Videos'
        ],
        painPoints: [
          'Installation complexity',
          'Feature discovery',
          'Language preferences'
        ],
        opportunities: [
          'Guided setup process',
          'Interactive tutorials',
          'Multilingual support'
        ],
        metrics: [
          { name: 'Activation Rate', value: '85%', trend: 'up' },
          { name: 'Support Tickets', value: '-20%', trend: 'down' },
          { name: 'Feature Usage', value: '60%', trend: 'up' }
        ]
      },
      {
        name: 'Retention',
        description: 'Long-term engagement and renewal',
        touchpoints: [
          'Product Updates',
          'Security Reports',
          'Renewal Notifications',
          'Loyalty Program',
          'Upgrade Offers'
        ],
        painPoints: [
          'Renewal friction',
          'Value demonstration',
          'Competition offers'
        ],
        opportunities: [
          'Auto-renewal options',
          'Performance insights',
          'Loyalty rewards'
        ],
        metrics: [
          { name: 'Retention Rate', value: '75%', trend: 'up' },
          { name: 'Renewal Rate', value: '68%', trend: 'up' },
          { name: 'NPS Score', value: '45', trend: 'up' }
        ]
      }
    ]
  },
  {
    country: 'Thailand',
    stages: [
      {
        name: 'Discovery',
        description: 'Initial product discovery through digital channels',
        touchpoints: ['Lazada', 'Shopee', 'Line Shopping', 'Facebook Marketplace'],
        painPoints: ['Platform fragmentation', 'Price sensitivity', 'Brand awareness'],
        opportunities: ['Line integration', 'Social commerce', 'Influencer marketing'],
        metrics: [
          { name: 'Click-through Rate', value: '2.5%', trend: 'up' },
          { name: 'Brand Search Volume', value: '+35%', trend: 'up' },
          { name: 'Ad Impression Share', value: '30%', trend: 'neutral' }
        ]
      },
      {
        name: 'Evaluation',
        description: 'Product research and comparison phase',
        touchpoints: ['Product Reviews', 'Tech Forums', 'Line Groups', 'Comparison Sites'],
        painPoints: ['Language barriers', 'Technical understanding', 'Trust issues'],
        opportunities: ['Thai language content', 'Expert reviews', 'Community building'],
        metrics: [
          { name: 'Page Time', value: '3:45', trend: 'up' },
          { name: 'Review Rating', value: '4.3', trend: 'up' },
          { name: 'Compare Rate', value: '22%', trend: 'up' }
        ]
      },
      {
        name: 'Purchase',
        description: 'Conversion and checkout process',
        touchpoints: ['Mobile Checkout', 'PromptPay', 'TrueMoney Wallet'],
        painPoints: ['Payment preferences', 'Mobile optimization', 'Cart abandonment'],
        opportunities: ['Local payment methods', 'Mobile-first design', 'Flash deals'],
        metrics: [
          { name: 'Conversion Rate', value: '2.8%', trend: 'up' },
          { name: 'Cart Abandonment', value: '70%', trend: 'down' },
          { name: 'Average Order Value', value: '$40', trend: 'up' }
        ]
      },
      {
        name: 'Activation',
        description: 'Initial product setup and usage',
        touchpoints: ['Thai Setup Guide', 'Line Support', 'Video Tutorials'],
        painPoints: ['Technical support', 'Language preferences', 'Setup complexity'],
        opportunities: ['Thai language support', 'Line integration', 'Video guides'],
        metrics: [
          { name: 'Activation Rate', value: '80%', trend: 'up' },
          { name: 'Support Tickets', value: '-15%', trend: 'down' },
          { name: 'Feature Usage', value: '55%', trend: 'up' }
        ]
      },
      {
        name: 'Retention',
        description: 'Long-term engagement and renewal',
        touchpoints: ['Line Notifications', 'Email Updates', 'Loyalty Program'],
        painPoints: ['Renewal reminders', 'Competitive offers', 'Value perception'],
        opportunities: ['Line loyalty program', 'Thai promotions', 'Local partnerships'],
        metrics: [
          { name: 'Retention Rate', value: '70%', trend: 'up' },
          { name: 'Renewal Rate', value: '65%', trend: 'up' },
          { name: 'NPS Score', value: '40', trend: 'up' }
        ]
      }
    ]
  },
  {
    country: 'Malaysia',
    stages: [
      {
        name: 'Discovery',
        description: 'Initial product discovery through digital channels',
        touchpoints: ['Shopee MY', 'Lazada MY', 'Facebook Ads', 'Google Shopping'],
        painPoints: ['Market competition', 'Price sensitivity', 'Product awareness'],
        opportunities: ['Marketplace optimization', 'Social media ads', 'Local partnerships'],
        metrics: [
          { name: 'Click-through Rate', value: '2.6%', trend: 'up' },
          { name: 'Brand Search Volume', value: '+40%', trend: 'up' },
          { name: 'Ad Impression Share', value: '32%', trend: 'neutral' }
        ]
      },
      {
        name: 'Evaluation',
        description: 'Product research and comparison phase',
        touchpoints: ['Product Reviews', 'Tech Blogs', 'Comparison Sites'],
        painPoints: ['Feature comparison', 'Review credibility', 'Technical details'],
        opportunities: ['Multilingual content', 'Expert reviews', 'Comparison tools'],
        metrics: [
          { name: 'Page Time', value: '4:00', trend: 'up' },
          { name: 'Review Rating', value: '4.4', trend: 'up' },
          { name: 'Compare Rate', value: '24%', trend: 'up' }
        ]
      },
      {
        name: 'Purchase',
        description: 'Conversion and checkout process',
        touchpoints: ['Online Banking', 'E-wallets', 'Credit Cards'],
        painPoints: ['Payment options', 'Cart abandonment', 'Price competition'],
        opportunities: ['Local payment integration', 'Cart recovery', 'Bundle offers'],
        metrics: [
          { name: 'Conversion Rate', value: '3.0%', trend: 'up' },
          { name: 'Cart Abandonment', value: '68%', trend: 'down' },
          { name: 'Average Order Value', value: '$42', trend: 'up' }
        ]
      },
      {
        name: 'Activation',
        description: 'Initial product setup and usage',
        touchpoints: ['Setup Guide', 'WhatsApp Support', 'Email Support'],
        painPoints: ['Installation support', 'Language options', 'Technical issues'],
        opportunities: ['Multilingual support', 'WhatsApp integration', 'Video tutorials'],
        metrics: [
          { name: 'Activation Rate', value: '82%', trend: 'up' },
          { name: 'Support Tickets', value: '-18%', trend: 'down' },
          { name: 'Feature Usage', value: '58%', trend: 'up' }
        ]
      },
      {
        name: 'Retention',
        description: 'Long-term engagement and renewal',
        touchpoints: ['Email Updates', 'WhatsApp Notifications', 'Loyalty Program'],
        painPoints: ['Renewal process', 'Competition', 'Value demonstration'],
        opportunities: ['Auto-renewal', 'Loyalty rewards', 'Performance reports'],
        metrics: [
          { name: 'Retention Rate', value: '72%', trend: 'up' },
          { name: 'Renewal Rate', value: '67%', trend: 'up' },
          { name: 'NPS Score', value: '42', trend: 'up' }
        ]
      }
    ]
  }
];

export default function CustomerJourney() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedStage, setSelectedStage] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const currentCountry = journeyData[selectedCountry];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">E-commerce Customer Journey</h2>
          <p className="text-gray-600">Digital acquisition funnel analysis across Southeast Asia</p>
        </div>
      </div>

      {/* Country Selection */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {journeyData.map((country, index) => (
          <motion.button
            key={country.country}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCountry(index);
              setSelectedStage(0);
            }}
            className={`px-6 py-3 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 ${
              selectedCountry === index
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {country.country}
          </motion.button>
        ))}
      </div>

      {/* Journey Stages */}
      <div className="space-y-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {currentCountry.stages.map((stage, index) => (
            <motion.button
              key={stage.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedStage(index)}
              className={`px-6 py-3 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 ${
                selectedStage === index
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {stage.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {currentCountry.stages[selectedStage].name}
              </h3>
              <p className="text-gray-600">
                {currentCountry.stages[selectedStage].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Touchpoints */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                onHoverStart={() => setHoveredItem('touchpoints')}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Touchpoints
                </h4>
                <ul className="space-y-3">
                  {currentCountry.stages[selectedStage].touchpoints.map((touchpoint, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2 text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-primary">•</span>
                      <span>{touchpoint}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Pain Points */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                onHoverStart={() => setHoveredItem('painpoints')}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Pain Points
                </h4>
                <ul className="space-y-3">
                  {currentCountry.stages[selectedStage].painPoints.map((point, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2 text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-red-500">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Opportunities */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                onHoverStart={() => setHoveredItem('opportunities')}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Opportunities
                </h4>
                <ul className="space-y-3">
                  {currentCountry.stages[selectedStage].opportunities.map((opportunity, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2 text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-500">•</span>
                      <span>{opportunity}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Metrics */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                onHoverStart={() => setHoveredItem('metrics')}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Key Metrics
                </h4>
                <ul className="space-y-3">
                  {currentCountry.stages[selectedStage].metrics.map((metric, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center justify-between text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <span>{metric.name}</span>
                      <span className={`font-medium ${
                        metric.trend === 'up' ? 'text-green-500' :
                        metric.trend === 'down' ? 'text-red-500' :
                        'text-gray-500'
                      }`}>
                        {metric.value}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 