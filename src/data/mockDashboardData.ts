import { UserProfile, MemberPosition, DealSubmission, PayoutTransaction } from '../types';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'David Kestler',
  email: 'david.kestler@member.geinzclub.internal',
  memberId: 'GC-88219',
  role: 'Vetted Operator & Private Allocator',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  country: 'Zurich, Switzerland',
  tier: 'Founding Partner Syndicate',
  kycStatus: 'Level 3 Institutional Verified',
  joinedDate: 'November 2024',
  availableBalance: 32500,
  totalInvested: 217000,
  totalEarned: 28450,
  portfolioValue: 245450,
  blendedAPY: '16.4%',
};

export const INITIAL_POSITIONS: MemberPosition[] = [
  {
    id: 'pos-1',
    opportunityId: 'opp-1',
    title: 'Apex CleanFleet Cold-Chain',
    category: 'B2B Logistics',
    amountInvested: 45000,
    currentValuation: 48600,
    irr: '15.8% IRR',
    returnType: 'Quarterly Dividends',
    dateCommitted: 'Jan 14, 2026',
    dividendsReceived: 4120,
    nextPayoutDate: 'Oct 15, 2026',
    nextPayoutEst: 1775,
    status: 'Distributing',
    location: 'Rotterdam, Netherlands',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    milestonesCompleted: 2,
    totalMilestones: 4,
  },
  {
    id: 'pos-2',
    opportunityId: 'opp-2',
    title: 'Solara Commercial Solar Microgrid',
    category: 'Clean Energy',
    amountInvested: 75000,
    currentValuation: 82400,
    irr: '13.4% IRR',
    returnType: 'Quarterly Dividends',
    dateCommitted: 'Feb 02, 2026',
    dividendsReceived: 7920,
    nextPayoutDate: 'Oct 01, 2026',
    nextPayoutEst: 2512,
    status: 'Distributing',
    location: 'Valencia, Spain',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    milestonesCompleted: 2,
    totalMilestones: 4,
  },
  {
    id: 'pos-3',
    opportunityId: 'opp-3',
    title: 'Nordic Pure Precision AgTech',
    category: 'AgTech & Food',
    amountInvested: 40000,
    currentValuation: 44250,
    irr: '17.2% IRR',
    returnType: 'Quarterly Dividends',
    dateCommitted: 'Mar 10, 2026',
    dividendsReceived: 5100,
    nextPayoutDate: 'Nov 12, 2026',
    nextPayoutEst: 1720,
    status: 'Distributing',
    location: 'Odense, Denmark',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
    milestonesCompleted: 3,
    totalMilestones: 4,
  },
  {
    id: 'pos-4',
    opportunityId: 'opp-4',
    title: 'Kurogane Robotic Automation Cells',
    category: 'Retail & Manufacturing',
    amountInvested: 57000,
    currentValuation: 60200,
    irr: '19.4% IRR',
    returnType: 'Revenue Royalty',
    dateCommitted: 'Apr 24, 2026',
    dividendsReceived: 3310,
    nextPayoutDate: 'Nov 28, 2026',
    nextPayoutEst: 2764,
    status: 'Active',
    location: 'Nagoya, Japan',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    milestonesCompleted: 1,
    totalMilestones: 4,
  }
];

export const INITIAL_TRANSACTIONS: PayoutTransaction[] = [
  {
    id: 'tx-1',
    date: 'Sep 01, 2026',
    opportunityTitle: 'Solara Commercial Solar Microgrid',
    type: 'Dividend Payout',
    amount: 2512.50,
    status: 'Completed',
    referenceId: 'DIV-SOL-2026-Q3-88219'
  },
  {
    id: 'tx-2',
    date: 'Aug 15, 2026',
    opportunityTitle: 'Apex CleanFleet Cold-Chain',
    type: 'Dividend Payout',
    amount: 1775.00,
    status: 'Completed',
    referenceId: 'DIV-APX-2026-Q3-88219'
  },
  {
    id: 'tx-3',
    date: 'Jul 28, 2026',
    opportunityTitle: 'Nordic Pure Precision AgTech',
    type: 'Dividend Payout',
    amount: 1720.00,
    status: 'Completed',
    referenceId: 'DIV-NDP-2026-Q2-88219'
  },
  {
    id: 'tx-4',
    date: 'Jun 12, 2026',
    opportunityTitle: 'Direct Escrow Wire Deposit (Zurich Cantonal)',
    type: 'Cash Deposit',
    amount: 50000.00,
    status: 'Completed',
    referenceId: 'WIRE-ZKB-CH92-88219'
  },
  {
    id: 'tx-5',
    date: 'Apr 24, 2026',
    opportunityTitle: 'Kurogane Robotic Automation Cells',
    type: 'Capital Deployment',
    amount: -57000.00,
    status: 'Completed',
    referenceId: 'ALLOC-KUR-SPV-88219'
  },
];

export const INITIAL_SUBMISSIONS: DealSubmission[] = [
  {
    id: 'sub-1',
    companyName: 'Helvetia Cold Storage Facility Expansion',
    sector: 'Industrial Infrastructure',
    targetAmount: 850000,
    projectedIRR: '14.8% IRR',
    submissionDate: 'Aug 18, 2026',
    stage: 'Committee Review',
    stageNumber: 3,
    collateralSummary: '1st mortgage on 4,200m² industrial freehold facility in Basel-Landschaft + 5-year tenant lease with Coop.',
    feedback: 'Physical property inspection completed by CBRE. Financial model validated. Committee scheduled for vote Thursday.'
  },
  {
    id: 'sub-2',
    companyName: 'Alpine Bio-Pellet Renewable Heating Network',
    sector: 'Clean Energy',
    targetAmount: 620000,
    projectedIRR: '16.2% IRR',
    submissionDate: 'Jul 04, 2026',
    stage: 'Term Sheet',
    stageNumber: 4,
    collateralSummary: 'Equipment liens on 2 industrial biomass gasification units + 10-year municipal heat supply off-take agreement.',
    feedback: 'Term sheet agreed with founder. SPV draft under review with Swiss legal counsel.'
  }
];

export const ASSET_ALLOCATION = [
  { sector: 'Clean Energy', percentage: 34, amount: 75000, color: '#10E760' },
  { sector: 'Retail & Manufacturing', percentage: 26, amount: 57000, color: '#38BDF8' },
  { sector: 'B2B Logistics', percentage: 21, amount: 45000, color: '#F59E0B' },
  { sector: 'AgTech & Food', percentage: 19, amount: 40000, color: '#A855F7' },
];

export const MONTHLY_CASHFLOW = [
  { month: 'Jan', dividends: 1450, cumulative: 1450 },
  { month: 'Feb', dividends: 2100, cumulative: 3550 },
  { month: 'Mar', dividends: 1980, cumulative: 5530 },
  { month: 'Apr', dividends: 3120, cumulative: 8650 },
  { month: 'May', dividends: 2850, cumulative: 11500 },
  { month: 'Jun', dividends: 3400, cumulative: 14900 },
  { month: 'Jul', dividends: 4200, cumulative: 19100 },
  { month: 'Aug', dividends: 3850, cumulative: 22950 },
  { month: 'Sep', dividends: 5500, cumulative: 28450 },
  { month: 'Oct (Est.)', dividends: 4287, cumulative: 32737 },
  { month: 'Nov (Est.)', dividends: 4484, cumulative: 37221 },
  { month: 'Dec (Est.)', dividends: 5200, cumulative: 42421 },
];
