import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Download,
  FileText,
  BarChart3,
  TrendingUp,
  PieChart,
  Layers,
  ChevronRight,
  Clock,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { researchPapers, researchCategories } from '@/data/research';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ThesisNotesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

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
      PieChart: <PieChart className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      BarChart3: <BarChart3 className="w-6 h-6" />,
      Layers: <Layers className="w-6 h-6" />,
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

  const filteredPapers = researchPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesComplexity =
      selectedComplexity === 'all' || paper.complexity === selectedComplexity;
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  const featuredPapers = researchPapers.slice(0, 3);

  return (
    <main className="pt-16">
      {/* Section 1: Research Library Header */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 inline-block px-4 py-2 bg-navy/10 text-navy text-sm font-medium rounded-full mb-6">
              Research Library
            </span>
            <h1 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-near-black mb-4">
              Thesis Notes
            </h1>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 text-medium-gray">
              Institutional-grade research on Indian markets, freely accessible
              to all investors.
            </p>
          </div>

          {/* Stats */}
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-bg-light rounded-brand p-6 text-center">
              <p className="text-3xl font-bold text-navy mb-1">120+</p>
              <p className="text-medium-gray text-sm">Research Papers</p>
            </div>
            <div className="bg-bg-light rounded-brand p-6 text-center">
              <p className="text-3xl font-bold text-navy mb-1">Daily</p>
              <p className="text-medium-gray text-sm">Updates</p>
            </div>
            <div className="bg-bg-light rounded-brand p-6 text-center">
              <p className="text-3xl font-bold text-navy mb-1">50K+</p>
              <p className="text-medium-gray text-sm">Monthly Downloads</p>
            </div>
            <div className="bg-bg-light rounded-brand p-6 text-center">
              <p className="text-3xl font-bold text-navy mb-1">0</p>
              <p className="text-medium-gray text-sm">Paywalls</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-400 bg-bg-light rounded-brand p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
                <Input
                  type="text"
                  placeholder="Search research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-border-gray"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-border-gray">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Equity Research">Equity Research</SelectItem>
                  <SelectItem value="Fixed Income">Fixed Income</SelectItem>
                  <SelectItem value="PMS Analysis">PMS Analysis</SelectItem>
                  <SelectItem value="AIF Research">AIF Research</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Asset Allocation">Asset Allocation</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={selectedComplexity}
                onValueChange={setSelectedComplexity}
              >
                <SelectTrigger className="bg-white border-border-gray">
                  <SelectValue placeholder="Complexity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white border-border-gray">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="title">Title A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Research */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="flex items-center justify-between mb-8">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black">
              Featured Research
            </h2>
            <Link
              to="#"
              className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 inline-flex items-center text-navy font-medium hover:underline"
            >
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPapers.map((paper, index) => (
              <article
                key={paper.id}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600 bg-white rounded-brand shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-200`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-navy/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-navy text-sm font-medium">
                      {paper.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-light-gray" />
                    <span className="text-light-gray text-sm">
                      {paper.complexity}
                    </span>
                  </div>
                  <h4 className="text-near-black mb-3 line-clamp-2">
                    {paper.title}
                  </h4>
                  <p className="text-medium-gray text-sm mb-4 line-clamp-2">
                    {paper.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-light-gray text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(paper.date)}
                    </div>
                    <button className="inline-flex items-center text-navy text-sm font-medium hover:underline">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Research Grid */}
      <section className="section bg-white">
        <div className="container-brand">
          <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-8">
            All Research Papers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPapers.map((paper, index) => (
              <article
                key={paper.id}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600 bg-white rounded-brand shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-navy text-sm font-medium">
                    {formatDate(paper.date)}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      paper.complexity === 'Beginner'
                        ? 'bg-green-100 text-green-700'
                        : paper.complexity === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {paper.complexity}
                  </span>
                </div>
                <h4 className="text-near-black mb-3 line-clamp-2">
                  {paper.title}
                </h4>
                <p className="text-medium-gray text-sm mb-4 line-clamp-2">
                  {paper.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border-gray">
                  <div className="flex items-center gap-2 text-light-gray text-sm">
                    <Clock className="w-4 h-4" />
                    {paper.readTime}
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-navy text-sm font-medium hover:underline flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                    <Link
                      to={`/thesis-notes/${paper.id}`}
                      className="text-navy text-sm font-medium hover:underline flex items-center"
                    >
                      Read
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {sortedPapers.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-border-gray mx-auto mb-4" />
              <h4 className="text-near-black mb-2">No papers found</h4>
              <p className="text-medium-gray">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Research Categories */}
      <section className="section bg-bg-light">
        <div className="container-brand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
              Specialized Research Hubs
            </h2>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray">
              Deep dives into specific asset classes and investment vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCategories.map((category, index) => (
              <div
                key={category.id}
                className={`scroll-reveal opacity-0 translate-y-5 transition-all duration-600`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-brand shadow-card p-8 hover:shadow-card-hover transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-brand bg-navy/10 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-200">
                      {getIcon(category.icon)}
                    </div>
                    <span className="text-3xl font-bold text-navy">
                      {category.paperCount}
                    </span>
                  </div>
                  <h4 className="text-near-black mb-2">{category.title}</h4>
                  <p className="text-medium-gray text-sm mb-4">
                    {category.description}
                  </p>
                  <Link
                    to={`/thesis-notes#${category.id}`}
                    className="inline-flex items-center text-navy text-sm font-medium hover:underline"
                  >
                    Browse Papers
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Methodology Transparency */}
      <section className="section bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 text-near-black mb-4">
                How We Research
              </h2>
              <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-100 text-medium-gray mb-8">
                Transparency is at the core of everything we do. Here's how we
                ensure the quality and integrity of our research.
              </p>

              <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-200 space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Data Sources
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Bloomberg, CRISIL, AMFI, NSE/BSE, RBI, and directly from
                      AMCs for fund-level data.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Analysis Framework
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Quantitative models built in Python and R, combined with
                      qualitative assessment by experienced analysts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Quality Control
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Multi-level review process: analyst → senior analyst →
                      research director before publication.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-near-black font-medium mb-1">
                      Continuous Updates
                    </h4>
                    <p className="text-medium-gray text-sm">
                      Research is living documentation. We update ratings and
                      analysis as new data becomes available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600 delay-300">
              <div className="bg-bg-light rounded-brand p-8">
                <h4 className="text-near-black mb-6">Data Partners</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Bloomberg',
                    'CRISIL',
                    'AMFI',
                    'NSE',
                    'BSE',
                    'RBI',
                    'SEBI',
                    'Morningstar',
                  ].map((partner) => (
                    <div
                      key={partner}
                      className="bg-white rounded-brand p-4 text-center"
                    >
                      <span className="text-medium-gray font-medium">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThesisNotesPage;
