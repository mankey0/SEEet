import React from 'react';
import Banner from '../components/banner';
import Section1 from '../components/section1';
import Section2Tabs from '../components/section2_tabs';
import Section3Prevention from '../components/section3_Prevention';
import Section4WhyUs from '../components/section4_why_us';
import Section6Asks from '../components/section6_asks';
import Section7TeamWork from '../components/section7_team_work';
import Section8Opinions from '../components/section8_opinions';
import Section9Slider from '../components/section9_slider';
import Footer from '../components/footer';
function Home({ language }) {



  
  return (
    <div>
      <Banner language={language} />  
      <Section1 language={language} start={0} endTeam={48} endCustomers={130} />
      <Section2Tabs language={language} />
      <Section3Prevention language={language} />
      <Section4WhyUs language={language} />
      <Section6Asks language={language} />
      <Section7TeamWork language={language} />
      <Section8Opinions language={language} />
      <Section9Slider />
      <Footer language={language} />
    </div>
  );
}

export default Home;






