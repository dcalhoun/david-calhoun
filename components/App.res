type pageProps = {.}

type props = {
  @bs.as("Component")
  component: React.component<pageProps>,
  pageProps: pageProps,
}

let make = (props: props) => {
  let router = Next.useRouter()

  React.useEffect0(() => {
    let handleRouteChange = pagePath =>
      Gtag.sendPageView(
        ~pageViewParams={
          page_title: None,
          page_path: Some(pagePath),
          page_location: None,
        },
      )

    router.events.on(#routeChangeComplete, handleRouteChange)

    Some(() => router.events.off(#routeChangeComplete, handleRouteChange))
  })

  let {component, pageProps} = props
  React.createElement(component, pageProps)
}
