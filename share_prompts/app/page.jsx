import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md\:hidden" />
        {/*<br />*/}
        <span className="orange_gradient text-center">Ai powered prompts</span>
      </h1>
      <p className="desc text_center">
      An effective AI art prompt should include specific descriptions,
        shapes, colors, textures, patterns, and artistic styles.
      </p>
      < Feed /> 
    </section>
  )
}

export default Home