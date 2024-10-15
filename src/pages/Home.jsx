import React from 'react';
import Hero from '../components/hero/Hero';
import Support from '../components/support/Support';
import About from '../components/about/About';
import Service from '../components/service/Service';
import Why from '../components/why/Why';
import Trading from '../components/trading/Trading';
import Review from '../components/reviews/Review';
import Form from '../components/contact/Form';
import Footer from '../components/footer/Footer';
import './Home.css'; // Import your Home component CSS if you have one

export default function Home() {
  return (
    <div>
      <Hero />
      <Support />
      <About />
      <Service />
      <Why />
      <Trading />
      <Review />
      <Form />
      <Footer/>

      {/* WhatsApp icon fixed at the bottom right */}
      <div className="whatsapp-icon">
        <a

          href="https://wa.me/+1 (332) 258-5790"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src="/kathy/wp.svg" alt="" srcset="" />
        </a>
      </div>
    </div>
  );
}
