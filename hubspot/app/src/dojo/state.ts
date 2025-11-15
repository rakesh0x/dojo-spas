export interface Campaign {
  id: string;
  name: string;
  stage: 'Draft' | 'Active' | 'Paused' | 'Completed';
  schedule: string;
  status: boolean;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  lifecycleStage: 'Lead' | 'MQL' | 'SQL' | 'Customer';
  activityTimeline: string[];
  owner: string;
  notes: string[];
}

export interface Email {
  id: string;
  subject: string;
  content: string;
  segmentation: string[];
  revisions: string[];
}

export interface AutomationLogEntry {
  id: string;
  timestamp: string;
  event: string; // e.g., "Campaign Launched", "Email Sent", "Lead Converted"
  details: string;
}

export interface Analytics {
  campaignPerformance: {
    totalCampaigns: number;
    activeCampaigns: number;
    conversionRate: string;
  };
  leadFunnel: {
    leads: number;
    mqls: number;
    sqls: number;
    customers: number;
  };
  emailEngagement: {
    totalEmailsSent: number;
    openRate: string;
    clickRate: string;
  };
}

export interface AppState {
  campaigns: Campaign[];
  contacts: Contact[];
  emails: Email[];
  automationLog: AutomationLogEntry[];
  analytics: Analytics;
}

export const initialAppState: AppState = {
  campaigns: [
    {
      id: 'c1',
      name: 'Summer Sale 2024',
      stage: 'Active',
      schedule: 'Jun 1 - Aug 31',
      status: true,
    },
    {
      id: 'c2',
      name: 'New Product Launch',
      stage: 'Draft',
      schedule: 'TBD',
      status: false,
    },
  ],
  contacts: [
    {
      id: 'con1',
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      lifecycleStage: 'Lead',
      activityTimeline: ['Signed up for newsletter (2024-05-01)'],
      owner: 'John Doe',
      notes: [],
    },
    {
      id: 'con2',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      lifecycleStage: 'MQL',
      activityTimeline: ['Downloaded ebook (2024-04-15)', 'Attended webinar (2024-05-10)'],
      owner: 'Jane Public',
      notes: ['Expressed interest in premium features.'],
    },
  ],
  emails: [
    {
      id: 'e1',
      subject: 'Welcome to our newsletter!',
      content: 'Hello, welcome to our newsletter...',
      segmentation: ['New Leads'],
      revisions: ['Initial draft'],
    },
    {
      id: 'e2',
      subject: 'Exclusive offer for you!',
      content: 'Hi there, we have a special offer...',
      segmentation: ['MQLs'],
      revisions: ['Initial draft', 'Revised offer'],
    },
  ],
  automationLog: [
    {
      id: 'a1',
      timestamp: '2024-06-01T09:00:00Z',
      event: 'Campaign Launched',
      details: 'Campaign "Summer Sale 2024" launched.',
    },
    {
      id: 'a2',
      timestamp: '2024-06-05T10:30:00Z',
      event: 'Email Sent',
      details: 'Email "Welcome to our newsletter!" sent to 500 new leads.',
    },
  ],
  analytics: {
    campaignPerformance: {
      totalCampaigns: 2,
      activeCampaigns: 1,
      conversionRate: '2.5%',
    },
    leadFunnel: {
      leads: 1200,
      mqls: 300,
      sqls: 150,
      customers: 50,
    },
    emailEngagement: {
      totalEmailsSent: 1500,
      openRate: '25%',
      clickRate: '5%',
    },
  },
};
