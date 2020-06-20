type post = {
  description: string,
  path: string,
  published: string,
  title: string,
};

[@bs.module "../utils/posts"] external posts: array(post) = "default";

[@react.component]
let default = () => {
  <Layout>
    <SEO
      title="Writing"
      description="Thoughts and explorations of David Calhoun."
    />
    <Heading className={Heading.Styles.primary ++ " mb-4"}>
      {React.string("Writing")}
    </Heading>
    {posts->Belt.Array.length < 1
       ? <Paragraph className="italic text-center">
           {React.string("No posts to display.")}
         </Paragraph>
       : posts
         ->Belt.Array.map(postData =>
             <article key={postData.title}>
               <Heading className=Heading.Styles.secondary level=2>
                 <Next.Link href={postData.path} passHref=true>
                   <TextButton className="lg:text-4xl">
                     {React.string(postData.title)}
                   </TextButton>
                 </Next.Link>
               </Heading>
               <FormattedDate dateString={postData.published} />
             </article>
           )
         ->React.array}
  </Layout>;
};
