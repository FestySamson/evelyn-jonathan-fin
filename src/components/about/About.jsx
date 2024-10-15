import React from 'react'
import { useInView } from 'react-intersection-observer';
import './about.css'

export default function About() {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    const  cV = 'cv.pdf'
  return (
    <section ref={ref} className={`About ${inView ? 'animate' : ''}`} id='about'>
    <div className="abt-img">
        <img src="/kathy/pic1 (2).jpg" alt="" className='abtImg' />
        <div className="items">
            <div className="item1">
                <img src="/kathy/trade.svg" alt="" />
                <div className="ye">
                    <h3>
                        17
                    </h3>
                    <p>Years of Experience</p>
                </div>
            </div>

            <div className="item1">
                <img src="/kathy/pro.svg" alt="" />
                <div className="ye">
                    <h3>
                        200
                    </h3>
                    <p>completed projects</p>
                </div>
            </div>
        </div>
    </div>
    <div className="abt-text">
        <h4>
            About Me
        </h4>
        <h1>
            Discover the world of <br /> Financial Planner
        </h1>
        <p>I have over 17 years of experience with trading consistently and investing in the stock markets successfully. Reach out to me for full consultation & financial guidance.</p>
        <div className="dwo">
           <a download={cV} href="/kathy/cv.pdf">Download Cv</a>
        </div>
    </div>
   </section>
  )
}
