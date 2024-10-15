import React from 'react'
import { useInView } from 'react-intersection-observer';
import './why.css'


export default function Why() {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });

  return (
    <>
        <section ref={ref} className={`why ${inView ? 'animate' : ''}`} id='why'>
        <h3>
            My Examinations
        </h3>
        <div className="why-box">
            <div className="box1">
                <h4>Series 63 - State Securities Law Exam</h4>
                <h5>2003</h5>
                <p>Uniform Securities Agent State Law Examination | May 28, 2003</p>
            </div>

            <div className="box1">
                <h4>SIE - General Industry/Products Exam</h4>
                <h5>2018</h5>
                <p>Securities Industry Essentials Examination | Sep 30, 2018</p>
            </div>

            <div className="box1">
                <h4>Series 7 - General Industry/Products Exam</h4>
                <h5>2004</h5>
                <p>General Securities Representative Examination | Mar 28, 2004</p>
            </div>

            <div className="box1">
                <h4>Series 6 - General Industry/Products Exam</h4>
                <h5>2003</h5>
                <p>Investment Company Products/Variable Contracts Representative Examination | May 21, 2003</p>
            </div>

            <div className="box1">
                <h4>Series 26 - Principal/Supervisory Exam</h4>
                <h5>2023</h5>
                <p>Investment Company Products/Variable Contracts Representative Examination | Jan 1, 2023</p>
            </div>

            <div className="box1">
                <h4>Series 24 - Principal/Supervisory Exam</h4>
                <h5>2006</h5>
                <p>Investment Company Products/Variable Contracts Representative Examination | Sep 4, 2006</p>
            </div>
        </div>

        
    </section>
    <div className="why2">
        <div className="why2-img">
            <img src="/kathy/pic1 (2).jpg" alt="" />
        </div>
        <div className="why2-text">
            <h3>EVelyn Jonathan Financial</h3>
            <h1>I PROVIDE PREMIUM FINANCIAL SERVICES</h1>
            <p>I have a stellar track record of meeting & exceeding the financial targets of my numerous clients, I will invest my time and substantial experience in making sure you succeed financially.</p>
            <div className="de">
                <p>SRO REGISTRATIONS</p>
                <a href="#hero">FINRA</a> 
            </div>
        </div>
    </div>
    </>    
  )
}
