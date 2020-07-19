[@bs.val] [@bs.scope ("process", "env")]
external nodeEnv: string = "NODE_ENV";

let siteTitle = "David Calhoun, Software Engineer";
let siteDescription = "David Calhoun is a software engineer with a passion for good UX design & scalable architecture.";
let siteOrigin =
  nodeEnv === "production"
    ? "https://davidcalhoun.me" : "http://localhost:3000";

[@react.component]
let make =
    (
      ~description: option(string)=?,
      ~image: option(string)=?,
      ~imageAlt: option(string)=?,
      ~imageHeight: option(string)=?,
      ~imageWidth: option(string)=?,
      ~title: option(string)=?,
    ) => {
  let router = Next.useRouter();
  let title =
    title->Belt.Option.mapWithDefault(siteTitle, title =>
      title ++ " | " ++ siteTitle
    );
  let description = description->Belt.Option.getWithDefault(siteDescription);

  <Next.Head>
    <title key="title"> title->React.string </title>
    <meta key="description" name="description" content=description />
    <meta key="og:description" property="og:description" content=description />
    <meta
      key="og:image:height"
      property="og:image:height"
      content={imageHeight->Belt.Option.getWithDefault("630")}
    />
    <meta
      key="og:image:width"
      property="og:image:width"
      content={imageWidth->Belt.Option.getWithDefault("1200")}
    />
    <meta
      key="og:image:alt"
      property="og:image:width"
      content={imageAlt->Belt.Option.getWithDefault("David Calhoun")}
    />
    <meta
      key="og:image"
      property="og:image"
      content={image->Belt.Option.getWithDefault(siteOrigin ++ "/david.jpg")}
    />
    <meta key="og:title" property="og:title" content=title />
    <meta key="og:type" property="og:type" content="website" />
    <meta
      key="og:url"
      property="og:url"
      content={siteOrigin ++ router.pathname}
    />
    <meta key="twitter:card" name="twitter:card" content="summary" />
    <meta
      key="twitter:creator"
      name="twitter:creator"
      content="@david_calhoun"
    />
    <meta
      key="twitter:description"
      name="twitter:description"
      content=description
    />
    <meta key="twitter:title" name="twitter:title" content=title />
  </Next.Head>;
};
