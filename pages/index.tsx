import React from "react";
import Layout from "../components/Layout";
import TextButton from "../components/TextButton";
import SEO, { SITE_DESCRIPTION } from "../components/SEO";
import { NextPage } from "next";

interface Project {
  description: string;
  href: string;
  name: string;
}

let projects: Project[] = [
  {
    description: "Summon your Hyper windows with a system-wide hotkey.",
    href: "https://github.com/soutar/hyperterm-summon",
    name: "hyperterm-summon"
  },
  {
    description: "A Yeoman generator for prototyping and building experiences.",
    href: "https://github.com/centresource/generator-playbook",
    name: "generator-playbook"
  },
  {
    description:
      "Configure Clubhouse to respond to GitHub events by specific users.",
    href: "https://github.com/dcalhoun/github-to-clubhouse",
    name: "github-to-clubhouse"
  },
  {
    description: "CLI to convert AMD CoffeeScript to ES6 Standard JavaScript.",
    href: "https://github.com/dcalhoun/es6-migrate",
    name: "es6-migrate"
  },
  {
    description: "Selectively remove PostCSS warnings from your logs.",
    href: "https://github.com/dcalhoun/postcss-warn-cleaner",
    name: "postcss-warn-cleaner"
  },
  {
    description: "Immutable, CSS margin utilities.",
    href: "https://github.com/dcalhoun/css-utils-margin",
    name: "css-utils-margin"
  },
  {
    description: "Immutable, CSS padding utilities.",
    href: "https://github.com/dcalhoun/css-utils-padding",
    name: "css-utils-padding"
  }
];

let Index: NextPage = () => {
  return (
    <Layout disableContentPadding>
      <SEO />
      <div className="px-4">
        <h1 className="text-2xl lg:text-6xl font-bold leading-tight my-16">
          {SITE_DESCRIPTION}
        </h1>
        <p className="text-lg mb-16">
          Currently at{" "}
          <TextButton href="https://www.gonoodle.com" external>
            GoNoodle
          </TextButton>
          . <br className="md:hidden" />
          Based in Nashville, TN.
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-xs lg:text-base text-center tracking-widest font-medium uppercase">
          Open Source
        </h3>
        <span className="h-1 w-10 inline-block bg-gray-400" />
      </div>
      <div className="lg:mb-8">
        {projects.map((project: Project, index: number) => (
          <TextButton
            className="block"
            key={index}
            href={project.href}
            external
          >
            <div className="p-4">
              <h4 className="font-mono text-md lg:text-lg mb-2">
                {project.name}
              </h4>
              <p className="text-sm lg:text-lg italic opacity-75">
                {project.description}
              </p>
            </div>
          </TextButton>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
