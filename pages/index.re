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
    <Heading className={Heading.Styles.primary ++ " mb-8 lg:mb-16"}>
      {React.string(SEO.siteDescription)}
    </Heading>
    <Paragraph className=" mb-8 lg:mb-16">
      {React.string("Currently at ")}
      <TextButton href="https://www.gonoodle.com" external_=true>
        {React.string("GoNoodle")}
      </TextButton>
      {React.string(". ")}
      <br className="md:hidden" />
      {React.string("Based in Nashville, TN.")}
    </Paragraph>
    <div className="text-center">
      <Heading
        level=2
        className={
          Heading.Styles.tertiary
          ++ " text-center tracking-widest font-medium uppercase"
        }>
        {React.string("Open Source")}
      </Heading>
      <span className="h-1 w-10 inline-block bg-gray-400" />
    </div>
    <div className="mb-8">
      {projects->Belt.List.length < 1
         ? <Paragraph className="italic text-center my-4">
             {React.string("No projects to display.")}
           </Paragraph>
         : projects
           ->Belt.List.toArray
           ->Belt.Array.map(project =>
               <TextButton
                 className="block"
                 key={project.name}
                 href={project.href}
                 external_=true>
                 <div className="py-4">
                   <Heading
                     level=3 className={Heading.Styles.quaternary ++ " mb-2"}>
                     {React.string(project.name)}
                   </Heading>
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
