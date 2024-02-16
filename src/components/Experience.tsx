import {
  CalendarIcon,
  SewingPinIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { jobs } from "@/constants/jobs";

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
                <CalendarIcon className="h-4 w-4 mr-2" />
                <p className="w-full text-muted-foreground">{job.date}</p>
              </div>
            </div>

            <div className="w-full pt-8 md:pl-8">
              <Card className="bg-secondary">
                <CardHeader className="pb-4">
                  <CardTitle className="flex content-start text-lg tracking-tighter">
                    {job.title}
                  </CardTitle>

                  <div className="flex items-center">
                    <BackpackIcon className="h-4 w-4 mr-2" />
                    <a target="_blank" href={job.link}>
                      {job.company} {OutsideLinkArrow}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <SewingPinIcon className="h-4 w-4 mr-2" />
                    <p className="text-sm">{job.location}</p>
                  </div>

                  <div className="lg:hidden">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <p className="text-sm">{job.date}</p>
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
                      <Tile key={skill} title={skill} />
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

function Tile({ title }: { title: string }) {
  return (
    <div className="p-2 m-2 border rounded-xl bg-secondary-foreground">
      <p className="text-sm text-secondary">{title}</p>
    </div>
  );
}
