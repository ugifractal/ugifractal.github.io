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
    dateRange: '2024 - Present',
    highlights: [
      'Subscription billing with Stripe integration',
      'Advanced search via Elasticsearch',
      'Background job processing with Sidekiq',
      'Responsive, mobile-first design',
    ],
  },
];
