import React from 'react'

import './hero.css'

export default function Hero() {


  return (
    <section className='Hero' id='hero'>
      <div className="Hero-img">
        <img src="/kathy/pic1 (2).jpg" alt="" />
      </div>
      <div className="Hero-text">
          <>
          <button className='hello'>Hello I'm</button>
          <h3 className='name'>Evelyn Jonathan Financials</h3>
          <p className='des'>I have over 17 years of experience with trading consistently and investing in the stock markets successfully. Reach out to me for full consultation & financial guidance.</p>
          <>
           <div>
              <a href="#contact-me" className='contact-me'>Contact Me</a>
           </div>
          </>
          </>
      </div>
    </section>
  )
}
