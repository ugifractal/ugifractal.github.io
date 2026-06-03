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
    title: 'Custom Shopify App Middleware for API Integration',
    description: 'A custom Shopify middleware app for a beauty tools store, integrating Shopify with external services.',
    longDescription:
      'A custom-built Shopify middleware app installed on a beauty tools store. It acts as a bridge between Shopify and multiple external systems, handling real-time sync of orders, fulfillments, B2B data, transactions, and metafields via webhooks. The app includes custom Sidekiq retry logic, SFTP sync with Azure, SureTax and Microsoft D365 integrations, and generates custom XML and PDF documents.',
    tags: [
      'Ruby on Rails',
      'Shopify',
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
];
