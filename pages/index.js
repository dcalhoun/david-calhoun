import React from "react";
import Layout from "../components/Layout";
import TextButton from "../components/TextButton";
import SEO, { SITE_DESCRIPTION } from "../components/SEO";

export default function Index() {
  return (
    <Layout disableContentPadding>
      <SEO />
      <div className="px-4">
        <h1 className="text-2xl lg:text-6xl font-bold leading-tight my-16">
          {SITE_DESCRIPTION}
        </h1>
        <p className="text-md mb-16">
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
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-xs lg:text-base text-center tracking-widest font-medium uppercase">
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
          <div className="p-4">
            <h4 className="font-mono text-md lg:text-lg mb-2">{p.name}</h4>
            <p className="text-sm lg:text-lg italic opacity-75">
              {p.description}
            </p>
          </div>
        </TextButton>
      ))}
    </Layout>
  );
}

let projects = [
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
