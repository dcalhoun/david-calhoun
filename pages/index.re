type project = {
  description: string,
  href: string,
  name: string,
};

let projects: list(project) = [
  {
    description: "Summon your Hyper windows with a system-wide hotkey.",
    href: "https://github.com/soutar/hyperterm-summon",
    name: "hyperterm-summon",
  },
  {
    description: "A Yeoman generator for prototyping and building experiences.",
    href: "https://github.com/centresource/generator-playbook",
    name: "generator-playbook",
  },
  {
    description: "Configure Clubhouse to respond to GitHub events by specific users.",
    href: "https://github.com/dcalhoun/github-to-clubhouse",
    name: "github-to-clubhouse",
  },
  {
    description: "CLI to convert AMD CoffeeScript to ES6 Standard JavaScript.",
    href: "https://github.com/dcalhoun/es6-migrate",
    name: "es6-migrate",
  },
  {
    description: "Selectively remove PostCSS warnings from your logs.",
    href: "https://github.com/dcalhoun/postcss-warn-cleaner",
    name: "postcss-warn-cleaner",
  },
  {
    description: "Immutable, CSS margin utilities.",
    href: "https://github.com/dcalhoun/css-utils-margin",
    name: "css-utils-margin",
  },
  {
    description: "Immutable, CSS padding utilities.",
    href: "https://github.com/dcalhoun/css-utils-padding",
    name: "css-utils-padding",
  },
];

[@react.component]
let default = () => {
  <Layout>
    <SEO />
    <h1 className="text-2xl lg:text-6xl font-bold leading-tight my-16">
      {React.string(SEO.siteDescription)}
    </h1>
    <p className="text-lg mb-16">
      {React.string("Currently at ")}
      <TextButton href="https://www.gonoodle.com" external_=true>
        {React.string("GoNoodle")}
      </TextButton>
      {React.string(".")}
      <br className="md:hidden" />
      {React.string("Based in Nashville, TN.")}
    </p>
    <div className="text-center">
      <h2
        className="text-xs lg:text-base text-center tracking-widest font-medium uppercase">
        {React.string("Open Source")}
      </h2>
      <span className="h-1 w-10 inline-block bg-gray-400" />
    </div>
    <div className="mb-8">
      {projects
       ->Belt.List.toArray
       ->Belt.Array.map(project =>
           <TextButton
             className="block"
             key={project.name}
             href={project.href}
             external_=true>
             <div className="py-4">
               <h3 className="font-mono text-md lg:text-lg mb-2">
                 {React.string(project.name)}
               </h3>
               <p className="text-sm lg:text-lg italic opacity-75">
                 {React.string(project.description)}
               </p>
             </div>
           </TextButton>
         )
       ->React.array}
    </div>
  </Layout>;
};
