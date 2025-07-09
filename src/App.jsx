import React from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import PostComponent from './components/PostComponent/PostComponent'
import granny_square from '../src/images/granny_square_pic.jpg'

function App() {
  return (
    <>
      <MainHeader/>
      <section className='main-post-section'>
        <PostComponent username={"dinozaurka"} post_desc={'Omg made my first granny square! I am so excited to begin my crochet journey with some kind of project! Please be kind :)'} title={"My first granny square!"} categories={['crocheting', 'creative']} img={granny_square}/>
        <PostComponent username={"bob"} post_desc={'Yippie love skating!'} categories={['crocheting', 'creative']} title={"Skating"}/>
        <PostComponent username={"bob"} post_desc={'Yippie love skating!'} categories={['crocheting', 'creative']} title={"Skating"}/>
        <PostComponent username={"dinozaurka"} post_desc={'Omg made my first granny square! I am so excited to begin my crochet journey with some kind of project! Please be kind :)'} title={"My first granny square!"} categories={['crocheting', 'creative']} img={granny_square}/>
        <PostComponent username={"bob"} post_desc={'Yippie love skating!'} categories={['sports', 'skating', 'dangerous']} title={"Skating"}/>
            
      </section>
      </>
  )
}

export default App
