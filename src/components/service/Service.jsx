import React from 'react'
import { useInView } from 'react-intersection-observer';
import './service.css'

export default function Service() {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });
      
  return (
    <section ref={ref} className={`services ${inView ? 'animate' : ''}`} id='service'>
        <h3>What I Do</h3>
        <div className="service-box">
            <div className="box">
                <img src="/kathy/ds.svg" alt="" />
                <h3>EMPOWER FINANCIAL SERVICES, INC.</h3>
                <p>2017 - Present(5 years)</p>
            </div>

            <div className="box">
                <img src="/kathy/ds.svg" alt="" />
                <h3>GWFS EQUITIES, INC.</h3>
                <p>2014 - 2015 (Less than 1 year)</p>
            </div>

            <div className="box">
                <img src="/kathy/invest.svg" alt="" />
                <h3>J.P. MORGAN INSTITUTIONAL INVESTMENTS INC. (CRD#:102920)</h3>
                <p>2003 - 2014 (10 years)</p>
            </div>
        </div>
    </section>
  )
}
