import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Search, Share2, Video, Target, Sparkles, Layers, Globe } from "lucide-react";

export function TrustedPlatforms() {
  const platforms = [
    { name: "Google", category: "Search & Maps", icon: Search },
    { name: "Instagram", category: "Reels & Stories", icon: Share2 },
    { name: "Facebook", category: "Feed & Groups", icon: Globe },
    { name: "YouTube", category: "Video & Shorts", icon: Video },
    { name: "LinkedIn", category: "B2B & Professional", icon: Layers },
    { name: "Google Ads", category: "Search & PMax", icon: Target },
    { name: "Meta Ads", category: "Targeted Paid Media", icon: Sparkles },
  ];

  return (
    <section className="border-y border-slate-800/80 bg-[#050811]/90 py-12 sm:py-16 relative overflow-hidden">
      <Container>
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Where Your Customers Spend Their Time
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Growlinx brings your digital marketing channels together into one focused growth strategy.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Platform Strip */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
          <div className="animate-ticker flex items-center gap-6 sm:gap-8">
            {[...platforms, ...platforms, ...platforms].map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-3 text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white shrink-0 group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {platform.name}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      {platform.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
