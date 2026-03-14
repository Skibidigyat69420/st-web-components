import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Database,
  Search,
  Users,
  FileText,
  Briefcase,
  RefreshCw,
  Check,
  X,
} from 'lucide-react';
import { teamMembers } from '@/data/research';

const PhilosophyPage = () => {
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

  const methodologySteps = [
    {
      icon: Database,
      title: 'Data Collection',
      description:
        'Comprehensive gathering of market data, financial statements, and macroeconomic indicators from verified sources.',
      tools: 'Bloomberg, CRISIL, AMFI, NSE/BSE',
    },
    {
      icon: Search,
      title: 'Systematic Analysis',
      description:
        'Application of quantitative models and qualitative frameworks to identify patterns and opportunities.',
      tools: 'Python, R, Statistical Models',
    },
    {
      icon: Users,
      title: 'Peer Review',
      description:
        'Every research piece undergoes rigorous internal review by multiple analysts before publication.',
      tools: 'Multi-analyst validation',
    },
    {
      icon: FileText,
      title: 'Publication',
      description:
        'Clear, jargon-free writing that makes complex concepts accessible to all investors.',
      tools: 'Open-access platform',
    },
    {
      icon: Briefcase,
      title: 'Portfolio Application',
      description:
        'Research is applied to client portfolios through our wealth management services.',
      tools: 'Custom allocation models',
    },
    {
      icon: RefreshCw,
      title: 'Continuous Refinement',
      description:
        'Ongoing monitoring and updates as market conditions and new data emerge.',
      tools: 'Real-time tracking',
    },
  ];

  const comparisonData = [
    { feature: 'Research Access', traditional: 'Paywalled', soundthesis: 'Open Source' },
    { feature: 'Minimum Investment', traditional: '₹1 Crore+', soundthesis: 'No Minimum' },
    { feature: 'Fee Structure', traditional: 'Hidden Charges', soundthesis: 'Fully Transparent' },
    { feature: 'Methodology', traditional: 'Opaque', soundthesis: 'Fully Disclosed' },
    { feature: 'Updates', traditional: 'Quarterly', soundthesis: 'Real-time' },
    { feature: 'Accessibility', traditional: 'UHNI Only', soundthesis: 'All Investors' },
  ];

  return (
    <main className="pt-16">
      {/* Section 1: Hero with Mission Statement */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto text-center">
            <span className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 inline-block px-4 py-2 bg-navy/10 text-navy text-sm font-medium rounded-full mb-6">
              Our Philosophy
            </span>
            <blockquote className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-near-black leading-tight mb-8">
              "Research should be a public good,
              <br />
              <span className="text-navy">not a private advantage.</span>"
            </blockquote>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-lg text-medium-gray max-w-2xl mx-auto">
              Our Philosophy of Democratized Finance
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Beliefs (Timeline Layout) */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              The Evolution of Research Access
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              How we got here and where we're headed.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-gray md:-translate-x-1/2" />

            {/* Past */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <span className="inline-block px-3 py-1 bg-light-gray text-white text-xs font-medium rounded-full mb-3">
                  Past
                </span>
                <h4 className="text-near-black mb-2">The Exclusive Era</h4>
                <p className="text-medium-gray text-sm">
                  Premium research was locked behind paywalls, available only to
                  ultra-high-net-worth individuals and institutional clients.
                  Individual investors relied on tips and speculation.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-light-gray rounded-full border-4 border-white md:-translate-x-1/2" />
              <div className="md:w-1/2 md:pl-12" />
            </div>

            {/* Present */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
              <div className="md:w-1/2 md:pr-12" />
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy rounded-full border-4 border-white md:-translate-x-1/2" />
              <div className="md:w-1/2 md:pl-12">
                <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-medium rounded-full mb-3">
                  Present
                </span>
                <h4 className="text-near-black mb-2">The Transitional Phase</h4>
                <p className="text-medium-gray text-sm">
                  SoundThesis is bridging the gap, making institutional-grade
                  research freely available while maintaining the highest
                  standards of quality and rigor.
                </p>
              </div>
            </div>

            {/* Future */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400 relative flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <span className="inline-block px-3 py-1 bg-maroon text-white text-xs font-medium rounded-full mb-3">
                  Future
                </span>
                <h4 className="text-near-black mb-2">The Democratized Era</h4>
                <p className="text-medium-gray text-sm">
                  Every investor in India has access to the same quality of
                  research that was once reserved for the elite. Informed
                  decision-making becomes the norm, not the exception.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-maroon rounded-full border-4 border-white md:-translate-x-1/2" />
              <div className="md:w-1/2 md:pl-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Research Methodology */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Our Research Methodology
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              A systematic approach that ensures consistency, transparency, and
              rigor in every piece of research we publish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((step, index) => (
              <div
                key={step.title}
                className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-near-black mb-2">{step.title}</h4>
                  <p className="text-medium-gray text-sm mb-4">
                    {step.description}
                  </p>
                  <div className="pt-4 border-t border-border-gray">
                    <span className="text-xs text-light-gray uppercase tracking-wider">
                      Tools
                    </span>
                    <p className="text-sm text-medium-gray mt-1">{step.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Team */}
      <section id="team" className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Meet Our Research Team
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Experienced professionals with backgrounds from top institutions
              and financial firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 group"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-brand shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-200">
                  <div className="aspect-[3/4] bg-gradient-to-br from-navy/20 to-navy/5 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-navy/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-navy">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-near-black mb-1">{member.name}</h4>
                    <p className="text-navy text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-medium-gray text-xs mb-3">
                      {member.credentials}
                    </p>
                    <div className="pt-3 border-t border-border-gray">
                      <span className="text-xs text-light-gray uppercase tracking-wider">
                        Focus
                      </span>
                      <p className="text-sm text-medium-gray mt-1">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Open-Source Commitment */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
                Our Open-Source Commitment
              </h2>
              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray mb-8">
                We're not just another research provider. We're building a
                movement to democratize financial knowledge in India.
              </p>

              <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      No Paywalls, Ever
                    </h4>
                    <p className="text-medium-gray text-sm">
                      All research is freely accessible. No subscriptions, no
                      premium tiers, no hidden costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Methodology Transparency
                    </h4>
                    <p className="text-medium-gray text-sm">
                      We disclose our data sources, analytical frameworks, and
                      potential conflicts of interest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Regular Updates
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Research is living documentation. We update our analysis
                      as markets evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300">
              <div className="bg-white rounded-brand shadow-card overflow-hidden">
                <div className="p-6 border-b border-border-gray">
                  <h4 className="text-near-black">Traditional vs. SoundThesis</h4>
                </div>
                <div className="divide-y divide-border-gray">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 items-center">
                      <span className="text-sm text-medium-gray">{item.feature}</span>
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-light-gray" />
                        <span className="text-sm text-light-gray line-through">
                          {item.traditional}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-navy" />
                        <span className="text-sm text-navy font-medium">
                          {item.soundthesis}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-white mb-4">
              Experience the Difference
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-white/80 mb-8">
              Start exploring our open-source research today. No registration
              required.
            </p>
            <Link
              to="/thesis-notes"
              className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-white text-navy text-sm font-semibold rounded-brand hover:bg-bg-light transition-all duration-200"
            >
              Explore Research
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhilosophyPage;
