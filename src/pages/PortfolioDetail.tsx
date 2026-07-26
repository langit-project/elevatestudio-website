import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { ElevateButton } from "@/components/shared/ElevateButton";
import { allProjects, categories, IMAGE_SIZES } from "@/data/portfolio";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/portfolio" replace />;

  const categoryName = categories.find((c) => c.id === project.category)?.name;

  return (
    <div className="pt-24 min-h-screen bg-primary-white container mx-auto px-[5%] py-16">
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary-black/70 hover:text-primary-black font-bold uppercase text-xs tracking-widest mb-12 transition-colors">
        <ChevronLeft className="size-4" /> Back to Portfolio
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="aspect-[4/5] bg-dark-accent/5 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="size-full object-cover"
            width={IMAGE_SIZES.detail.w}
            height={IMAGE_SIZES.detail.h}
          />
        </div>
        <div className="lg:sticky lg:top-32">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 text-primary-black leading-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-accent-yellow/20 text-primary-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{categoryName}</span>
            <span className="bg-primary-black/5 text-primary-black/70 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">2026</span>
          </div>

          <div className="space-y-10 text-primary-black/80">
            <section>
              <h3 className="text-sm font-black text-primary-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-yellow"></span> The Challenge
              </h3>
              <p className="text-lg leading-relaxed">Developing a consistent visual narrative for a brand that needed to stand out in a crowded digital space. They lacked a cohesive identity across their video content and social media presence.</p>
            </section>
            <section>
              <h3 className="text-sm font-black text-primary-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-yellow"></span> Our Solution
              </h3>
              <p className="text-lg leading-relaxed">We created a series of high-impact visual assets including cinematography-focused brand videos and dynamic motion graphics. We established a visual guideline that ensures every piece of content feels part of the same story.</p>
            </section>
            <section>
              <h3 className="text-sm font-black text-primary-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-yellow"></span> The Impact
              </h3>
              <p className="text-lg leading-relaxed font-medium text-primary-black">The campaign led to a 40% increase in social media engagement and a 25% growth in brand recognition within the first quarter of implementation.</p>
            </section>
          </div>

          <div className="mt-16 pt-10 border-t border-primary-black/10">
            <ElevateButton variant="primary" size="lg" className="group">
              Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </ElevateButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
