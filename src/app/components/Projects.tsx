import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";
import { ArrowUpRight } from "lucide-react";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="mb-8 print:mb-6">
      <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 print:text-xl">
        其他项目
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 print:text-base">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link.href}
                  className="text-gray-500 hover:text-gray-700 print:hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-base text-gray-600 print:text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 print:hidden">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
