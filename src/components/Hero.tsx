import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container relative mx-auto grid max-w-screen-md py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <p className="w-full p-8 text-center text-lg text-muted-foreground border border-b-0 border-dashed">
        Hi, I'm
        <span className="pl-2 text-2xl text-primary leading-tight tracking-tighter">
          Abhay Vatoo 👋
        </span>
      </p>

      <h1 className="w-full p-6 grid text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] border border-dashed">
        building systems that
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 dark:from-purple-500 dark:to-cyan-500">
          customers love.
        </span>
      </h1>

      <div className="w-full p-8 grid text-center text-lg text-muted-foreground sm:text-xl border border-t-0 border-dashed">
        <p>
          a full-stack
          <span className="font-bold text-primary pl-1">
            software engineer
          </span>{" "}
          in Toronto 🇨🇦
        </p>
        <p className="max-w-[580px] m-auto">
          I build systems serving millions of users, seamlessly integrating
          front-end and back-end code for excellent user experiences.
        </p>

        <div className="flex justify-center">
          <Button asChild className="mt-12 w-48">
            <a href="mailto:abhay.vatoo@queensu.ca">
              <EnvelopeClosedIcon className="h-4 w-4 mr-2" />
              Connect with me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
