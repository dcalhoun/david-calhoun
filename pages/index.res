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
      {"Software Engineer at "->React.string}
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
      <div
        className="relative w-full text-gray-400 mb-6"
        style={ReactDOM.Style.make(
          ~backgroundImage="linear-gradient(to left, currentColor calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), currentColor calc(50% + 16px))",
          ~height="1px",
          (),
        )}>
        <div
          className="h-4 bg-gray-400 absolute transform rotate-12"
          style={ReactDOM.Style.make(
            ~left="calc(50% - 0.25rem)",
            ~top="calc(50% - 0.5rem)",
            ~width="1px",
            (),
          )}
        />
        <div
          className="h-4 bg-gray-400 absolute transform rotate-12"
          style={ReactDOM.Style.make(
            ~left="calc(50% + 0.25rem)",
            ~top="calc(50% - 0.5rem)",
            ~width="1px",
            (),
          )}
        />
      </div>
      <div className="grid gap-4 auto-cols-fr lg:grid-cols-2">
        {projects->Belt.List.length < 1
          ? <Paragraph className="italic text-center my-4">
              {"No projects to display."->React.string}
            </Paragraph>
          : projects
            ->Belt.List.toArray
            ->Belt.Array.map(project =>
              <article key=project.name>
                <a
                  className="block bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300 px-6 py-4 border border-gray-300"
                  href=project.href>
                  <h3 className={Heading.Styles.quaternary ++ " mb-2 text-blue-500"}>
                    {project.name->React.string}
                  </h3>
                  <p className="font-serif text-gray-800 text-sm lg:text-lg italic">
                    {project.description->React.string}
                  </p>
                </a>
              </article>
            )
            ->React.array}
      </div>
      <div
        className="relative w-full text-gray-400 mt-6 mb-6"
        style={ReactDOM.Style.make(
          ~backgroundImage="linear-gradient(to left, currentColor calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), currentColor calc(50% + 16px))",
          ~height="1px",
          (),
        )}>
        <div
          className="h-4 bg-gray-400 absolute transform rotate-12"
          style={ReactDOM.Style.make(
            ~left="calc(50% - 0.25rem)",
            ~top="calc(50% - 0.5rem)",
            ~width="1px",
            (),
          )}
        />
        <div
          className="h-4 bg-gray-400 absolute transform rotate-12"
          style={ReactDOM.Style.make(
            ~left="calc(50% + 0.25rem)",
            ~top="calc(50% - 0.5rem)",
            ~width="1px",
            (),
          )}
        />
      </div>
    </section>
  </Layout>
