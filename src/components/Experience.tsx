import {
  CalendarIcon,
  SewingPinIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const jobs = [
  {
    company: "Scotiabank",
    title: "Software Engineer",
    date: "June 2023 - Present",
    location: "Toronto, Canada",
    link: "https://www.scotiabank.com/ca/en/personal.html",
    description: [
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "Next.js",
      "Tailwind CSS",
      "Jest",
      "Cypress",
      "Testing Library",
    ],
  },
  {
    company: "abc",
    title: "Software Engineer",
    date: "June 2023 - June 2023",
    location: "Toronto, Canada",
    link: "https://www.scotiabank.com/ca/en/personal.html",
    description: [
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "Next.js",
      "Tailwind CSS",
      "Jest",
      "Cypress",
      "Testing Library",
    ],
  },
  {
    company: "xyz",
    title: "Software Engineer",
    date: "June 2023 - June 2023",
    location: "Toronto, Canada",
    link: "https://www.scotiabank.com/ca/en/personal.html",
    description: [
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "Next.js",
      "Tailwind CSS",
      "Jest",
      "Cypress",
      "Testing Library",
    ],
  },
] as const;

const OutsideLinkArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-4 w-4"
    aria-hidden="true"
  >
    <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
  </svg>
);

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-screen-lg md:pb-8 lg:pb-20"
    >
      <div className="w-full p-6 md:px-8 lg:px-10 font-bold text-xl md:text-2xl border-l border-b border-dashed">
        <h1>Experience</h1>
      </div>

      <div className="container relative">
        {jobs.map((job, idx) => (
          <div key={idx} className="flex justify-center">
            <div className="hidden lg:flex w-1/3 p-2 justify-center border-r border-dashed">
              <div className="inline-flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <p className="w-full text-muted-foreground">{job.date}</p>
              </div>
            </div>

            <div className="w-full pt-8 md:pl-8">
              <Card>
                <CardHeader className="pb-4">
                  <a target="_blank" href={job.link}>
                    <CardTitle className="flex tracking-tighter">
                      {job.title}
                      <DotFilledIcon className="h-4 w-4 m-1" />
                      {job.company} {OutsideLinkArrow}
                    </CardTitle>
                  </a>
                  <div className="flex items-center">
                    <SewingPinIcon className="h-4 w-4 mr-1" />
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                  <div className="lg:hidden">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <p className="text-sm text-muted-foreground">
                        {job.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="w-full ml-4 pr-4 list-disc [&>li]:mt-2">
                    {job.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-center">
                  <div className="max-w-screen-sm flex flex-wrap justify-center">
                    {job.skills.map((skill) => (
                      <Badge className="m-1" key={skill}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
}
