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
    <h1 className={Heading.Styles.primary ++ " mb-8 lg:mb-16"}>
      {SEO.siteDescription->React.string}
    </h1>
    <Paragraph className="mb-8 lg:mb-16">
      {"Currently at "->React.string}
      <TextButton href="https://automattic.com" external_=true>
        {"Automattic"->React.string}
      </TextButton>
      {". "->React.string}
      <br className="md:hidden" />
      {"Based in Nashville, TN."->React.string}
    </Paragraph>
    <section className="mb-8">
      <h2 className={Heading.Styles.tertiary ++ " text-center mb-4"}>
        {"Open Source Projects"->React.string}
      </h2>
      <div className="h-1 w-10 block bg-gray-400 mx-auto mb-4" />
      {projects->Belt.List.length < 1
        ? <Paragraph className="italic text-center my-4">
            {"No projects to display."->React.string}
          </Paragraph>
        : projects
          ->Belt.List.toArray
          ->Belt.Array.map(project =>
            <article key=project.name className="mb-4">
              <TextButton className="block pb-4" href=project.href external_=true>
                <h3 className={Heading.Styles.quaternary ++ " mb-2"}>
                  {project.name->React.string}
                </h3>
                <p className="text-sm lg:text-lg italic opacity-75">
                  {project.description->React.string}
                </p>
              </TextButton>
            </article>
          )
          ->React.array}
    </section>
  </Layout>
