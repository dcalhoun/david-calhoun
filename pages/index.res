type project = {
  description: string,
  href: string,
  name: string,
}

let projects: list<project> = list{
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
}

@react.component
let default = () =>
  <Layout>
    <SEO />
    <h1 className={Heading.Styles.primary ++ " mb-8 md:mb-16"}>
      {SEO.siteDescription->React.string}
    </h1>
    <Paragraph style={ReactDOM.Style.make(~margin="0", ())}>
      {"Software Engineer at "->React.string}
      <TextButton href="https://automattic.com"> {"Automattic"->React.string} </TextButton>
      {". "->React.string}
      <br className="md:hidden" />
      {"Based in Nashville, TN."->React.string}
    </Paragraph>
    <Hr />
    <section className="mb-8">
      <h2 className={Heading.Styles.tertiary ++ " text-center mb-4"}>
        {"Open Source Projects"->React.string}
      </h2>
      <div className="grid gap-4 auto-rows-fr md:grid-cols-2">
        {projects->Belt.List.length < 1
          ? <Paragraph className="italic text-center my-4">
              {"No projects to display."->React.string}
            </Paragraph>
          : projects
            ->Belt.List.toArray
            ->Belt.Array.map(project =>
              <a
                className="block bg-white dark:bg-gray-700 rounded hover:shadow-lg transition-shadow duration-300 px-6 py-4 border border-gray-300 dark:border-gray-900"
                href=project.href
                key=project.name>
                <h3
                  className={Heading.Styles.quaternary ++ " mb-2 text-blue-500 dark:text-blue-400"}>
                  {project.name->React.string}
                </h3>
                <p
                  className="font-serif text-gray-600 dark:text-gray-300 text-sm md:text-lg italic">
                  {project.description->React.string}
                </p>
              </a>
            )
            ->React.array}
      </div>
    </section>
  </Layout>
