import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FilterTabs } from "@/components/shared/FilterTabs";
import { categories, allProjects } from "@/data/portfolio";

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-primary-white container mx-auto px-[5%] py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 text-primary-black">
          Portfolios
        </h1>
        <FilterTabs
          options={categories}
          activeId={activeCategory}
          onChange={(id) => setSearchParams({ category: id })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            to={`/portfolio/${project.slug}`}
            key={project.id}
            className="aspect-[4/5] bg-dark-accent/5 rounded-lg flex items-center justify-center border border-primary-black/5 transition-all duration-500 group cursor-pointer overflow-hidden relative shadow-sm hover:border-accent-yellow hover:shadow-xl focus-visible:border-accent-yellow focus-visible:shadow-xl focus-visible:outline-none"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 size-full object-cover transition-all duration-700 scale-105 group-hover:scale-110 group-focus-visible:scale-110"
            />
            <div className="absolute inset-0 bg-primary-black/60 opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center text-primary-white p-8 text-center group-hover:opacity-100 group-focus-visible:opacity-100">
              <h3 className="text-2xl font-bold uppercase mb-3 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-accent-yellow mb-6 transition-opacity duration-700 delay-100 group-hover:opacity-100 group-focus-visible:opacity-100">
                {categories.find((c) => c.id === project.category)?.name}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter border-b border-accent-yellow pb-1 transition-opacity duration-700 delay-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                View Project <ArrowRight className="size-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
