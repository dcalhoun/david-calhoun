@react.component
let make = (~children) => {
  <>
    <Next.Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Next.Head>
    <div className="sr-only focus-within:not-sr-only">
      <a
        className="inline-block font-sans font-semibold text-gray-700 bg-white dark:bg-gray-900 rounded-lg m-2 p-4 absolute z-10"
        href="#content">
        {"Skip to content"->React.string}
      </a>
    </div>
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen p-2 md:p-4 flex flex-col">
      <div className="bg-white dark:bg-gray-800 px-4 pt-8 flex-1">
        <nav className="font-semibold text-center text-md mb-8">
          <Next.Link href="/" passHref=true>
            <NavItem className="mx-2"> {"About"->React.string} </NavItem>
          </Next.Link>
          <Next.Link href="/writing" passHref=true>
            <NavItem className="mx-2"> {"Writing"->React.string} </NavItem>
          </Next.Link>
          <NavItem className="mx-2" href="https://twitter.com/david_calhoun">
            {"Twitter"->React.string}
          </NavItem>
          <NavItem className="mx-2" href="https://github.com/dcalhoun">
            {"GitHub"->React.string}
          </NavItem>
        </nav>
        <main className="content m-auto" id="content"> children </main>
      </div>
    </div>
  </>
}
