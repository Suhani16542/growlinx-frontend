import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-28 text-center">
      <Container size="small">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          404 Error
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="gradient" size="md">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
