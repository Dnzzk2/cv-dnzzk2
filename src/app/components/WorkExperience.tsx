import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-xs font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section className="mb-8 print:mb-6">
      <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 print:text-xl">
        工作经历
      </h2>
      <div className="space-y-6 print:space-y-4">
        {work.map((item) => (
          <div key={item.company} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800 print:text-lg">
                {item.company}
              </h3>
              <span className="text-sm text-gray-500 print:text-xs">
                {item.start} - {item.end}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-700 print:text-base">
                {item.title}
              </h4>
              <div className="flex flex-wrap gap-1.5 print:hidden">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-base text-gray-600 print:text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
