import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className="mb-8 print:mb-6">
      <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 print:text-xl">
        专业技能
      </h2>
      <div className="space-y-4 text-base text-gray-600 print:text-sm">
        {summary}
      </div>
    </Section>
  );
}
