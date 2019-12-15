import React from "react";
import Project from "../components/Project";
import Layout from "../components/Layout";

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

const Home = () => (
  <Layout>
    <h1>
      Software engineer specializing in UX design & scalable front-end
      architecture.
    </h1>
    <h2>
      Currently at <a href="https://www.gonoodle.com">GoNoodle</a>. Based in
      Nashville, TN.
    </h2>
    <div>
      <h3>Open Source</h3>
      {projects.map((p, i) => (
        <a key={i} href={p.href}>
          <Project name={p.name} description={p.description} />
        </a>
      ))}
    </div>
  </Layout>
);

export default Home;
