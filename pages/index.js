import React from "react";
import Project from "../components/Project";
import Layout from "../components/Layout";
import TextButton from "../components/TextButton";

export default () => (
  <Layout disableContentPadding>
    <div className="px-4">
      <h1 className="text-2xl text-gray-800 italic leading-snug my-16">
        David Calhoun is a software engineer specializing in UX design &
        scalable front-end architecture.
      </h1>
      <h2 className="text-md text-gray-700 mb-16">
        Currently at{" "}
        <TextButton
          href="https://www.gonoodle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GoNoodle
        </TextButton>
        . <br className="md:hidden" />
        Based in Nashville, TN.
      </h2>
    </div>
    <div className="text-center">
      <h3 className="text-xs text-center text-gray-800 tracking-widest font-medium uppercase">
        Open Source
      </h3>
      <span className="h-1 w-10 inline-block bg-gray-400" />
    </div>
    {projects.map((p, i) => (
      <TextButton
        className="block"
        key={i}
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Project name={p.name} description={p.description} />
      </TextButton>
    ))}
  </Layout>
);

const projects = [
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
