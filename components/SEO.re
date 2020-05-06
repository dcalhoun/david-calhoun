[@bs.val] [@bs.scope ("process", "env")]
external nodeEnv: string = "NODE_ENV";

module Site = {
  let title = "David Calhoun, Software Engineer";
  let description = "David Calhoun is a software engineer with a passion for good UX design & scalable architecture.";
  let origin =
    nodeEnv === "production"
      ? "https://davidcalhoun.me" : "http://localhost:3000";
};

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
  // TODO: Fix Next router Hook usage
  // let router = useRouter();

  let title = {
    switch (title) {
    | Some(pageTitle) => pageTitle ++ " | " ++ Site.title
    | None => Site.title
    };
  };

  let description = {
    switch (description) {
    | Some(description) => description
    | None => Site.description
    };
  };

  let imageHeight = {
    switch (imageHeight) {
    | Some(imageHeight) => imageHeight
    | None => "630"
    };
  };
  let imageWidth = {
    switch (imageWidth) {
    | Some(imageWidth) => imageWidth
    | None => "1200"
    };
  };
  let imageAlt = {
    switch (imageAlt) {
    | Some(imageAlt) => imageAlt
    | None => "David Calhoun"
    };
  };
  let image = {
    switch (image) {
    | Some(image) => image
    | None => Site.origin ++ "/david.jpg"
    };
  };

  <Next.Head>
    <title key="title"> {React.string(title)} </title>
    <meta key="description" name="description" content=description />
    <meta key="og:description" property="og:description" content=description />
    <meta
      key="og:image:height"
      property="og:image:height"
      content=imageHeight
    />
    <meta key="og:image:width" property="og:image:width" content=imageWidth />
    <meta key="og:image:alt" property="og:image:width" content=imageAlt />
    <meta key="og:image" property="og:image" content=image />
    <meta key="og:title" property="og:title" content=title />
    <meta key="og:type" property="og:type" content="website" />
    // <meta
    //   key="og:url"
    //   property="og:url"
    //   content={Site.origin ++ router.route}
    // />
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
