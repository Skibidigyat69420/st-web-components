import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Unlock,
  GitBranch,
  Building2,
  Scale,
  Eye,
  Users,
  ArrowRight,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Search,
  FileText,
  PieChart,
} from 'lucide-react';
import { researchPapers, valuePropositions } from '@/data/research';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Unlock: <Unlock className="w-6 h-6" />,
      GitBranch: <GitBranch className="w-6 h-6" />,
      Building2: <Building2 className="w-6 h-6" />,
      Scale: <Scale className="w-6 h-6" />,
      Eye: <Eye className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
    };
    return icons[iconName] || <FileText className="w-6 h-6" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <main className="pt-16">
      {/* Section 1: Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-brand relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              <span className="inline-block px-4 py-2 bg-navy/10 text-navy text-sm font-medium rounded-full mb-6">
                India's Premier Research House
              </span>
            </div>
            <h1 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-near-black mb-6">
              Democratizing
              <br />
              <span className="text-navy">Institutional-Grade</span>
              <br />
              Research
            </h1>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-lg md:text-xl text-medium-gray mb-8 max-w-xl">
              SoundThesis makes premium financial research—once exclusive to
              ultra-high-net-worth investors—accessible to every serious
              investor in India.
            </p>
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 flex flex-col sm:flex-row gap-4">
              <Link to="/thesis-notes" className="btn-primary">
                Explore Open Research
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Research-Driven Wealth Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-10">
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-500 space-y-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-brand shadow-card p-6 animate-float">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-navy" />
                <span className="text-sm text-medium-gray">Research Papers</span>
              </div>
              <p className="text-3xl font-bold text-near-black">120+</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-brand shadow-card p-6 animate-float animation-delay-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-navy" />
                <span className="text-sm text-medium-gray">Investors Served</span>
              </div>
              <p className="text-3xl font-bold text-near-black">5,000+</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-brand shadow-card p-6 animate-float animation-delay-400">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-navy" />
                <span className="text-sm text-medium-gray">AUM Advised</span>
              </div>
              <p className="text-3xl font-bold text-near-black">₹500Cr+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The SoundThesis Difference */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              The SoundThesis Difference
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Six principles that define our approach to research and wealth
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {valuePropositions.map((prop, index) => (
              <div
                key={prop.id}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="card h-full group">
                  <div className="w-12 h-12 rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4 group-hover:bg-navy group-hover:text-white transition-all duration-200">
                    {getIcon(prop.icon)}
                  </div>
                  <h4 className="text-near-black mb-2">{prop.title}</h4>
                  <p className="text-medium-gray text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Live Research Preview */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
                Latest From Our Research Desk
              </h2>
              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
                Fresh insights published weekly. All research is freely
                accessible with no registration required.
              </p>
            </div>
            <Link
              to="/thesis-notes"
              className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 inline-flex items-center text-navy font-medium mt-4 md:mt-0 hover:underline"
            >
              View All Research
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {researchPapers.slice(0, 3).map((paper, index) => (
              <article
                key={paper.id}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600 bg-white rounded-brand shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-navy font-semibold text-sm">
                    {formatDate(paper.date)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-light-gray" />
                  <span className="text-light-gray text-sm">
                    {paper.readTime}
                  </span>
                </div>
                <h4 className="text-near-black mb-3 line-clamp-2">
                  {paper.title}
                </h4>
                <p className="text-medium-gray text-sm mb-4 line-clamp-2">
                  {paper.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {paper.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/thesis-notes/${paper.id}`}
                    className="text-navy text-sm font-medium hover:underline flex items-center"
                  >
                    Read Free
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Research Impact Visualizer */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              How Research Informs Decisions
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Our wealth services simply apply this research to your portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-navy/10 flex items-center justify-center">
                  <Search className="w-8 h-8 text-navy" />
                </div>
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-border-gray">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border-gray rotate-45" />
                </div>
              </div>
              <h4 className="text-near-black mb-2">Research</h4>
              <p className="text-medium-gray text-sm">
                Systematic data collection and analysis across asset classes and
                market conditions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-navy/10 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-navy" />
                </div>
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-border-gray">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border-gray rotate-45" />
                </div>
              </div>
              <h4 className="text-near-black mb-2">Analysis</h4>
              <p className="text-medium-gray text-sm">
                Rigorous evaluation using institutional frameworks and
                peer-reviewed methodologies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-navy/10 flex items-center justify-center">
                  <PieChart className="w-8 h-8 text-navy" />
                </div>
              </div>
              <h4 className="text-near-black mb-2">Portfolio Construction</h4>
              <p className="text-medium-gray text-sm">
                Research-driven allocation and selection tailored to your
                specific goals and risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Philosophy Preview */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-near-black leading-tight mb-6">
                "Research should be a public good, not a private advantage."
              </blockquote>
              <p className="text-medium-gray mb-8">
                This belief drives everything we do at SoundThesis. We believe
                that high-quality financial research shouldn't be locked behind
                paywalls or reserved for the ultra-wealthy.
              </p>
              <Link to="/philosophy" className="btn-primary">
                Read Our Philosophy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-brand shadow-card p-6">
                  <p className="text-4xl font-bold text-navy mb-2">120+</p>
                  <p className="text-medium-gray text-sm">
                    Research Papers Published
                  </p>
                </div>
                <div className="bg-white rounded-brand shadow-card p-6">
                  <p className="text-4xl font-bold text-navy mb-2">50K+</p>
                  <p className="text-medium-gray text-sm">
                    Monthly Downloads
                  </p>
                </div>
                <div className="bg-white rounded-brand shadow-card p-6">
                  <p className="text-4xl font-bold text-navy mb-2">15+</p>
                  <p className="text-medium-gray text-sm">
                    Research Analysts
                  </p>
                </div>
                <div className="bg-white rounded-brand shadow-card p-6">
                  <p className="text-4xl font-bold text-navy mb-2">0</p>
                  <p className="text-medium-gray text-sm">
                    Paywalls or Subscriptions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Bridge */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 max-w-3xl mx-auto text-center">
            <h2 className="text-near-black mb-4">
              Ready to Access Institutional Research?
            </h2>
            <p className="text-medium-gray mb-8 max-w-xl mx-auto">
              Join thousands of investors who rely on SoundThesis for
              systematic, transparent, and accessible financial research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/thesis-notes" className="btn-primary">
                Browse All Research
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Schedule Research Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
