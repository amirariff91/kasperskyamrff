# Kaspersky eCommerce Dashboard

A comprehensive dashboard for managing and optimizing Kaspersky's digital sales performance in Southeast Asia.

## Features

### 1. Regional Performance Tracking
- Monitor performance metrics across key Southeast Asian markets (Indonesia, Thailand, Malaysia, Philippines)
- Track revenue, new users, CPA, LTV, and ROAS by country
- Compare performance against previous periods

### 2. Channel Analytics
- Performance tracking across digital channels:
  - PPC (Pay-Per-Click)
  - PSM (Product Search Marketing)
  - Display Advertising
  - Social Media Marketing
- Key metrics: impressions, clicks, conversions, revenue, and ROAS

### 3. Budget Planning & Forecasting
- Current and proposed budget allocation by channel
- Revenue forecasting based on historical data
- ROAS projections
- Budget change recommendations

### 4. Campaign Management
- Create and manage promotional campaigns
- Track campaign performance in real-time
- Monitor campaign status (Active, Scheduled, Completed, Paused)
- Campaign-specific metrics and ROI analysis

## Technical Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── components/
│   ├── layouts/
│   │   └── DashboardLayout.tsx
│   └── dashboard/
│       ├── RegionalPerformance.tsx
│       ├── ChannelAnalytics.tsx
│       ├── BudgetPlanning.tsx
│       └── CampaignManagement.tsx
├── page.tsx
└── layout.tsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.
