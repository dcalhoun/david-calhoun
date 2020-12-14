@react.component
let make = (~children) => <>
  <Next.Head> <meta name="viewport" content="initial-scale=1.0, width=device-width" /> </Next.Head>
  <div className="sr-only focus-within:not-sr-only">
    <a
      className="SkipToContent inline-block border-solid rounded-lg m-2 p-4 absolute z-10"
      href="#content">
      {"Skip to content"->React.string}
    </a>
  </div>
  <div className="Layout min-h-screen p-2 lg:p-4 flex flex-col">
    <div className="Layout-content px-4 pt-8 flex-1">
      <nav className="text-center text-lg mb-8">
        <Next.Link href="/" passHref=true>
          <TextButton className="mx-2"> {"About"->React.string} </TextButton>
        </Next.Link>
        <Next.Link href="/writing" passHref=true>
          <TextButton className="mx-2"> {"Writing"->React.string} </TextButton>
        </Next.Link>
        <TextButton className="mx-2" href="https://twitter.com/david_calhoun" external_=true>
          {"Twitter"->React.string}
        </TextButton>
        <TextButton className="mx-2" href="https://github.com/dcalhoun" external_=true>
          {"GitHub"->React.string}
        </TextButton>
      </nav>
      <main className="max-w-md lg:max-w-4xl m-auto" id="content"> children </main>
    </div>
  </div>
</>
