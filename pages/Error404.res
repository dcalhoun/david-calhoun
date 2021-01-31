@react.component
let make = () => {
  <Layout>
    <SEO title="Page Not Found" />
    <section
      className="flex flex-1 flex-col items-center justify-center max-w-lg md:max-w-2xl mx-auto">
      <h1 className={Heading.Styles.primary}> {"404"->React.string} </h1>
      <h2 className={Heading.Styles.secondary ++ " mb-4 lg:mb-8"}>
        {"Page Not Found"->React.string}
      </h2>
      <Paragraph>
        {"The requested page does not exist. Try one of the navigation links at the top of the page."->React.string}
      </Paragraph>
    </section>
  </Layout>
}
