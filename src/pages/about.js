import React from 'react';
import Section1 from '../components/section1';
import Section4WhyUs from '../components/section4_why_us';
import Footer from '../components/footer'
function About({language}) {
  
  return (
    <div>
      <Section1 language={language} start={0} endTeam={48} endCustomers={130} />
      <Section4WhyUs language={language} />
      <Footer language={language}/>
    </div>
  );
}

export default About;



