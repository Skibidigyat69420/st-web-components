import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  X,
  TrendingUp,
  BarChart3,
  Eye,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  Building2,
  Users,
  FileCheck,
  FileText,
} from 'lucide-react';
import { caseStudies, testimonials } from '@/data/research';

const WhyUsPage = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const researchAdvantages = [
    {
      icon: BarChart3,
      title: 'Depth',
      description:
        'Institutional methodologies applied to Indian markets. Every analysis follows rigorous, repeatable frameworks.',
    },
    {
      icon: TrendingUp,
      title: 'Breadth',
      description:
        'Cross-asset coverage spanning equity, debt, alternatives, and structured products.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'Open-source access with full disclosure of methods, data sources, and potential conflicts.',
    },
    {
      icon: Briefcase,
      title: 'Application',
      description:
        'Research directly informs portfolio construction through our wealth management services.',
    },
  ];

  const credentials = [
    { icon: Award, label: 'SEBI Registered', value: 'INA000012345' },
    { icon: Users, label: 'Research Analysts', value: '15+' },
    { icon: FileCheck, label: 'Papers Published', value: '120+' },
    { icon: Building2, label: 'Data Partners', value: '8+' },
  ];

  const nextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="pt-16">
      {/* Section 1: Problem Statement */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 inline-block px-4 py-2 bg-navy/10 text-navy text-sm font-medium rounded-full mb-6">
              Why SoundThesis
            </span>
            <h1 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-near-black mb-4">
              The Problem We're Solving
            </h1>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-medium-gray">
              For too long, quality financial research has been a privilege of
              the wealthy. We're changing that.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Model */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 bg-bg-light rounded-brand p-8">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-6 h-6 text-light-gray" />
                <h3 className="text-near-black">Traditional Model</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-light-gray flex-shrink-0 mt-0.5" />
                  <span className="text-medium-gray">
                    Research locked behind expensive paywalls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-light-gray flex-shrink-0 mt-0.5" />
                  <span className="text-medium-gray">
                    Minimum investment requirements of ₹1 crore or more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-light-gray flex-shrink-0 mt-0.5" />
                  <span className="text-medium-gray">
                    Opaque methodologies and hidden conflicts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-light-gray flex-shrink-0 mt-0.5" />
                  <span className="text-medium-gray">
                    Generic advice not tailored to individual needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-light-gray flex-shrink-0 mt-0.5" />
                  <span className="text-medium-gray">
                    High fees that eat into returns
                  </span>
                </li>
              </ul>
            </div>

            {/* SoundThesis Model */}
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400 bg-navy rounded-brand p-8">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-6 h-6 text-white" />
                <h3 className="text-white">SoundThesis Model</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Open-source research, freely accessible to all
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    No minimum investment barriers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Full transparency in methods and disclosures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Personalized research application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Clear, straightforward fee structure
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Research Advantage Grid */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              The Research Advantage
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Four pillars that define our approach to investment research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {researchAdvantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-brand shadow-card p-8 h-full hover:shadow-card-hover transition-all duration-200">
                  <div className="w-14 h-14 rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4">
                    <advantage.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-near-black mb-3">{advantage.title}</h4>
                  <p className="text-medium-gray text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Case Studies */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Research in Action
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Real examples of how our research informs portfolio decisions and
              drives outcomes.
            </p>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 max-w-4xl mx-auto">
            <div className="bg-white rounded-brand shadow-card overflow-hidden">
              {/* Case Study Navigation */}
              <div className="flex items-center justify-between p-6 border-b border-border-gray">
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCaseStudy(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        activeCaseStudy === index
                          ? 'bg-navy'
                          : 'bg-border-gray hover:bg-light-gray'
                      }`}
                      aria-label={`Go to case study ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCaseStudy}
                    className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center hover:bg-bg-light transition-colors"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextCaseStudy}
                    className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center hover:bg-bg-light transition-colors"
                    aria-label="Next case study"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full mb-4">
                      Case Study {activeCaseStudy + 1} of {caseStudies.length}
                    </span>
                    <h3 className="text-near-black mb-6">
                      {caseStudies[activeCaseStudy].title}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-near-black mb-2">
                          Challenge
                        </h4>
                        <p className="text-medium-gray text-sm">
                          {caseStudies[activeCaseStudy].challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-near-black mb-2">
                          Research Applied
                        </h4>
                        <p className="text-medium-gray text-sm">
                          {caseStudies[activeCaseStudy].research}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-near-black mb-2">
                          Outcome
                        </h4>
                        <p className="text-medium-gray text-sm">
                          {caseStudies[activeCaseStudy].outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-bg-light rounded-brand p-6 flex flex-col items-center justify-center text-center">
                    <TrendingUp className="w-12 h-12 text-navy mb-4" />
                    <p className="text-4xl font-bold text-navy mb-2">
                      {caseStudies[activeCaseStudy].metric.split(' ')[0]}
                    </p>
                    <p className="text-medium-gray text-sm">
                      {caseStudies[activeCaseStudy].metric
                        .split(' ')
                        .slice(1)
                        .join(' ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Credibility Indicators */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Our Credentials
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Built on a foundation of regulatory compliance, experienced
              professionals, and trusted partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {credentials.map((cred, index) => (
              <div
                key={cred.label}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600 bg-white rounded-brand shadow-card p-6 text-center`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4">
                  <cred.icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold text-navy mb-1">
                  {cred.value}
                </p>
                <p className="text-medium-gray text-sm">{cred.label}</p>
              </div>
            ))}
          </div>

          {/* Data Partners */}
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-500 max-w-4xl mx-auto">
            <h4 className="text-center text-near-black mb-6">
              Trusted Data Partners
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Bloomberg',
                'CRISIL',
                'AMFI',
                'NSE',
                'BSE',
                'Morningstar',
                'Value Research',
                'Ace Equity',
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-white rounded-brand px-6 py-3 shadow-sm"
                >
                  <span className="text-medium-gray font-medium">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials (Maroon Background) */}
      <section className="section bg-maroon">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-white/80">
              Hear from investors who have transformed their approach with
              SoundThesis research.
            </p>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 max-w-3xl mx-auto">
            <div className="relative">
              {/* Testimonial Content */}
              <div className="text-center">
                <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="text-white font-semibold">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-white/70 text-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-white/50 text-sm">
                    {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        activeTestimonial === index
                          ? 'bg-white w-6'
                          : 'bg-white/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Spectrum */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Ready to Get Started?
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Choose the path that best fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200">
              <div className="bg-bg-light rounded-brand p-8 h-full text-center hover:shadow-card transition-all duration-200">
                <div className="w-14 h-14 mx-auto rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4">
                  <FileText className="w-7 h-7" />
                </div>
                <h4 className="text-near-black mb-2">Just Research</h4>
                <p className="text-medium-gray text-sm mb-6">
                  Explore our complete research library with no registration
                  required.
                </p>
                <Link to="/thesis-notes" className="btn-primary w-full">
                  Browse Research
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300">
              <div className="bg-navy rounded-brand p-8 h-full text-center hover:shadow-card transition-all duration-200">
                <div className="w-14 h-14 mx-auto rounded-brand bg-white/10 flex items-center justify-center text-white mb-4">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h4 className="text-white mb-2">Research + Implementation</h4>
                <p className="text-white/80 text-sm mb-6">
                  Get personalized recommendations based on our research.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center w-full min-h-[44px] px-6 py-3 bg-white text-navy text-sm font-semibold rounded-brand hover:bg-bg-light transition-all duration-200"
                >
                  View Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400">
              <div className="bg-bg-light rounded-brand p-8 h-full text-center hover:shadow-card transition-all duration-200">
                <div className="w-14 h-14 mx-auto rounded-brand bg-navy/10 flex items-center justify-center text-navy mb-4">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h4 className="text-near-black mb-2">Learn Our Methodology</h4>
                <p className="text-medium-gray text-sm mb-6">
                  Understand the principles behind our research process.
                </p>
                <Link to="/philosophy" className="btn-secondary w-full">
                  Our Philosophy
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUsPage;
