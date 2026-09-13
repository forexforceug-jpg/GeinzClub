import React, { useState } from 'react';
import { 
  UserProfile, 
  MemberPosition, 
  PayoutTransaction, 
  DealSubmission, 
  Opportunity 
} from '../../types';
import { 
  INITIAL_USER_PROFILE, 
  INITIAL_POSITIONS, 
  INITIAL_TRANSACTIONS, 
  INITIAL_SUBMISSIONS 
} from '../../data/mockDashboardData';
import { DashboardHeader } from './DashboardHeader';
import { PortfolioTab } from './PortfolioTab';
import { PositionsTab } from './PositionsTab';
import { DealRoomTab } from './DealRoomTab';
import { OperatorDeskTab } from './OperatorDeskTab';
import { SyndicateLoungeTab } from './SyndicateLoungeTab';
import { VaultTab } from './VaultTab';
import { DepositModal } from './DepositModal';

interface MemberDashboardProps {
  onViewLandingPage: () => void;
  onLogout: () => void;
  onOpenOpportunityDetail: (opportunityId: string) => void;
}

export const MemberDashboard: React.FC<MemberDashboardProps> = ({
  onViewLandingPage,
  onLogout,
  onOpenOpportunityDetail,
}) => {
  const [user, setUser] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [positions, setPositions] = useState<MemberPosition[]>(INITIAL_POSITIONS);
  const [transactions, setTransactions] = useState<PayoutTransaction[]>(INITIAL_TRANSACTIONS);
  const [submissions, setSubmissions] = useState<DealSubmission[]>(INITIAL_SUBMISSIONS);

  const [activeTab, setActiveTab] = useState<string>('portfolio');
  const [depositModalOpen, setDepositModalOpen] = useState(false);

  // Handle capital deposit
  const handleAddFunds = (amount: number, method: string) => {
    setUser((prev) => ({
      ...prev,
      availableBalance: prev.availableBalance + amount,
      portfolioValue: prev.portfolioValue + amount,
    }));

    const newTx: PayoutTransaction = {
      id: `tx-${Date.now()}`,
      date: 'Today',
      opportunityTitle: `${method} Capital Deposit`,
      type: 'Cash Deposit',
      amount: amount,
      status: 'Completed',
      referenceId: `DEP-${Math.random().toString(36).substring(2, 8).toUpperCase()}-88219`,
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle direct allocation into a deal
  const handleAllocateDeal = (deal: Opportunity, amount: number) => {
    // 1. Deduct from balance and increase invested
    setUser((prev) => ({
      ...prev,
      availableBalance: prev.availableBalance - amount,
      totalInvested: prev.totalInvested + amount,
      portfolioValue: prev.portfolioValue + amount * 0.05, // immediate slight markup
    }));

    // 2. Add or increase position
    const existingIndex = positions.findIndex((p) => p.opportunityId === deal.id);
    if (existingIndex >= 0) {
      const updated = [...positions];
      updated[existingIndex] = {
        ...updated[existingIndex],
        amountInvested: updated[existingIndex].amountInvested + amount,
        currentValuation: updated[existingIndex].currentValuation + amount,
      };
      setPositions(updated);
    } else {
      const newPos: MemberPosition = {
        id: `pos-${Date.now()}`,
        opportunityId: deal.id,
        title: deal.title,
        category: deal.category,
        amountInvested: amount,
        currentValuation: amount,
        irr: deal.projectedReturn,
        returnType: deal.returnType,
        dateCommitted: 'Today',
        dividendsReceived: 0,
        nextPayoutDate: 'Nov 30, 2026',
        nextPayoutEst: Math.round(amount * 0.038),
        status: 'Active',
        location: deal.location,
        image: deal.image,
        milestonesCompleted: 1,
        totalMilestones: deal.milestones.length,
      };
      setPositions((prev) => [newPos, ...prev]);
    }

    // 3. Add to ledger
    const newTx: PayoutTransaction = {
      id: `tx-${Date.now()}`,
      date: 'Today',
      opportunityTitle: deal.title,
      type: 'Capital Deployment',
      amount: -amount,
      status: 'Completed',
      referenceId: `ALLOC-${deal.id.toUpperCase()}-88219`,
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle operator new venture proposal
  const handleSubmitNewDeal = (deal: Omit<DealSubmission, 'id' | 'submissionDate' | 'stage' | 'stageNumber'>) => {
    const newSub: DealSubmission = {
      id: `sub-${Date.now()}`,
      ...deal,
      submissionDate: 'Today',
      stage: 'KYC & Legal Audit',
      stageNumber: 1,
      feedback: 'Initial documents received. Compliance review started by Swiss Legal Counsel.',
    };
    setSubmissions((prev) => [newSub, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#070D0A] text-slate-100 flex flex-col selection:bg-[#10E760] selection:text-[#070D0A]">
      
      {/* Header */}
      <DashboardHeader
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDeposit={() => setDepositModalOpen(true)}
        onViewLandingPage={onViewLandingPage}
        onLogout={onLogout}
        unreadNotifications={2}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'portfolio' && (
          <PortfolioTab
            user={user}
            positions={positions}
            transactions={transactions}
            onOpenDeposit={() => setDepositModalOpen(true)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'positions' && (
          <PositionsTab
            positions={positions}
            onOpenOpportunityDetail={onOpenOpportunityDetail}
          />
        )}

        {activeTab === 'deal-room' && (
          <DealRoomTab
            user={user}
            onAllocateDeal={handleAllocateDeal}
            onOpenOpportunityDetail={onOpenOpportunityDetail}
            onOpenDeposit={() => setDepositModalOpen(true)}
          />
        )}

        {activeTab === 'operator-desk' && (
          <OperatorDeskTab
            user={user}
            submissions={submissions}
            onSubmitNewDeal={handleSubmitNewDeal}
          />
        )}

        {activeTab === 'syndicate' && (
          <SyndicateLoungeTab user={user} />
        )}

        {activeTab === 'vault' && (
          <VaultTab user={user} />
        )}
      </main>

      {/* Deposit Capital Modal */}
      <DepositModal
        isOpen={depositModalOpen}
        onClose={() => setDepositModalOpen(false)}
        onAddFunds={handleAddFunds}
      />

    </div>
  );
};
