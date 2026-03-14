import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  PieChart,
  TrendingUp,
  BarChart3,
  Layers,
  FileText,
  Users,
  Search,
  Settings,
  RefreshCw,
  Shield,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const serviceLevels = [
    {
      id: 0,
      title: 'Research-Only Access',
      description: 'For self-directed investors who want our research',
      features: [
        'Full access to all Thesis Notes',
        'Weekly research digest',
        'Monthly market outlook',
        'Email support',
      ],
      researchAccess: 'Complete Library',
      distributionSupport: 'None',
      price: 'Free',
      cta: 'Start Exploring',
      link: '/thesis-notes',
    },
    {
      id: 1,
      title: 'Research + Distribution',
      description: 'Research-backed product selection and execution',
      features: [
        'Everything in Research-Only',
        'Personalized fund selection',
        'PMS/AIF recommendations',
        'Dedicated relationship manager',
        'Quarterly portfolio review',
      ],
      researchAccess: 'Complete Library',
      distributionSupport: 'Full Support',
      price: 'Distribution Fees Only',
      cta: 'Schedule Consultation',
      link: '#contact',
    },
    {
      id: 2,
      title: 'Full Portfolio Implementation',
      description: 'Comprehensive wealth management with ongoing monitoring',
      features: [
        'Everything in Research + Distribution',
        'Custom portfolio construction',
        'Ongoing rebalancing',
        'Tax optimization',
        'Monthly performance reports',
        'Direct analyst access',
      ],
      researchAccess: 'Complete Library + Exclusive',
      distributionSupport: 'Priority Support',
      price: 'Custom Fee Structure',
      cta: 'Contact Us',
      link: '#contact',
    },
  ];

  const productDetails = [
    {
      id: 'mutual-funds',
      title: 'Mutual Funds',
      icon: PieChart,
      description:
        'Research-driven mutual fund selection with focus on no-load options and tax efficiency.',
      approach: [
        'Quantitative screening using proprietary models',
        'Qualitative assessment of fund managers',
        'Expense ratio and tax impact analysis',
        'Regular monitoring and rebalancing signals',
      ],
      criteria: [
        'Minimum 5-year track record',
        'Consistent risk-adjusted returns',
        'Reasonable expense ratios',
        'Alignment with stated mandate',
      ],
    },
    {
      id: 'pms',
      title: 'Portfolio Management Services',
      icon: TrendingUp,
      description:
        'In-depth PMS strategy analysis to identify managers with genuine alpha generation capability.',
      approach: [
        'Performance attribution analysis',
        'Portfolio concentration assessment',
        'Fee structure evaluation',
        'Tax efficiency comparison',
      ],
      criteria: [
        '3+ years of live track record',
        'Positive alpha over benchmark',
        'Transparent portfolio disclosure',
        'Reasonable minimum investment',
      ],
    },
    {
      id: 'aif',
      title: 'Alternative Investment Funds',
      icon: BarChart3,
      description:
        'Due diligence framework for AIF investments across all three categories.',
      approach: [
        'Strategy and market fit analysis',
        'Fund manager background verification',
        'Term sheet and fee structure review',
        'Liquidity and exit assessment',
      ],
      criteria: [
        'Clear investment thesis',
        'Experienced management team',
        'Appropriate fund size',
        'Transparent reporting',
      ],
    },
    {
      id: 'sif',
      title: 'Structured Investment Products',
      icon: Layers,
      description:
        'SIF evaluation focusing on risk-return profiles and suitability for different investor types.',
      approach: [
        'Payoff structure analysis',
        'Counterparty risk assessment',
        'Cost breakdown and fee analysis',
        'Scenario modeling',
      ],
      criteria: [
        'Clear payoff structure',
        'Reputable issuer',
        'Appropriate risk level',
        'Cost transparency',
      ],
    },
  ];

  const clientJourney = [
    {
      step: 1,
      title: 'Research Access',
      description:
        'Gain immediate access to our complete research library and begin exploring our methodologies.',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Portfolio Analysis',
      description:
        'We analyze your current portfolio, goals, risk tolerance, and time horizon.',
      icon: Search,
    },
    {
      step: 3,
      title: 'Strategy Formulation',
      description:
        'Based on our research, we develop a customized investment strategy for you.',
      icon: Settings,
    },
    {
      step: 4,
      title: 'Implementation',
      description:
        'Execute the strategy through carefully selected products and allocations.',
      icon: Check,
    },
    {
      step: 5,
      title: 'Ongoing Updates',
      description:
        'Regular research updates and portfolio rebalancing as markets evolve.',
      icon: RefreshCw,
    },
  ];

  return (
    <main className="pt-16">
      {/* Section 1: Clarification Header */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <span className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 inline-block px-4 py-2 bg-navy/10 text-navy text-sm font-medium rounded-full mb-6">
              Wealth Management Services
            </span>
            <h1 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-near-black mb-4">
              Applying Our Research to Your Portfolio
            </h1>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-medium-gray mb-6">
              Wealth management informed by institutional research methodologies.
              We operate on a distribution basis—our research guides every
              recommendation we make.
            </p>
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 inline-flex items-center gap-2 px-4 py-2 bg-bg-light rounded-brand">
              <Shield className="w-4 h-4 text-navy" />
              <span className="text-sm text-medium-gray">
                SEBI Registered Investment Advisor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Service Spectrum (Interactive Selector) */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Choose Your Service Level
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Select the level of support that matches your needs and investment
              style.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 flex flex-wrap justify-center gap-2 mb-8">
            {serviceLevels.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-brand text-sm font-medium transition-all duration-200 ${
                  selectedService === service.id
                    ? 'bg-navy text-white'
                    : 'bg-white text-near-black hover:bg-navy/10'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 max-w-4xl mx-auto">
            <div className="bg-white rounded-brand shadow-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-near-black mb-2">
                    {serviceLevels[selectedService].title}
                  </h3>
                  <p className="text-medium-gray mb-6">
                    {serviceLevels[selectedService].description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {serviceLevels[selectedService].features.map(
                      (feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                          <span className="text-medium-gray text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    to={serviceLevels[selectedService].link}
                    className="btn-primary"
                  >
                    {serviceLevels[selectedService].cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-bg-light rounded-brand p-6">
                  <h4 className="text-near-black mb-4">Service Details</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-light-gray uppercase tracking-wider">
                        Research Access
                      </span>
                      <p className="text-medium-gray">
                        {serviceLevels[selectedService].researchAccess}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-light-gray uppercase tracking-wider">
                        Distribution Support
                      </span>
                      <p className="text-medium-gray">
                        {serviceLevels[selectedService].distributionSupport}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-light-gray uppercase tracking-wider">
                        Pricing
                      </span>
                      <p className="text-navy font-semibold">
                        {serviceLevels[selectedService].price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Distribution Details */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Product Distribution
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Detailed information about how we approach each product category.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {productDetails.map((product, index) => (
                <AccordionItem
                  key={product.id}
                  value={product.id}
                  className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 border border-border-gray rounded-brand overflow-hidden"
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-bg-light">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-brand bg-navy/10 flex items-center justify-center text-navy">
                        <product.icon className="w-5 h-5" />
                      </div>
                      <span className="text-near-black font-medium">
                        {product.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-medium-gray mb-6">
                      {product.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-near-black mb-3">
                          Our Research Approach
                        </h4>
                        <ul className="space-y-2">
                          {product.approach.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-medium-gray"
                            >
                              <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-near-black mb-3">
                          Selection Criteria
                        </h4>
                        <ul className="space-y-2">
                          {product.criteria.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-medium-gray"
                            >
                              <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 4: Client Journey Visualization */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Your Journey With Us
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              A typical engagement spans 3-6 months from initial research access
              to full portfolio implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {clientJourney.map((step, index) => (
              <div
                key={step.step}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600 relative`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-brand shadow-card p-6 h-full text-center hover:shadow-card-hover transition-all duration-200">
                  <div className="w-12 h-12 mx-auto rounded-full bg-navy/10 flex items-center justify-center text-navy mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-8 mx-auto rounded-full bg-navy text-white flex items-center justify-center text-sm font-semibold mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-near-black text-sm font-medium mb-2">
                    {step.title}
                  </h4>
                  <p className="text-medium-gray text-xs">
                    {step.description}
                  </p>
                </div>
                {index < clientJourney.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border-gray">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border-gray rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: No Minimum Commitment */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              <h2 className="text-near-black mb-4">
                No Minimum Investment Size
              </h2>
              <p className="text-medium-gray mb-6">
                Research quality shouldn't scale with account size. Whether
                you're investing ₹1 lakh or ₹10 crore, you deserve the same
                institutional-grade research and attention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Same Research Quality
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Every client receives access to our complete research
                      library.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Same Attention to Detail
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Our analysis process is identical regardless of portfolio
                      size.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Transparent Fee Structure
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Fees are based on services rendered, not AUM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200">
              <div className="bg-bg-light rounded-brand p-8">
                <h4 className="text-near-black mb-6">
                  Traditional vs. SoundThesis
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border-gray">
                    <span className="text-sm font-medium text-near-black">
                      Aspect
                    </span>
                    <span className="text-sm font-medium text-light-gray text-center">
                      Traditional
                    </span>
                    <span className="text-sm font-medium text-navy text-center">
                      SoundThesis
                    </span>
                  </div>
                  {[
                    { aspect: 'Minimum Investment', traditional: '₹1Cr+', soundthesis: 'None' },
                    { aspect: 'Research Access', traditional: 'Limited', soundthesis: 'Full' },
                    { aspect: 'Fee Structure', traditional: 'AUM-based', soundthesis: 'Service-based' },
                    { aspect: 'Transparency', traditional: 'Low', soundthesis: 'High' },
                  ].map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 gap-4 py-2"
                    >
                      <span className="text-sm text-medium-gray">
                        {row.aspect}
                      </span>
                      <span className="text-sm text-light-gray text-center line-through">
                        {row.traditional}
                      </span>
                      <span className="text-sm text-navy text-center font-medium">
                        {row.soundthesis}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Fee Transparency */}
      <section id="fees" className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Fee Transparency
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Clear, straightforward pricing with no hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 bg-white rounded-brand shadow-card p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-navy/10 flex items-center justify-center text-navy mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-near-black mb-2">Research Access</h4>
              <p className="text-3xl font-bold text-navy mb-2">Free</p>
              <p className="text-medium-gray text-sm">
                Complete library access with no registration required
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 bg-white rounded-brand shadow-card p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-navy/10 flex items-center justify-center text-navy mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-near-black mb-2">Distribution Support</h4>
              <p className="text-3xl font-bold text-navy mb-2">0.5-1%</p>
              <p className="text-medium-gray text-sm">
                One-time fee on product placement, varies by product type
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400 bg-white rounded-brand shadow-card p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-navy/10 flex items-center justify-center text-navy mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h4 className="text-near-black mb-2">Full Implementation</h4>
              <p className="text-3xl font-bold text-navy mb-2">Custom</p>
              <p className="text-medium-gray text-sm">
                Tailored fee structure based on complexity and services
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-500 max-w-2xl mx-auto mt-8 text-center">
            <p className="text-medium-gray text-sm">
              <strong className="text-near-black">Value Proposition:</strong>{' '}
              You pay for research and implementation, not for hidden charges or
              complex fee structures. Our incentives are aligned with yours—when
              you succeed, we succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-white/80 mb-8">
              Schedule a free consultation to discuss how our research can
              inform your investment decisions.
            </p>
            <Link
              to="#contact"
              className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-white text-navy text-sm font-semibold rounded-brand hover:bg-bg-light transition-all duration-200"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
