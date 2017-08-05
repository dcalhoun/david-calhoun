import BlogPost from '../components/BlogPost'
import DarkMode from '../containers/DarkMode'
import Head from 'next/head'
import Layout from '../components/Layout'
import Theme from '../containers/Theme'

export default props => {
  const post = require(`../.posts/posts/${props.url.query.slug}.json`)

  return (
    <DarkMode>
      <Theme>
        {(background, color, onClick) => (
          <Layout background={background} color={color} onClick={onClick} title={`${post.title}`}>
            <Head>
              <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Alegreya:400,400italic,700&amp;subset=latin' media='all' />
            </Head>
            <BlogPost
              background={background}
              color={color}
              onClick={onClick}
              post={post}
            />
          </Layout>
        )}
      </Theme>
    </DarkMode>
  )
}
