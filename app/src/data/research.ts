export interface ResearchPaper {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  downloadUrl?: string;
  readTime: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'The Indian Mid-Cap Premium: A Systematic Analysis',
    excerpt: 'Our comprehensive study examines the historical performance premium of mid-cap equities in the Indian market, analyzing 20 years of data to identify key drivers and risk factors.',
    date: '2024-01-15',
    category: 'Equity Research',
    tags: ['Mid-Cap', 'Equity', 'Long-term'],
    complexity: 'Advanced',
    readTime: '15 min read',
  },
  {
    id: '2',
    title: 'Debt Fund Selection Framework for Rising Rate Environments',
    excerpt: 'A systematic approach to evaluating debt mutual funds during periods of monetary tightening, with specific focus on duration management and credit quality assessment.',
    date: '2024-01-12',
    category: 'Fixed Income',
    tags: ['Debt Funds', 'Mutual Funds', 'Rising Rates'],
    complexity: 'Intermediate',
    readTime: '12 min read',
  },
  {
    id: '3',
    title: 'PMS vs Mutual Funds: Cost-Benefit Analysis 2024',
    excerpt: 'An objective comparison of Portfolio Management Services and mutual funds, examining fee structures, tax implications, and net returns across different investment horizons.',
    date: '2024-01-08',
    category: 'PMS Analysis',
    tags: ['PMS', 'Mutual Funds', 'Fees'],
    complexity: 'Intermediate',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'AIF Category III: Understanding Hedge Fund Strategies in India',
    excerpt: 'Deep dive into Alternative Investment Fund Category III strategies, including long-short equity, arbitrage, and quantitative approaches available to Indian investors.',
    date: '2024-01-05',
    category: 'AIF Research',
    tags: ['AIF', 'Hedge Funds', 'Alternative'],
    complexity: 'Advanced',
    readTime: '18 min read',
  },
  {
    id: '5',
    title: 'Sector Rotation Strategies for Indian Markets',
    excerpt: 'Evidence-based analysis of sector rotation patterns in the Indian equity market, with practical frameworks for timing and implementation.',
    date: '2023-12-28',
    category: 'Strategy',
    tags: ['Sector Rotation', 'Equity', 'Tactical'],
    complexity: 'Intermediate',
    readTime: '14 min read',
  },
  {
    id: '6',
    title: 'International Equity Exposure: How Much is Right for You?',
    excerpt: 'Portfolio allocation analysis for international equities, examining correlation benefits, currency impact, and optimal allocation ranges for Indian investors.',
    date: '2023-12-22',
    category: 'Asset Allocation',
    tags: ['International', 'Diversification', 'Allocation'],
    complexity: 'Beginner',
    readTime: '8 min read',
  },
];

export const valuePropositions = [
  {
    id: 'open-source',
    title: 'Open-Source Research',
    description: 'All our research is freely accessible. No paywalls, no subscriptions, no hidden fees.',
    icon: 'Unlock',
  },
  {
    id: 'systematic',
    title: 'Systematic Frameworks',
    description: 'Every analysis follows rigorous, repeatable methodologies you can verify and trust.',
    icon: 'GitBranch',
  },
  {
    id: 'institutional',
    title: 'Institutional Methodology',
    description: 'Research standards matching the best global institutions, applied to Indian markets.',
    icon: 'Building2',
  },
  {
    id: 'no-barriers',
    title: 'No Minimum Barriers',
    description: 'Access premium research regardless of your portfolio size. Quality scales with insight, not wealth.',
    icon: 'Scale',
  },
  {
    id: 'transparent',
    title: 'Transparent Process',
    description: 'Full disclosure of our methods, data sources, and potential conflicts of interest.',
    icon: 'Eye',
  },
  {
    id: 'democratized',
    title: 'Democratized Access',
    description: 'Making institutional-grade insights available to every serious investor in India.',
    icon: 'Users',
  },
];

export const teamMembers = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    role: 'Chief Research Officer',
    credentials: 'PhD Finance, IIM Ahmedabad',
    focus: 'Macro Research & Asset Allocation',
    image: '/team/rajesh.jpg',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Head of Equity Research',
    credentials: 'CFA, Former VP at Kotak Securities',
    focus: 'Indian Equity Markets',
    image: '/team/priya.jpg',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Senior Analyst - Fixed Income',
    credentials: 'CA, FRM',
    focus: 'Debt Markets & Interest Rate Strategy',
    image: '/team/amit.jpg',
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    role: 'Analyst - Alternative Investments',
    credentials: 'MBA Finance, CAIA',
    focus: 'PMS, AIF & Structured Products',
    image: '/team/sneha.jpg',
  },
];

export const testimonials = [
  {
    id: '1',
    quote: 'SoundThesis research transformed how I approach portfolio construction. The systematic frameworks are invaluable.',
    author: 'Vikram Mehta',
    role: 'Individual Investor',
    location: 'Mumbai',
  },
  {
    id: '2',
    quote: 'Finally, institutional-quality research accessible to professionals like us. Their PMS analysis is exceptional.',
    author: 'Ananya Reddy',
    role: 'Financial Advisor',
    location: 'Bangalore',
  },
  {
    id: '3',
    quote: 'The transparency in their methodology gives me confidence in every investment decision I make.',
    author: 'Rahul Khanna',
    role: 'Business Owner',
    location: 'Delhi',
  },
];

export const caseStudies = [
  {
    id: '1',
    title: 'Conservative Investor Portfolio Optimization',
    challenge: 'A 55-year-old investor needed stable income with capital preservation.',
    research: 'Our debt fund framework and duration analysis identified optimal fund selection.',
    outcome: 'Improved yield by 1.2% while maintaining similar risk profile.',
    metric: '+1.2% Yield Improvement',
  },
  {
    id: '2',
    title: 'High-Net-Worth Equity Allocation Strategy',
    challenge: 'Client needed tax-efficient equity exposure beyond standard mutual funds.',
    research: 'PMS strategy analysis identified managers with consistent alpha generation.',
    outcome: '3-year alpha of 4.5% over benchmark with lower volatility.',
    metric: '+4.5% Alpha Generated',
  },
  {
    id: '3',
    title: 'Young Professional Growth Portfolio',
    challenge: '28-year-old with 20+ year horizon seeking aggressive growth.',
    research: 'Mid-cap premium analysis informed concentrated allocation strategy.',
    outcome: 'Outperformed Nifty Midcap 150 by 6.8% annually over 5 years.',
    metric: '+6.8% Annual Outperformance',
  },
];

export const researchCategories = [
  {
    id: 'mutual-funds',
    title: 'Mutual Fund Research',
    description: 'In-depth analysis of equity, debt, and hybrid mutual funds with selection frameworks and monitoring methodologies.',
    paperCount: 48,
    icon: 'PieChart',
  },
  {
    id: 'pms',
    title: 'PMS Strategy Analysis',
    description: 'Comprehensive evaluation of Portfolio Management Services, including performance attribution and fee analysis.',
    paperCount: 32,
    icon: 'TrendingUp',
  },
  {
    id: 'aif',
    title: 'AIF Deep Dives',
    description: 'Alternative Investment Fund research covering Category I, II, and III strategies with due diligence frameworks.',
    paperCount: 24,
    icon: 'BarChart3',
  },
  {
    id: 'sif',
    title: 'SIF Opportunities',
    description: 'Structured Investment Product analysis, evaluating risk-return profiles and suitability for different investor types.',
    paperCount: 18,
    icon: 'Layers',
  },
];
