import React from 'react'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './review.css'

export default function Review() {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
  return (
    <section ref={ref} className={`review ${inView ? 'animate' : ''}`} id='review'>
        <h3>
            What Our Client Says
        </h3>
       <div className="card-box">
            <div ref={ref} className={`cards ${inView ? 'animate' : ''}`}>
                <div className="star">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="test">
                    "Evelyn Jonathn has been a financial source of joy these past months. 
                    watching her deal with financial markets on my behalf gives me 
                    great relief as have become used to her home immense profits."
                </div>
                <div className="rev-img">
                    <img src="./kathy/pic1 (1).jpg" alt="" />
                    <div className="nn">
                        <p className='fe'>Josh M . Rita</p>
                        <p>Marketing Manager</p>
                    </div>
                </div>
            </div>

            <div ref={ref} className={`cards ${inView ? 'animate' : ''}`}>
                <div className="star">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="test">
                    "i actually thought she wold handle the whole process, 
                     and just update me once it's time to receive profit. she dragged
                     me in slowly to the point where i found myself following up the 
                     marktet"
                </div>
                <div className="rev-img">
                    <img src="./kathy/pic1 (3).jpg" alt="" />
                    <div className="nn">
                        <p className='fe'>Clarice Hill</p>
                        <p>Comic Writer</p>
                    </div>
                </div>
            </div>

            <div ref={ref} className={`cards ${inView ? 'animate' : ''}`}>
                <div className="star">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="test">
                    "Evelyn is really amazing and trustworthy.
                    she came into my family when we were having sucha a tumultous
                    financial period and she helped managed all of our financial short comings, 
                    one step at a time."
                </div>
                <div className="rev-img">
                    <img src="./kathy/pic1 (4).jpg" alt="" />
                    <div className="nn">
                        <p className='fe'>Rosa Delgadillo</p>
                        <p>Blogger</p>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}
