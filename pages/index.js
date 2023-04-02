import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Content lives here, by myself, ChatGPT, and others where allowed</h1>

        <p className="description">
          This is a simple blog built to house content from conversations with{' '}
          <a href="https://chat.openai.com">ChatGPT</a>.
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          You can look at the repository for this project{' '}
          <a href="https://github.com/10E-4m2/netlify-gists-page/">
            here
          </a>
          , and a tutorial on how it was originally built {` `}
          <a href="https://url.netlify.com/ByVW0bCF8">here</a>.
        </p>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.\/.*\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
