import Analytics from '../containers/Analytics'
import BlogPost from '../components/BlogPost'
import DarkMode from '../containers/DarkMode'
import Head from 'next/head'
import Layout from '../components/Layout'

export default props => {
  const post = require(`../.content/posts/${props.url.query.slug}.json`)

  return (
    <Analytics>
      <DarkMode>
        <Layout title={`${post.title}`}>
          <Head>
            <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Alegreya:400,400italic,700&amp;subset=latin' media='all' />
          </Head>
          <BlogPost post={post} />
        </Layout>
      </DarkMode>
    </Analytics>
  )
}
