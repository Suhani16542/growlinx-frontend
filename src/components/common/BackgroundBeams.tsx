import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
  showDots?: boolean;
}

export function BackgroundBeams({
  className,
  intensity = "medium",
  showDots = true,
}: BackgroundBeamsProps) {
  const intensityMap = {
    low: "opacity-40",
    medium: "opacity-70",
    high: "opacity-90",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none -z-10",
        intensityMap[intensity],
        className
      )}
    >
      {/* Primary Electric Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full bg-blue-600/20 blur-[130px] animate-pulse-slow" />

      {/* Secondary Violet Accent Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] rounded-full bg-purple-600/15 blur-[120px] animate-float-slow" />

      {/* Cyan Bottom Glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] rounded-full bg-cyan-500/10 blur-[140px] animate-float-reverse" />

      {/* Light particle points */}
      {showDots && (
        <>
          <div className="absolute top-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_#38bdf8] animate-pulse" />
          <div className="absolute top-[45%] right-[20%] h-1 w-1 rounded-full bg-purple-400/70 shadow-[0_0_8px_#c084fc] animate-pulse [animation-delay:1.5s]" />
          <div className="absolute top-[70%] left-[30%] h-1.5 w-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_8px_#00f0ff] animate-pulse [animation-delay:2.5s]" />
          <div className="absolute top-[35%] left-[80%] h-1 w-1 rounded-full bg-blue-300/60 shadow-[0_0_6px_#93c5fd] animate-pulse [animation-delay:3.2s]" />
        </>
      )}
    </div>
  );
}
