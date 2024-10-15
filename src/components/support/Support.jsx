import React from 'react';
import { useInView } from 'react-intersection-observer';
import './support.css';

const Support = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`support ${inView ? 'animate' : ''}`} id='support'>
      <div className="card">
        <img src="/kathy/svg (1).svg" alt="" />
        <h3>Innovative Solutions</h3>
        <p>"Your Financial Partner in Innovation. Tailored solutions, expert advice, and forward-thinking strategies for your unique financial goals."</p>
      </div>
      <div className="card special">
        <img src="/kathy/svg (4).svg" alt="" />
        <h3>Financial Trust</h3>
        <p>"Financial Trust: Your path to prosperity begins with us. Expert guidance, transparent solutions, and a commitment to your success. Your trusted ally in finance."</p>
      </div>
      <div className="card">
        <img src="/kathy/svg (3).svg" alt="" />
        <h3>24/7 Support</h3>
        <p>" Day or night, we're here for you. Your financial peace of mind is our priority with round-the-clock assistance.</p>
      </div>
    </div>
  );
};

export default Support;
