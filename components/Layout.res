@react.component
let make = (~children) => {
  <>
    <Next.Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Next.Head>
    <div className="sr-only focus-within:not-sr-only">
      <TextButton
        className="inline-block font-sans font-semibold bg-white dark:bg-gray-900 rounded-lg m-2 p-4 absolute z-10"
        href="#content">
        {"Skip to content"->React.string}
      </TextButton>
    </div>
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen p-2 md:p-4 flex flex-col">
      <div className="bg-white dark:bg-gray-800 px-4 pt-8 flex flex-col flex-1">
        <nav className="font-semibold text-center text-md mb-8">
          <Next.Link href="/" passHref=true>
            <TextButton className="mx-2 md:text-xl"> {"About"->React.string} </TextButton>
          </Next.Link>
          <Next.Link href="/writing" passHref=true>
            <TextButton className="mx-2 md:text-xl"> {"Writing"->React.string} </TextButton>
          </Next.Link>
          <TextButton className="mx-2 md:text-xl" href="https://twitter.com/david_calhoun">
            {"Twitter"->React.string}
          </TextButton>
          <TextButton className="mx-2 md:text-xl" href="https://github.com/dcalhoun">
            {"GitHub"->React.string}
          </TextButton>
        </nav>
        <main className="content flex flex-1 flex-col items-stretch mx-auto" id="content">
          children
        </main>
      </div>
    </div>
  </>
}
