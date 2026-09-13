export interface Opportunity {
  id: string;
  title: string;
  tagline: string;
  category: 'Clean Energy' | 'AgTech & Food' | 'B2B Logistics' | 'Retail & Manufacturing' | 'Health & Tech';
  location: string;
  image: string;
  owner: {
    name: string;
    role: string;
    avatar: string;
    company: string;
    trackRecord: string;
    verified: boolean;
  };
  targetAmount: number;
  raisedAmount: number;
  minInvestment: number;
  termMonths: number;
  projectedReturn: string;
  returnType: 'Quarterly Dividends' | 'Revenue Royalty' | 'Equity Growth' | 'Fixed Yield';
  riskRating: 'Low-Medium' | 'Medium' | 'Medium-High';
  riskProfile: 'Asset-Backed' | 'Revenue Generating' | 'Expansion Capital';
  fundingProgress: number;
  backersCount: number;
  closingDaysLeft: number;
  description: string;
  highlights: string[];
  structure: {
    ownerCapital: number;
    memberTarget: number;
    seniorDebt?: number;
    equityType: string;
  };
  milestones: {
    phase: string;
    title: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    date: string;
  }[];
  documents: {
    name: string;
    size: string;
    type: string;
  }[];
}

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
  metric: string;
}

export interface StepJourney {
  step: number;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
}

export interface MemberArchetype {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  whatTheyBring: string[];
  whatTheyGet: string[];
  exampleMember: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export interface CommunityPost {
  id: string;
  author: string;
  authorRole: string;
  avatar: string;
  badge: string;
  category: 'Deal Debrief' | 'Milestone' | 'Mastermind' | 'Network';
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  hasVerifiedDealBadge?: boolean;
}

export interface MemberStory {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  memberSince: string;
  archetype: string;
  headline: string;
  quote: string;
  stats: {
    label: string;
    value: string;
  };
}

export interface MemberPosition {
  id: string;
  opportunityId: string;
  title: string;
  category: string;
  amountInvested: number;
  currentValuation: number;
  irr: string;
  returnType: string;
  dateCommitted: string;
  dividendsReceived: number;
  nextPayoutDate: string;
  nextPayoutEst: number;
  status: 'Active' | 'Matured' | 'Distributing';
  location: string;
  image: string;
  milestonesCompleted: number;
  totalMilestones: number;
}

export interface DealSubmission {
  id: string;
  companyName: string;
  sector: string;
  targetAmount: number;
  projectedIRR: string;
  submissionDate: string;
  stage: 'KYC & Legal Audit' | 'Collateral Verification' | 'Committee Review' | 'Term Sheet' | 'Live in Deal Room';
  stageNumber: number;
  collateralSummary: string;
  feedback?: string;
}

export interface PayoutTransaction {
  id: string;
  date: string;
  opportunityTitle: string;
  type: 'Dividend Payout' | 'Principal Return' | 'Capital Deployment' | 'Cash Deposit' | 'Distribution';
  amount: number;
  status: 'Completed' | 'Pending';
  referenceId: string;
}

export interface UserProfile {
  name: string;
  email: string;
  memberId: string;
  role: string;
  avatar: string;
  country: string;
  tier: string;
  kycStatus: string;
  joinedDate: string;
  availableBalance: number;
  totalInvested: number;
  totalEarned: number;
  portfolioValue: number;
  blendedAPY: string;
}
