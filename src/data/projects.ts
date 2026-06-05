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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
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
      'Upwork',
    ],
  },
  {
    title: 'Rails 3.x Upgrade for philadelphiabunkerclub.com',
    description: 'Incremental Rails upgrade from 3.0 through 5.2 for philadelphiabunkerclub.com.',
    longDescription:
      'Performed an incremental Ruby on Rails upgrade for philadelphiabunkerclub.com, progressing through each major version from Rails 3.0 to 5.2 (3.0 → 3.1 → 3.2 → 4.0 → 4.1 → 4.2 → 5.0 → 5.1 → 5.2). Each increment was tested and validated to ensure the application remained stable throughout the migration.',
    tags: ['Ruby on Rails', 'Linux'],
    dateRange: 'Feb 2022 - Aug 2022',
    highlights: [
      'Incremental upgrade: Rails 3.0 through 5.2',
      'Nine sequential version upgrades',
      'Stability validation at each increment',
      'Upwork',
    ],
  },
  {
    title: 'Bug Fixes on craftfoxes.com',
    description: 'Bug fixes and maintenance for craftfoxes.com, an American How-to project.',
    longDescription:
      'Performed bug fixes and ongoing maintenance for craftfoxes.com, a how-to content platform for the client American How-to. Resolved various application issues to ensure platform stability and a smooth user experience.',
    tags: ['Ruby on Rails'],
    dateRange: 'Nov 2019 - Sep 2021',
    highlights: [
      'Bug fixes and issue resolution',
      'Platform maintenance and stability',
      'Upwork',
    ],
  },
  {
    title: 'Deploy Lobsters to VPS',
    description: 'Deployed the Lobsters link aggregation platform to a VPS.',
    longDescription:
      'Deployed the open-source Lobsters link aggregation platform to a VPS, configuring the server environment, database, and web server to run the Rails-based application in production.',
    tags: ['Ruby on Rails', 'Linux', 'Nginx', 'PostgreSQL'],
    dateRange: 'Sep 2020',
    highlights: [
      'Lobsters platform deployment',
      'Production server configuration',
      'Database and web server setup',
      'Upwork',
    ],
  },
  {
    title: 'Custom Shopify App for Label PDF Generation',
    description: 'A custom Shopify app for generating label PDFs for a dog food store, built for Plusky ICT Consultancy.',
    longDescription:
      'Built a custom Shopify app for Plusky ICT Consultancy that generates label PDFs from Shopify order data for a store selling dog food compositions. The app pulls product composition data from orders and generates formatted label PDFs for fulfillment and shipping.',
    tags: ['Ruby on Rails', 'Shopify', 'Shopify Admin API (REST)'],
    dateRange: 'Oct 2020 - Nov 2020',
    highlights: [
      'Automated label PDF generation from Shopify orders',
      'Shopify Admin API integration',
      'Order fulfillment workflow automation',
      'Upwork',
    ],
  },
  {
    title: 'Flutter App for RangeReact App',
    description: 'Developed a Flutter mobile app (Android & iOS) for an ESP32-based shooting practice device.',
    longDescription:
      'Developed a cross-platform mobile app using Flutter and Dart for the RangeReact project, acting as the client interface for an ESP32-based shooting practice device. The app communicates with the hardware to provide real-time feedback and session management for shooting practice.',
    tags: ['Flutter', 'Dart', 'ESP32'],
    dateRange: 'Nov 2020 - Jun 2024',
    highlights: [
      'Cross-platform Flutter app for Android & iOS',
      'ESP32 device integration',
      'Real-time shooting practice feedback',
      'Session management',
      'Upwork',
    ],
  },
  {
    title: 'CSV Generation Script for Justus Lauten GmbH',
    description: 'Developed a Ruby script to generate custom CSV data for Justus Lauten GmbH.',
    longDescription:
      'Developed a custom Ruby script to generate CSV data for Justus Lauten GmbH, producing correctly formatted output files for the client\'s data exchange and reporting requirements.',
    tags: ['Ruby'],
    dateRange: 'May 2021',
    highlights: [
      'Custom CSV generation in Ruby',
      'Data formatting and output',
      'Upwork',
    ],
  },
  {
    title: 'Heroku Redis Plugin Upgrade',
    description: 'Migrated from Redis To-Go to Heroku official Redis for Cabinet Mysteriis.',
    longDescription:
      'Migrated the Redis add-on from Redis To-Go to Heroku\'s official Redis plugin for Cabinet Mysteriis. Ensured a seamless transition of cached data and configuration, updated environment variables, and verified application stability post-migration.',
    tags: ['Heroku', 'Redis'],
    dateRange: 'Jul 2022 - Dec 2022',
    highlights: [
      'Migrated from Redis To-Go to official Heroku Redis',
      'Seamless data and configuration transition',
      'Post-migration stability verification',
      'Upwork',
    ],
  },
  {
    title: 'Setup Multiple Rails Apps Using Docker for LUCKYLEZA LLC',
    description: 'Set up multiple Ruby on Rails applications using Docker for Upwork client LUCKYLEZA LLC.',
    longDescription:
      'Set up and deployed multiple Ruby on Rails applications using Docker for an Upwork client, LUCKYLEZA LLC. Configured Nginx as a reverse proxy on a CentOS server to manage and serve the containerized Rails apps.',
    tags: ['Rails', 'Docker', 'Nginx', 'CentOS', 'Upwork'],
    dateRange: 'Nov 2022 - Mar 2023',
    highlights: [
      'Multiple Rails app deployment',
      'Docker containerization',
      'Nginx reverse proxy setup on CentOS',
    ],
  },
];
