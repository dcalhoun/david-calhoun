import Analytics from '../containers/Analytics'
import BlogPost from '../components/BlogPost'
import DarkMode from '../containers/DarkMode'
import Head from 'next/head'
import Layout from '../components/Layout'

export default props => {
  const post = require(`../.content/${props.url.query.slug}.json`)

  return (
    <Analytics>
      <DarkMode>
        <Layout title={`${post.title}`}>
          <Head>
            <link
              href='//fonts.googleapis.com/css?family=Fira+Sans:400,400i,700'
              media='all'
              rel='stylesheet'
            />
          </Head>
          <BlogPost post={post} />
        </Layout>
      </DarkMode>
    </Analytics>
  )
}
