import React from 'react'
import { useInView } from 'react-intersection-observer';
import './trading.css';

export default function Trading() {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });
      
  return (
    <section ref={ref} className={`trade ${inView ? 'animate' : ''}`} id='why'>
    <div className="trade-h3">
        <h3>
            Trading Expert
        </h3>
        <div className="wrap">
            <div className="trade-img">
                <img src="/kathy/trade.jpg" alt="" />
            </div>
            <div className="trade-cry">
                <img src="/kathy/btc.jpg" alt="" />
                <img src="/kathy/eth.jpg" alt="" />
                <img src="/kathy/lit.jpg" alt="" />
                <img src="/kathy/bnb.jpg" alt="" />
                <img src="/kathy/doge.jpg" alt="" />
                <img src="/kathy/sol.jpg" alt="" />
            </div>
        </div>    
    </div>
   </section>
  )
}
