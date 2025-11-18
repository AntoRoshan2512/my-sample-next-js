## Isomorphic Starter Template

**Run the following commands from the packages root**

First install the dependencies by running the following command.

```bash
pnpm install
```

Now to start the local development server run

```bash
pnpm starter:dev
```

To learn more please follow our [Documentation](https://isomorphic-doc.vercel.app/getting-started/installation)


# Isomorphic Admin Dashboard

A comprehensive React TypeScript admin dashboard template built with Next.js, Tailwind CSS, and various modern web technologies.

## Project Overview

This is a feature-rich admin dashboard that provides various modules including:

- E-commerce management
- CRM functionality  
- Analytics dashboard
- Logistics tracking
- Financial management
- Support system
- File management
- User management

## Core Components

### Layout Components

- **WelcomeBanner**: Located at `/src/core/components/banners/welcome`
  - Displays personalized welcome message
  - Shows store statistics overview
  - Has CTAs for main actions

- **PageHeader**: Located at `/src/app/shared/page-header`
  - Consistent header across pages
  - Includes breadcrumbs navigation
  - Action buttons for page-specific operations

### Dashboard Components

1. **StatCards**
   - Shows key metrics and statistics
   - Dynamic data visualization
   - Located in `/src/app/shared/ecommerce/dashboard/stat-cards`

2. **SalesReport** 
   - Detailed sales analytics
   - Interactive charts
   - Located in `/src/app/shared/ecommerce/dashboard/sales-report`

3. **ProfitWidget**
   - Profit tracking and visualization
   - Located in `/src/app/shared/ecommerce/dashboard/profit-widget`

4. **LeadingTeams**
   - Team performance metrics
   - Located in `/src/components/leading-teams`

### Analytics Components

1. **RatingAnalytics**
   - Customer satisfaction metrics
   - Located in `/src/app/shared/crm/dashboard/rating-analytics`

2. **CustomerGrowthSummary**
   - Customer acquisition trends
   - Located in `/src/app/shared/crm/dashboard/customer-growth-summary`

3. **StoreAnalyticsStats**
   - Store performance metrics
   - Located in `/src/app/shared/store-analytics/dashboard/store-analytics-stats`

### Financial Components

1. **CashInBank**
   - Banking and cash flow tracking
   - Located in `/src/app/shared/financial/dashboard/cash-in-bank`

2. **Investment**
   - Investment tracking and analysis
   - Located in `/src/app/shared/financial/dashboard/investment`

## Routing Configuration

Routes are centrally configured in `/src/config/routes.ts`. Major route sections include:

```typescript
export const routes = {
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    categories: '/ecommerce/categories',
    orders: '/ecommerce/orders',
    // ...more routes
  },
  crm: {
    dashboard: '/crm',
    customers: '/crm/customers',
    // ...more routes
  },
  logistics: {
    dashboard: '/logistics',
    shipmentList: '/logistics/shipments',
    // ...more routes
  }
  // ...other sections
};
```

## Project Configuration

### Site Configuration
Located in `/src/config/site.config.tsx`:

```typescript
export const siteConfig = {
  title: "Isomorphic - React Typescript Admin Dashboard",
  description: `Isomorphic the ultimate React TypeScript Admin Template`,
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN
};
```

### Meta Configuration
Meta tags are managed through the `metaObject` function in the same file:

```typescript
export const metaObject = (title?: string, ...): Metadata => {
  // Meta configuration
};
```

## Development

### Prerequisites
- Node.js >= 14
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Running Development Server
```bash
npm run dev
# or
yarn dev
```

### Building for Production
```bash
npm run build
# or
yarn build
```

## Project Structure

```
isomorphic/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── config/             # Configuration files
│   ├── data/              # Static data and mocks
│   └── public/            # Static assets
```

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- React Icons
- RizzUI Components
- And many more

## Additional Features

- Responsive Design
- Dark/Light Mode
- Multiple Layout Options
- Authentication Ready
- Form Validation
- Data Export
- File Upload
- Search Functionality
- Sorting & Filtering