type article = {
  description: string,
  path: string,
  published: string,
  title: string,
};

// Must rely upon a JavaScript file until ESM default exports are supported.
// https://github.com/BuckleScript/bucklescript/issues/2113
[@bs.module "../utils/articles"]
external articles: array(article) = "default";

[@react.component]
let default = () => {
  <Layout>
    <SEO
      title="Writing"
      description="Thoughts and explorations of David Calhoun."
    />
    <h1 className={Heading.Styles.primary ++ " mb-4"}>
      {React.string("Writing")}
    </h1>
    {articles->Belt.Array.length < 1
       ? <Paragraph className="italic text-center">
           {React.string("No articles to display.")}
         </Paragraph>
       : articles
         ->Belt.Array.map(articleData =>
             <article key={articleData.title}>
               <h2 className=Heading.Styles.secondary>
                 <Next.Link href={articleData.path} passHref=true>
                   <TextButton className="lg:text-4xl">
                     {React.string(articleData.title)}
                   </TextButton>
                 </Next.Link>
               </h2>
               <FormattedDate dateString={articleData.published} />
             </article>
           )
         ->React.array}
  </Layout>;
};
