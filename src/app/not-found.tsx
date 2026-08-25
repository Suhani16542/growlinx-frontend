import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-28 text-center bg-[#070b14]">
      <Container size="small">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20">
          404 Error
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-300">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="gradient" size="md">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
