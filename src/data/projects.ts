export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link?: string;
  dateRange: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: 'Aviation News',
    description: 'A SaaS platform delivering curated aviation news with powerful search.',
    longDescription:
      'A comprehensive SaaS platform focused on aviation news aggregation and delivery. Built with Ruby on Rails, the platform features subscription-based access via Stripe, full-text search powered by Elasticsearch, and reliable background job processing with Sidekiq.',
    tags: ['Ruby on Rails', 'Stripe', 'Elasticsearch', 'Sidekiq', 'PostgreSQL'],
    dateRange: '2012 - Present',
    highlights: [
      'Subscription billing with Stripe integration',
      'Advanced search via Elasticsearch',
      'Background job processing with Sidekiq',
      'Responsive, mobile-first design',
    ],
  },
  {
    title: 'Custom Shopify App for Beauty Stores',
    description: 'A custom Shopify middleware app for beauty stores, integrating Shopify with external services.',
    longDescription:
      'A custom-built Shopify middleware app used across multiple beauty stores. It acts as a bridge between Shopify and multiple external systems, handling real-time sync of orders, fulfillments, B2B data, transactions, and metafields via webhooks. The app includes custom Sidekiq retry logic, SFTP sync with Azure, SureTax and Microsoft D365 integrations, and generates custom XML and PDF documents.',
    tags: [
      'Ruby on Rails',
      'Shopify',
      'Shopify Admin API (GraphQL)',
      'Tailwind CSS',
      'Sidekiq',
      'SFTP',
      'Azure',
      'SureTax',
      'Microsoft D365',
    ],
    dateRange: 'Mar 2025 - Oct 2025',
    highlights: [
      'Shopify webhooks for orders, fulfillments, B2B, transactions, metafields',
      'Custom Sidekiq retry count logic',
      'SFTP sync process with Azure server',
      'SureTax API integration',
      'Microsoft D365 integration',
      'Custom XML & PDF generation',
      'Tailwind CSS admin panel',
    ],
  },
  {
    title: 'Newsletter App',
    description: 'A startup project for creating and sending newsletters to members.',
    longDescription:
      'A Ruby on Rails startup that allows users to create, manage, and send newsletters to their members. Built with Hotwire Turbo for seamless navigation, Stimulus.js for interactivity, and Tailwind CSS for the UI.',
    tags: ['Ruby on Rails', 'Tailwind CSS', 'Stimulus.js', 'Hotwire Turbo', 'PostgreSQL'],
    dateRange: 'Sep 2021 - 2025',
    highlights: [
      'Newsletter creation & sending',
      'Member & subscriber management',
      'Hotwire Turbo-driven navigation',
      'Stimulus.js interactive components',
      'Tailwind CSS responsive design',
    ],
  },
  {
    title: 'Custom Shopify App for a Book and Printing Store',
    description: 'A custom Shopify app for syncing products, collections, orders, and customers with management tools.',
    longDescription:
      'A custom Shopify app built for a book and printing store, handling bidirectional sync of products, collections, orders, and customers. Includes management tools for banners, product groups, and categorization.',
    tags: ['Ruby on Rails', 'Shopify', 'Shopify Admin API (REST)'],
    dateRange: '2021 - 2022',
    highlights: [
      'Product & collection sync',
      'Order & customer sync',
      'Banner management tools',
      'Product groups & categorization',
    ],
  },
  {
    title: 'Custom Shopify App for a Wool Clothing Store',
    description: 'A custom Shopify app for a wool clothing store with custom swatches, colors, and product sync.',
    longDescription:
      'A custom Shopify app built for a wool clothing store, featuring custom swatches and color selectors, draft order management, app proxy for custom frontend routes, product sync, webhook handling, metafield management, background job processing, and discount management.',
    tags: ['Ruby on Rails', 'Shopify', 'Shopify Admin API (REST)', 'Sidekiq'],
    dateRange: 'May 2021 - Aug 2021',
    highlights: [
      'Custom swatches & color selectors',
      'Draft order management',
      'Shopify App Proxy integration',
      'Product sync via webhooks',
      'Metafield management',
      'Background job processing',
      'Discount management',
    ],
  },
  {
    title: 'Custom Shopify App for Email Dispatch (Currency Conversion)',
    description: 'A custom Shopify app that dispatches currency conversion data via email for system-to-system communication.',
    longDescription:
      'A custom Shopify app that monitors currency exchange rates and dispatches the data via email for machine-to-machine communication, enabling automated systems to consume and process currency conversion information.',
    tags: ['Ruby on Rails', 'Shopify'],
    dateRange: 'Mar 2021 - Jan 2022',
    highlights: [
      'Currency conversion monitoring',
      'Machine-to-machine email dispatch',
      'Automated system integration',
    ],
  },
  {
    title: 'Custom Shopify App for Simpro API Integration',
    description: 'A custom Shopify app that integrates product and order updates with Simpro.',
    longDescription:
      'A custom Shopify app that syncs product data and order updates between Shopify and Simpro, enabling seamless integration between the e-commerce platform and Simpro business management system.',
    tags: ['Ruby on Rails', 'Shopify', 'Shopify Admin API (REST)', 'Simpro API'],
    dateRange: 'Dec 2020 - 2021',
    highlights: [
      'Product sync to Simpro',
      'Order update integration',
    ],
  },
  {
    title: 'Real Estate Database App',
    description: 'An app aimed at managing a real estate database.',
    longDescription:
      'A real estate database management app built with Ruby on Rails, designed to manage property listings, client data, and related real estate information efficiently.',
    tags: ['Ruby on Rails', 'PostgreSQL'],
    dateRange: 'Nov 2021 - 2025',
    highlights: [
      'Property listing management',
      'Client data management',
      'Database-driven architecture',
    ],
  },
  {
    title: 'Contribute to Development of Italian Property Management',
    description: 'Contributing to an Italian property management platform with bug fixes and improvements.',
    longDescription:
      'Contributed to the development of an Italian property management application, providing bug fixes and maintenance improvements to ensure platform stability.',
    tags: ['Ruby on Rails'],
    dateRange: 'Dec 2024 - 2025',
    highlights: [
      'Bug fixes & maintenance',
      'Platform stability improvements',
    ],
  },
  {
    title: 'Implement Important Features for Weather Information App for Embedded Device',
    description: 'Implemented API integrations and data collection for a weather information app targeting embedded devices.',
    longDescription:
      'Implemented key features for a weather information application designed for embedded devices. Integrated multiple API providers using OAuth2 authentication, collected and processed weather data for display on embedded device screens.',
    tags: ['Ruby on Rails', 'Google Calendar API', 'OpenMeteo API', 'OAuth2'],
    dateRange: 'Aug 2023 - 2024',
    highlights: [
      'API integration with OAuth2 authentication',
      'Data collection for embedded device display',
      'Multiple API provider integrations',
    ],
  },
  {
    title: 'Setup Server for taelskridt.dk',
    description: 'Set up and configured servers with load balancing for taelskridt.dk.',
    longDescription:
      'Set up multiple production servers for taelskridt.dk, configured Nginx as a reverse proxy, and implemented load balancing to ensure high availability and performance for the Ruby on Rails application.',
    tags: ['Ruby on Rails', 'Nginx', 'Linux'],
    dateRange: 'Jan 2021 - Mar 2021',
    highlights: [
      'Multiple server setup',
      'Load balancer configuration',
      'Nginx reverse proxy setup',
    ],
  },
  {
    title: 'Install and Dockerize Email Verification Server to VPS',
    description: 'Installed and Dockerized truemail email verification server on a VPS.',
    longDescription:
      'Installed and Dockerized the truemail email verification server on a VPS, providing automated email validation capabilities through a containerized deployment.',
    tags: ['truemail', 'Docker', 'Linux'],
    dateRange: 'Jun 2024 - May 2025',
    highlights: [
      'truemail server installation',
      'Dockerized deployment',
      'VPS server setup',
    ],
  },
  {
    title: 'Upgrade Old Ruby on Rails App for noomii.com',
    description: 'Upgraded Ruby version, Rails version, and Stripe API for noomii.com.',
    longDescription:
      'Performed a comprehensive upgrade of the Ruby on Rails application for noomii.com, including upgrading the Ruby runtime, Rails framework version, and Stripe API integration to modern standards.',
    tags: ['Ruby on Rails', 'Stripe API', 'Google Maps API'],
    dateRange: 'Aug 2023 - 2024',
    highlights: [
      'Ruby version upgrade',
      'Rails version upgrade',
      'Stripe API upgrade',
    ],
  },
  {
    title: 'Fix Ruby on Rails App for iOS Backend',
    description: 'Bug fixes and Heroku stack upgrade for an iOS backend application.',
    longDescription:
      'Performed bug fixes and maintenance on a Ruby on Rails application serving as the backend for an iOS app, including upgrading the Heroku stack from version 18 to 20.',
    tags: ['Ruby on Rails', 'Heroku'],
    dateRange: 'Jul 2023 - Aug 2023',
    highlights: [
      'Bug fixes',
      'Heroku stack upgrade from 18 to 20',
    ],
  },
  {
    title: 'Dockerize Rails 4 App and Deploy to VPS',
    description: 'Dockerized a legacy Rails 4 application and deployed it to a VPS with data migration.',
    longDescription:
      'Containerized a legacy Ruby on Rails 4 application using Docker and Docker Compose, deployed it to a VPS, and performed data migration to ensure a smooth transition.',
    tags: ['Docker', 'Docker Compose', 'Rails 4.x'],
    dateRange: 'May 2023 - Jun 2023',
    highlights: [
      'Dockerized Rails 4 app',
      'VPS deployment',
      'Data migration',
    ],
  },
];
