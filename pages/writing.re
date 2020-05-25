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
    <ul>
      {posts
       ->Belt.Array.map(postData =>
           <li key={postData.title}>
             <Heading.H2>
               <Next.Link href={postData.path} passHref=true>
                 <TextButton className="lg:text-4xl">
                   {React.string(postData.title)}
                 </TextButton>
               </Next.Link>
             </Heading.H2>
             <Heading.H4>
               <FormattedDate dateString={postData.published} />
             </Heading.H4>
           </li>
         )
       ->React.array}
    </ul>
  </Layout>;
};
