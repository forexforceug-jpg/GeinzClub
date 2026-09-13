import { Opportunity, Pillar, StepJourney, MemberArchetype, CommunityPost, MemberStory } from '../types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Apex CleanFleet Cold-Chain',
    tagline: 'Electrified temperature-controlled logistics hub for organic perishables',
    category: 'B2B Logistics',
    location: 'Rotterdam, Netherlands',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    owner: {
      name: 'Henrik van de Berg',
      role: 'Founder & Managing Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Apex Logistics B.V.',
      trackRecord: '14 years European freight operations, €38M prior exits',
      verified: true,
    },
    targetAmount: 750000,
    raisedAmount: 585000,
    minInvestment: 2500,
    termMonths: 24,
    projectedReturn: '15.8% IRR',
    returnType: 'Quarterly Dividends',
    riskRating: 'Low-Medium',
    riskProfile: 'Asset-Backed',
    fundingProgress: 78,
    backersCount: 42,
    closingDaysLeft: 11,
    description: 'Expansion of 18 dual-temp refrigerated electric delivery vehicles backed by existing 3-year signed commercial contracts with two national supermarket chains. Real physical collateral pledged alongside owner skin-in-the-game.',
    highlights: [
      'Fleet assets legally held in an independent bankruptcy-remote SPV',
      '3-year locked customer contracts covering 120% of debt service',
      'Owner has personally committed €220,000 junior capital',
      'Quarterly cash distributions paid directly to member wallets'
    ],
    structure: {
      ownerCapital: 220000,
      memberTarget: 750000,
      seniorDebt: 300000,
      equityType: 'Senior Secured Revenue Royalty'
    },
    milestones: [
      { phase: 'Phase 1', title: 'Commercial Supply Agreements Locked', status: 'completed', date: 'Jan 2026' },
      { phase: 'Phase 2', title: 'Vehicle Build Slots Secured with Scania', status: 'completed', date: 'Feb 2026' },
      { phase: 'Phase 3', title: 'First 8 Trucks Deployment & Route Activation', status: 'in-progress', date: 'Apr 2026' },
      { phase: 'Phase 4', title: 'Full 18 Fleet Operation & Initial Dividend', status: 'upcoming', date: 'Jul 2026' },
    ],
    documents: [
      { name: 'Apex_Signed_Commercial_Contracts_Summary.pdf', size: '3.4 MB', type: 'PDF' },
      { name: 'Apex_Fleet_SPV_Legal_Charter.pdf', size: '1.8 MB', type: 'PDF' },
      { name: 'Independent_Fleet_Appraisal_Report.pdf', size: '2.9 MB', type: 'PDF' }
    ]
  },
  {
    id: 'opp-2',
    title: 'Solara Commercial Solar Microgrid',
    tagline: 'Rooftop industrial solar array with long-term 15-year commercial PPA',
    category: 'Clean Energy',
    location: 'Valencia, Spain',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    owner: {
      name: 'Elena Ramos',
      role: 'CEO & Co-Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Solara Energía Industrial',
      trackRecord: '22MW installed industrial solar across Iberian Peninsula',
      verified: true,
    },
    targetAmount: 920000,
    raisedAmount: 830000,
    minInvestment: 5000,
    termMonths: 36,
    projectedReturn: '13.4% IRR',
    returnType: 'Quarterly Dividends',
    riskRating: 'Low-Medium',
    riskProfile: 'Asset-Backed',
    fundingProgress: 90,
    backersCount: 57,
    closingDaysLeft: 6,
    description: 'Turnkey 1.8MW rooftop solar installation atop a major ceramic manufacturing park. Power is sold under a guaranteed 15-year index-linked Power Purchase Agreement (PPA), providing predictable, inflation-hedged yields.',
    highlights: [
      'Tier 1 BloombergNEF solar modules with 25-year manufacturer warranty',
      'Counterparty is an investment-grade tile exporter with 40-year history',
      'Grid connection license already issued and fully stamped',
      'Predicted annual energy production of 2,900 MWh'
    ],
    structure: {
      ownerCapital: 350000,
      memberTarget: 920000,
      seniorDebt: 450000,
      equityType: 'Preferred Equity with Asset Lien'
    },
    milestones: [
      { phase: 'Phase 1', title: 'PPA Agreement & Grid Permissions', status: 'completed', date: 'Dec 2025' },
      { phase: 'Phase 2', title: 'Mounting Structure Fabrication on Industrial Roofs', status: 'completed', date: 'Feb 2026' },
      { phase: 'Phase 3', title: 'Inverter & Cell Array Installation', status: 'in-progress', date: 'May 2026' },
      { phase: 'Phase 4', title: 'Grid Sync & Commercial Operation Date (COD)', status: 'upcoming', date: 'Aug 2026' },
    ],
    documents: [
      { name: 'Solara_15Yr_PPA_Contract_Redacted.pdf', size: '4.2 MB', type: 'PDF' },
      { name: 'Engineering_Production_Simulations_PVsyst.pdf', size: '6.1 MB', type: 'PDF' },
      { name: 'Spanish_Grid_Interconnection_Decree.pdf', size: '1.2 MB', type: 'PDF' }
    ]
  },
  {
    id: 'opp-3',
    title: 'Nordic Pure AgTech Greenhouses',
    tagline: 'Precision indoor strawberry & greens facility replacing winter imports',
    category: 'AgTech & Food',
    location: 'Gothenburg, Sweden',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    owner: {
      name: 'Lars Lindqvist',
      role: 'Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Nordic Harvest Farms',
      trackRecord: 'Ex-VP of Operations at Bama Nordic; 3 operational indoor farms',
      verified: true,
    },
    targetAmount: 640000,
    raisedAmount: 395000,
    minInvestment: 1500,
    termMonths: 30,
    projectedReturn: '17.2% IRR',
    returnType: 'Revenue Royalty',
    riskRating: 'Medium',
    riskProfile: 'Expansion Capital',
    fundingProgress: 61,
    backersCount: 31,
    closingDaysLeft: 18,
    description: 'Scaling Phase 2 of automated semi-closed vertical farm powering local Scandinavian grocery retail. Operates on 100% renewable hydro power and industrial waste heat.',
    highlights: [
      'Zero pesticide certification; verified 95% less water usage vs open field',
      'Signed supply agreements with ICA and Coop Sweden stores',
      'Patented root aeroponics yielding 3.2x traditional Dutch greenhouse yield',
      'Strong local municipality subsidy backing capital expenditure'
    ],
    structure: {
      ownerCapital: 180000,
      memberTarget: 640000,
      seniorDebt: 200000,
      equityType: 'Subordinated Revenue Share Note'
    },
    milestones: [
      { phase: 'Phase 1', title: 'Land Lease & Waste-Heat Pipeline Hookup', status: 'completed', date: 'Jan 2026' },
      { phase: 'Phase 2', title: 'Greenhouse Structural Assembly & Lighting Rig', status: 'in-progress', date: 'Mar 2026' },
      { phase: 'Phase 3', title: 'Seedling Germination & Pilot Harvest', status: 'upcoming', date: 'Jun 2026' },
      { phase: 'Phase 4', title: 'Commercial Retail Distribution Run', status: 'upcoming', date: 'Sep 2026' },
    ],
    documents: [
      { name: 'Nordic_Harvest_Financial_Model_2026-2029.xlsx', size: '2.1 MB', type: 'XLSX' },
      { name: 'Retailer_Letter_of_Intent_ICA_Coop.pdf', size: '1.5 MB', type: 'PDF' },
      { name: 'Agronomic_Yield_Audit_Report.pdf', size: '3.7 MB', type: 'PDF' }
    ]
  },
  {
    id: 'opp-4',
    title: 'Kurogane Precision Robotics',
    tagline: 'High-speed automated packaging cells for pharmaceutical manufacturers',
    category: 'Health & Tech',
    location: 'Munich, Germany',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    owner: {
      name: 'Dr. Markus Weber',
      role: 'Chief Technology Officer & Co-Founder',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      company: 'Kurogane Automation GmbH',
      trackRecord: 'Former lead robotics engineer at KUKA, 6 patents in delta kinematics',
      verified: true,
    },
    targetAmount: 1100000,
    raisedAmount: 940000,
    minInvestment: 5000,
    termMonths: 36,
    projectedReturn: '19.5% IRR',
    returnType: 'Equity Growth',
    riskRating: 'Medium',
    riskProfile: 'Revenue Generating',
    fundingProgress: 85,
    backersCount: 68,
    closingDaysLeft: 8,
    description: 'Funding production of 12 custom robotic pick-and-place cleanroom cells ordered by tier-1 generic medicine manufacturers across the DACH region. High gross margins (>42%).',
    highlights: [
      'Confirmed purchase orders with non-refundable 30% advance deposits',
      'Cleanroom ISO Class 5 certified robotics with AI vision alignment',
      'Recurring software licensing revenue model attached to every deployed cell',
      'Experienced technical team with past supplier relationships'
    ],
    structure: {
      ownerCapital: 400000,
      memberTarget: 1100000,
      seniorDebt: 250000,
      equityType: 'Preferred Seed Equity with Liquidation Preference'
    },
    milestones: [
      { phase: 'Phase 1', title: 'Prototype Validation with Lead Client', status: 'completed', date: 'Nov 2025' },
      { phase: 'Phase 2', title: 'Component Procurement & Actuator Assembly', status: 'completed', date: 'Jan 2026' },
      { phase: 'Phase 3', title: 'Factory Acceptance Testing (FAT) Batch 1', status: 'in-progress', date: 'Apr 2026' },
      { phase: 'Phase 4', title: 'On-site Client Commissioning & Final Payment', status: 'upcoming', date: 'Jul 2026' },
    ],
    documents: [
      { name: 'Kurogane_Audited_Accounts_FY2025.pdf', size: '3.1 MB', type: 'PDF' },
      { name: 'Pharma_Client_Order_Manifests_Summary.pdf', size: '2.4 MB', type: 'PDF' },
      { name: 'Patent_Verification_Munich_IP_Office.pdf', size: '1.9 MB', type: 'PDF' }
    ]
  },
  {
    id: 'opp-5',
    title: 'Monolith Specialty Roasters',
    tagline: 'National DTC subscription & wholesale distribution center expansion',
    category: 'Retail & Manufacturing',
    location: 'Austin, Texas, USA',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    owner: {
      name: 'Savannah Cole',
      role: 'Founder & Master Roaster',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      company: 'Monolith Coffee Craft LLC',
      trackRecord: 'Bootstrapped from single garage to $3.2M ARR in 36 months',
      verified: true,
    },
    targetAmount: 500000,
    raisedAmount: 500000,
    minInvestment: 1000,
    termMonths: 20,
    projectedReturn: '14.5% Fixed Yield',
    returnType: 'Fixed Yield',
    riskRating: 'Low-Medium',
    riskProfile: 'Expansion Capital',
    fundingProgress: 100,
    backersCount: 49,
    closingDaysLeft: 0,
    description: 'Fully funded! Acquisition of a 70kg Loring eco-smart roaster and high-speed nitrogen-flushed canning line to fulfill wholesale contracts with 140 gourmet grocery doors.',
    highlights: [
      '100% funded by 49 GeinzClub members in 9 days',
      '80% reduction in roasting emissions using patented heat recapture',
      'Direct trade single-estate beans with transparent farmer pay index',
      'Monthly interest disbursements beginning month 2'
    ],
    structure: {
      ownerCapital: 150000,
      memberTarget: 500000,
      seniorDebt: 0,
      equityType: 'Senior Secured Equipment Note'
    },
    milestones: [
      { phase: 'Phase 1', title: 'Wholesale Purchase Orders Finalized', status: 'completed', date: 'Jan 2026' },
      { phase: 'Phase 2', title: 'Loring S70 Roaster Delivery to Austin Facility', status: 'completed', date: 'Feb 2026' },
      { phase: 'Phase 3', title: 'Full Production Scale-Up & Shelf Placement', status: 'in-progress', date: 'Apr 2026' },
      { phase: 'Phase 4', title: 'First Quarterly Distribution to Backers', status: 'upcoming', date: 'May 2026' },
    ],
    documents: [
      { name: 'Monolith_Equipment_Lien_Security_Filing.pdf', size: '2.8 MB', type: 'PDF' },
      { name: 'Historical_P&L_and_DTC_Cohort_Retention.pdf', size: '1.7 MB', type: 'PDF' }
    ]
  }
];

export const PILLARS: Pillar[] = [
  {
    id: 'connect',
    title: 'Connect',
    tagline: 'Real People with Real Capital and Direct Experience',
    description: 'Direct, unmediated access to vetted founders, accredited angels, syndicate heads, and high-performing operators who share deal flow, battle-tested playbooks, and strategic intros.',
    bulletPoints: [
      'Private verified member directory with filterable skills & capital tiers',
      'Monthly regional club roundtables in London, Zurich, New York & Dubai',
      'Direct deal syndication chat rooms without third-party brokers'
    ],
    iconName: 'Users',
    metric: '2,400+ Vetted Members'
  },
  {
    id: 'build',
    title: 'Build',
    tagline: 'Businesses Built with Real Moats and Cashflow',
    description: 'Transform market opportunities into enduring commercial ventures. Members co-found, consult, lend supply chain capabilities, and solve execution bottlenecks together.',
    bulletPoints: [
      'Venture co-creation labs with skin-in-the-game founding members',
      'Shared institutional-grade legal templates and SPV structuring',
      'Vetted executive talent and board advisor placement'
    ],
    iconName: 'Hammer',
    metric: '48 Active Businesses'
  },
  {
    id: 'invest',
    title: 'Invest',
    tagline: 'Vetted Opportunities with Owner Skin-in-the-Game',
    description: 'Participate in privately vetted real-world commercial deals. Choose between our intelligent portfolio allocation algorithm or hand-select every single opportunity yourself.',
    bulletPoints: [
      'Minimum 15% owner personal capital requirement on every raise',
      'Real collateral, equipment liens, or transparent cashflow contracts',
      'Complete flexibility: Smart Allocation algorithm OR Manual Investing'
    ],
    iconName: 'TrendingUp',
    metric: '$18.5M+ Capital Deployed'
  },
  {
    id: 'grow',
    title: 'Grow',
    tagline: 'Sustainable Wealth and Lasting Legacy',
    description: 'Compound knowledge, distribution reach, and net worth. Benefit from regular dividend distributions, portfolio reviews, and collaborative scale-up advisory.',
    bulletPoints: [
      'Automated quarterly yield distributions deposited to member accounts',
      'Quarterly macroeconomic and private equity deep dives',
      'Member-only secondary liquidity windows for equity positions'
    ],
    iconName: 'Sparkles',
    metric: '$2.4M+ Yield Distributed'
  }
];

export const HOW_IT_WORKS_STEPS: StepJourney[] = [
  {
    step: 1,
    title: 'Join GeinzClub',
    shortDesc: 'Submit your profile and share your investment, entrepreneurial, or professional goals.',
    details: 'Every applicant submits their professional background, areas of expertise, and capital ambitions. We maintain high signal-to-noise by filtering for alignment, integrity, and long-term mindset.',
    iconName: 'UserPlus'
  },
  {
    step: 2,
    title: 'Verify Your Membership',
    shortDesc: 'Complete bank-grade identity verification (KYC/AML) and accreditation credentials.',
    details: 'Safety begins with knowing who is at the table. Our compliance partner conducts secure identity verification and checks investor credentials to protect all club members and preserve trust.',
    iconName: 'ShieldCheck'
  },
  {
    step: 3,
    title: 'Discover Opportunities',
    shortDesc: 'Review verified pitch books, audited financials, and owner skin-in-the-game commitments.',
    details: 'Access live deal rooms with comprehensive prospectuses. Inspect owner backgrounds, equipment appraisals, customer contracts, legal structure, and risk factors in full daylight.',
    iconName: 'Search'
  },
  {
    step: 4,
    title: 'Choose How You Invest',
    shortDesc: 'Elect Smart Allocation for algorithmic diversification OR Manual Investing for personal deal curation.',
    details: 'You decide whether you want our algorithmic engine to distribute your capital across pre-set risk parameters and sectors, or if you prefer to handpick individual projects and approve each dollar yourself.',
    iconName: 'Sliders'
  },
  {
    step: 5,
    title: 'Track, Learn & Grow',
    shortDesc: 'Monitor milestone progress, receive distributions, and participate in club masterminds.',
    details: 'Receive quarterly yield distributions directly into your custodial wallet. Read operational updates from founders, attend monthly deal reviews, and reinvest returns to compound your wealth.',
    iconName: 'Award'
  }
];

export const MEMBER_ARCHETYPES: MemberArchetype[] = [
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    badge: 'Founders & Operators',
    tagline: 'Building the next generation of cashflow-positive businesses',
    description: 'Founders who understand that real enduring value comes from sound unit economics, great teams, and customer obsession rather than paper vanity metrics.',
    whatTheyBring: [
      'Verified real-world business opportunities looking for growth capital',
      'Deep domain operating experience and agile problem solving',
      'Willingness to invest personal skin-in-the-game in their own ventures'
    ],
    whatTheyGet: [
      'Direct non-dilutive and strategic growth capital without predatory VC terms',
      'Access to seasoned advisors, customer intros, and supply chain partners',
      'A brotherhood of fellow operators walking the exact same path'
    ],
    exampleMember: {
      name: 'Julian Vance',
      role: 'Founder',
      company: 'OmniVolt Industrial Storage',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'business-owners',
    title: 'Business Owners',
    badge: 'Established Enterprises',
    tagline: 'Experienced stewards of operating companies and legacy assets',
    description: 'Leaders of established commercial enterprises seeking expansion capital, succession planning, M&A syndicates, or strategic co-investments.',
    whatTheyBring: [
      'Decades of industry credibility, existing customer books, and stability',
      'Collateral-backed expansion projects with clear cashflow visibility',
      'Mentorship and board guidance for rising club founders'
    ],
    whatTheyGet: [
      'Syndicated debt and equity financing from fellow club members',
      'Modernization frameworks, digital automation, and new market expansion',
      'Diversification outside their primary industry into other high-yield assets'
    ],
    exampleMember: {
      name: 'Beatrice Rossi',
      role: 'Managing Partner',
      company: 'Rossi Precision Engineering (35 yrs)',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'investors',
    title: 'Investors',
    badge: 'Capital Allocators',
    tagline: 'Seeking asymmetric returns with direct transparency and collateral',
    description: 'Accredited angels, family office directors, and seasoned wealth builders who want direct access to private businesses without opaque fund manager layers.',
    whatTheyBring: [
      'Patient, constructive growth capital and syndicate leadership',
      'Due diligence scrutiny, risk evaluation, and governance oversight',
      'Co-investment syndication networks across global hubs'
    ],
    whatTheyGet: [
      'Curated deal flow with audited documentation and owner skin-in-the-game',
      'Freedom of choice: Algorithmic Smart Allocation OR 100% manual selection',
      'Quarterly cash distributions and transparent asset liens'
    ],
    exampleMember: {
      name: 'Tariq Al-Mansoor',
      role: 'Private Investor & Syndicate Lead',
      company: 'Mansoor Capital Partners',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'traders',
    title: 'Traders',
    badge: 'Market Strategists',
    tagline: 'Capital preservation, hedging, and liquidity optimization',
    description: 'Active market participants and macro analysts who diversify market profits into tangible, real-economy cashflow and physical assets.',
    whatTheyBring: [
      'Macroeconomic timing perspectives, rate hedging insights, and liquidity math',
      'Disciplined risk-reward framing and portfolio sizing acumen',
      'Dynamic capital re-allocation during shifting market cycles'
    ],
    whatTheyGet: [
      'Uncorrelated private assets that produce steady yield regardless of market swings',
      'Physical collateral and legal contracts protecting principal capital',
      'High-velocity syndicate deal flow with structured exit horizons'
    ],
    exampleMember: {
      name: 'Chloe Mercer',
      role: 'Quantitative Trader & Angel',
      company: 'Former Goldman Sachs / Independent Allocator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'professionals',
    title: 'Professionals',
    badge: 'Subject Specialists',
    tagline: 'Attorneys, CPAs, M&A advisors, and senior corporate executives',
    description: 'Specialists who provide structural integrity, tax optimization, legal scaffolding, and operational excellence to high-growth opportunities.',
    whatTheyBring: [
      'Institutional legal rigor, tax structuring, and compliance reviews',
      'Audit validation and cross-border regulatory structuring',
      'Deep enterprise contacts and procurement access'
    ],
    whatTheyGet: [
      'Carried interest and equity co-investment opportunities in vetted deals',
      'High-value client and partner relationships with vetted club leaders',
      'Ability to turn professional expertise into compounding equity wealth'
    ],
    exampleMember: {
      name: 'Alexander Sterling',
      role: 'Cross-Border M&A Counsel',
      company: 'Sterling & Croft LLP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'builders',
    title: 'Builders',
    badge: 'Technical & Growth Leads',
    tagline: 'Engineers, product architects, and performance growth masters',
    description: 'Makers who turn bold vision into working technology, robust physical supply chains, and scalable acquisition engines.',
    whatTheyBring: [
      'Rapid prototype validation, software systems, and AI integration',
      'Modern digital marketing, CAC optimization, and distribution mechanics',
      'Technical due diligence on software, hardware, and physical engineering deals'
    ],
    whatTheyGet: [
      'Opportunities to join high-potential portfolio businesses as equity partners',
      'Financing for proprietary technology tools and product spin-outs',
      'Direct contact with founders who respect and reward exceptional execution'
    ],
    exampleMember: {
      name: 'Maya Chen',
      role: 'VP Product Architecture',
      company: 'Apex Tech Labs',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: 'Henrik van de Berg',
    authorRole: 'Founder @ Apex Logistics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    badge: 'Project Owner',
    category: 'Milestone',
    timeAgo: '2 hours ago',
    content: 'Delighted to confirm our delivery slots for the first 8 Scania e-trucks have been locked with Rotterdam depot. Huge thanks to the 42 GeinzClub backers who helped close 78% of our raise in under 2 weeks. Full video walkthrough of the charging bay posted in the Deal Room!',
    likes: 38,
    comments: 14,
    hasVerifiedDealBadge: true
  },
  {
    id: 'post-2',
    author: 'Elena Ramos',
    authorRole: 'CEO @ Solara Energía',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    badge: 'Project Owner',
    category: 'Deal Debrief',
    timeAgo: '5 hours ago',
    content: 'Just concluded our live Q&A session with 64 members on the 15-year industrial PPA contract terms. The transcript and full legal appendix on the index-linked tariff formula are now accessible to all verified members. Over 90% committed now!',
    likes: 52,
    comments: 21,
    hasVerifiedDealBadge: true
  },
  {
    id: 'post-3',
    author: 'Alexander Sterling',
    authorRole: 'Partner @ Sterling & Croft',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    badge: 'Professional Member',
    category: 'Mastermind',
    timeAgo: 'Yesterday',
    content: 'Hosting a private 45-minute briefing this Thursday at 17:00 CET on "Cross-Border Asset Protection & SPV Tax Efficiency for Syndicate Allocators". Limited to 50 members. We will break down real case studies from recent logistics and energy syndicates.',
    likes: 47,
    comments: 29
  },
  {
    id: 'post-4',
    author: 'Savannah Cole',
    authorRole: 'Founder @ Monolith Coffee',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    badge: 'Funded Founder',
    category: 'Milestone',
    timeAgo: '2 days ago',
    content: 'First quarterly equipment yield distributed to all 49 club backers! Check your member balances. We exceeded our wholesale door projections by 18% this month thanks to member introductions to two regional specialty grocers. Real community at work!',
    likes: 74,
    comments: 33,
    hasVerifiedDealBadge: true
  }
];

export const MEMBER_STORIES: MemberStory[] = [
  {
    id: 'story-1',
    name: 'David Kestler',
    role: 'Managing Director & Investor',
    company: 'Kestler Industrial Holdings',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    memberSince: 'March 2024',
    archetype: 'Investor',
    headline: 'Real collateral, verified people, and no fund manager black box.',
    quote: 'Most private platforms hide behind generic fund wrappers where you never know who is running the business. In GeinzClub, I sat down on video with Henrik from Apex Logistics, reviewed the Scania leases, and inspected the customer contracts. I allocated $50,000 using Manual Investing, and the quarterly returns have been deposited like clockwork.',
    stats: {
      label: 'Capital Deployed',
      value: '$240,000 across 5 Projects'
    }
  },
  {
    id: 'story-2',
    name: 'Sofia Al-Husseini',
    role: 'Serial Founder & Angel',
    company: 'NextGen Mobility Lab',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    memberSince: 'July 2024',
    archetype: 'Entrepreneur',
    headline: 'We raised $800k in 14 days and gained 60 strategic advocates.',
    quote: 'Venture capital wanted 28% of my business and board vetoes for standard expansion money. GeinzClub allowed us to raise asset-backed growth financing directly from entrepreneurs who understand manufacturing. Even better: three club members became our largest commercial distribution partners.',
    stats: {
      label: 'Growth Funded',
      value: '$800,000 Raised'
    }
  },
  {
    id: 'story-3',
    name: 'Marcus Thorne',
    role: 'Senior Tech Executive & Allocator',
    company: 'Ex-Stripe / Independent Builder',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    memberSince: 'January 2025',
    archetype: 'Builder / Investor',
    headline: 'Smart Allocation gives me hands-free diversification across tangible deals.',
    quote: 'Between my executive role and angel advising, I do not always have 20 hours to parse financial prospectuses. I use GeinzClub Smart Allocation with a Balanced profile: it distributes my monthly allocation across top-rated green energy and logistics opportunities with automated diversification.',
    stats: {
      label: 'Portfolio Growth',
      value: '16.2% Net IRR'
    }
  }
];

export const TRUST_CATEGORIES = [
  { name: 'CleanTech Manufacturing', count: '14 Active' },
  { name: 'Commercial Solar & Microgrids', count: '9 Active' },
  { name: 'Cold-Chain & Freight Logistics', count: '12 Active' },
  { name: 'Precision AgTech & Food', count: '8 Active' },
  { name: 'Specialty Retail & DTC', count: '11 Active' },
  { name: 'Industrial Robotics & Health', count: '7 Active' }
];

export const EARLY_STAGE_METRICS = [
  {
    label: 'Verified Members',
    value: '2,400+',
    subtext: 'Entrepreneurs, investors, operators across 24 countries'
  },
  {
    label: 'Active Businesses',
    value: '48',
    subtext: 'Vetted companies currently in network or raising'
  },
  {
    label: 'Capital Deployed',
    value: '$18.5M+',
    subtext: 'Committed to real-economy projects & expansion'
  },
  {
    label: 'Projects Funded',
    value: '34',
    subtext: 'Successfully closed and operating milestone phases'
  },
  {
    label: 'Returns Generated',
    value: '$2.4M+',
    subtext: 'Distributed in quarterly yield & profit-shares'
  }
];
