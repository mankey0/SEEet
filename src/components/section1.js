import React, { useState, useRef } from 'react';
import Img_Use_us from '../assets/team.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Section1 = ({ start = 0, endTeam, endCustomers, language }) => {
  const [teamValue, setTeamValue] = useState(start);
  const [customerValue, setCustomerValue] = useState(start);

  const [hasTeamStarted, setHasTeamStarted] = useState(false);
  const [hasCustomerStarted, setHasCustomerStarted] = useState(false);

  const [isFeature1Expanded, setIsFeature1Expanded] = useState(false);
  const [isFeature2Expanded, setIsFeature2Expanded] = useState(false);

  const teamRef = useRef(start);
  const teamCounter = endTeam / 200;
  const teamCount = () => {
    if (teamRef.current < endTeam) {
      const result = Math.ceil(teamRef.current + teamCounter);
      if (result > endTeam) return setTeamValue(endTeam);
      setTeamValue(result);
      teamRef.current = result;
      setTimeout(teamCount, 70);
    }
  };

  const customerRef = useRef(start);
  const customerCounter = endCustomers / 200;
  const customerCount = () => {
    if (customerRef.current < endCustomers) {
      const result = Math.ceil(customerRef.current + customerCounter);
      if (result > endCustomers) return setCustomerValue(endCustomers);
      setCustomerValue(result);
      customerRef.current = result;
      setTimeout(customerCount, 70);
    }
  };

  const texts = {
    en: {
      small_caption: "Company Features",
      title: 'Who are we ?',


      feature1: 'At Seet Saudia , we care deeply about our customers, communities, and employees. With every interaction with our team, ',
      extrafeateure1: "our mission is to solve pest problems and provide you with a clean home or business free of pests or disease-causing germs.",


      feature2: 'With our dedication to 5-star service and our ability to solve difficult pest problems, we started Seet Saudia for environmental solutions,',
      extra1feateure2: "pest control, rodent control, disinfection, and fumigation, to provide consumers with the blessing of a pest-free life in a safe, effective, and comfortable way!",


      feature3: 'At seet Saudia , we understand that pests are a nuisance! They invade your premises continuously and systematically in search of food, water, shelter, ',
      extrafeateure3: " and the right temperature. Once inside your home or business premises, they pose serious health risks to you and your",
      extra2feateure3: " family and can damage your most valuable investments. (Insects are our game).",


      feature4: 'All our pesticides comply with European quality standards and are completely safe for the health of all family members,',
      extrafeateure4: "establishments, and commercial and industrial entities. Complete capability to combat all types of insects safely and quickly.",
      extra2feateure4: "Pesticides are safe for the family’s health and comply with European quality standards. Specialized teams, highly trained, and exceptionally skilled.",


      teamText: 'Our Team',
      customerText: 'Satisfied Customers',
    },
    ar: {
      small_caption: "مميزات الشركة",
      title: 'من نحن',


      feature1: "في صيت للسعودية ، نهتم بعملائنا ومجتمعاتنا وموظفينا. مع كل تفاعل مع فريقنا ، تتمثل مهمتنا في حل مشكلات الآفات وتزويدك بمنزل أو شركة نظيفة",
      extrafeateure1: "خالية من الآفات أو الجراثيم المسببة للأمراض.",


      feature2: "مع تفانينا في خدمة 5 نجوم وقدرتنا على حل مشاكل الآفات الصعبة ، بدأنا صيت السعودية للحلول البيئية ومكافحة الحشرات والقوارض والتطهير والتبخير ,",
      extra1feateure2: "لتزويد المستهلكين بنعمة الحياة الخالية من الآفات بطريقة آمنة وفعالة ومريحة!",


      feature3: "في صيت للسعودية ، نفهم أن الآفات مصدر إزعاج! إنهم يغزون منشآتك بشكل مستمر ومنهجي بحثًا عن الطعام والماء والمأوى ودرجة الحرارة المناسبة.",
      extrafeateure3: "بمجرد أن تكون داخل المنزل أو المنشأة التجارية أو الصناعية ، فإنها تشكل مخاطر صحية جسيمة لك ولعائلتك",
      extra2feateure3: "ويمكن أن تلحق الضرر باستثماراتك الأكثر قيمة. ( الحشرات لعبتنا)",


      feature4: "جميع المبيدات لدينا مطابقة لمواصفات الجودة الاوروبية وآمنة تماماً علي صحة جميع افراد الاسرة والمنشئات والهيئات التجارية والصناعية",
      extrafeateure4: "القدرة الكاملة علي مكافحة جميع انواع الحشرات بشكل آمن وسريع مبيدات آمنه علي صحة الاسرة ومطابقة",
      extra2feateure4: "لمواصفات الجودة الاوروبية فرق عمل متخصصة مدربة علي أعلي مستوي وعلي قدر كبير من المهارة",


      teamText: 'فريقنا',
      customerText: 'العملاء الراضين',
    },
  };


  const textVariants = {
    hiddenLeft: { x: "-100%", opacity: 0 },
    hiddenRight: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exitLeft: { x: "-100%", opacity: 0, transition: { duration: 0.8 } },
    exitRight: { x: "100%", opacity: 0, transition: { duration: 0.8 } },
  };


  const currentTexts = texts[language];




  const [feature3Index, setFeature3Index] = useState(0);
  const feature3Texts = [
    { text: currentTexts.feature3 },
    { text: currentTexts.extrafeateure3 },
    { text: currentTexts.extra2feateure3 }
  ];

  const handleNextClickFeature3 = () => {
    if (feature3Index < feature3Texts.length - 1) {
      setFeature3Index((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousClickFeature3 = () => {
    if (feature3Index > 0) {
      setFeature3Index((prevIndex) => prevIndex - 1);
    }
  };

  const [feature4Index, setFeature4Index] = useState(0);
  const feature4Texts = [
    { text: currentTexts.feature4 },
    { text: currentTexts.extrafeateure4 },
    { text: currentTexts.extra2feateure4 }
  ];

  const handleNextClickFeature4 = () => {
    if (feature4Index < feature4Texts.length - 1) {
      setFeature4Index((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousClickFeature4 = () => {
    if (feature4Index > 0) {
      setFeature4Index((prevIndex) => prevIndex - 1);
    }
  };


  return (
    <div className={`section-1 row m-0 ${language === 'ar' ? 'rtl' : 'ltr'}`} id="section1">
      <div className='section_1_all col-md-11'>
        <div className='section_1_content col-md-7'>
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {currentTexts.small_caption}
          </motion.span>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='title'
          >
            {currentTexts.title}
          </motion.h1>
          <div className='content-cacption-cards col-md-12'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="everycard m-2 col-xl-5 col-md-10 col-11"
            >
              <div className="card">
                <div className="card-body">
                  <div className="text-container">
                    <AnimatePresence initial={false} custom={isFeature1Expanded}>
                      {isFeature1Expanded ? (
                        <motion.p
                          key="extrafeateure1"
                          variants={textVariants}
                          initial="hiddenRight"
                          animate="visible"
                          exit="exitLeft"
                          className="card-text"
                        >
                          {currentTexts.extrafeateure1}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="feature1"
                          variants={textVariants}
                          initial="hiddenLeft"
                          animate="visible"
                          exit="exitRight"
                          className="card-text"
                        >
                          {currentTexts.feature1}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="d-flex justify-content-between">

                    <a
                      href="#s"
                      className="card-link"
                      onClick={() => setIsFeature1Expanded(true)}  // السهم الأيمن يعرض النص التالي
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleRight size={24} />
                    </a>
                    <a
                      href="#s"
                      className="card-link"
                      onClick={() => setIsFeature1Expanded(false)}  // السهم الأيسر يعرض النص السابق
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleLeft size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="everycard m-2 col-xl-5 col-md-10 col-11"
            >
              <div className="card">
                <div className="card-body">
                  <div className="text-container">
                    <AnimatePresence initial={false} custom={isFeature2Expanded}>
                      {isFeature2Expanded ? (
                        <motion.p
                          key="extra1feateure2"
                          variants={textVariants}
                          initial="hiddenRight"
                          animate="visible"
                          exit="exitLeft"
                          className="card-text"
                        >
                          {currentTexts.extra1feateure2}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="feature2"
                          variants={textVariants}
                          initial="hiddenLeft"
                          animate="visible"
                          exit="exitRight"
                          className="card-text"
                        >
                          {currentTexts.feature2}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="d-flex justify-content-between">

                    <a
                      href="#s"
                      className="card-link"
                      onClick={() => setIsFeature2Expanded(true)}  // السهم الأيمن يعرض النص التالي
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleRight size={24} />
                    </a>
                    <a
                      href="#s"
                      className="card-link"
                      onClick={() => setIsFeature2Expanded(false)}  // السهم الأيسر يعرض النص السابق
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleLeft size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="everycard m-2 col-xl-5 col-md-10 col-11"
            >
              <div className="card">
                <div className="card-body">
                  <div className="text-container">
                    <AnimatePresence initial={false}>
                      <motion.p
                        key={feature3Index}
                        variants={textVariants}
                        initial="hiddenRight"
                        animate="visible"
                        exit="exitRight"
                        className="card-text"
                      >
                        {feature3Texts[feature3Index].text}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href="#s"
                      className={`card-link ${feature3Index === feature3Texts.length - 1 ? "disabled" : ""}`}
                      onClick={handleNextClickFeature3}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleRight size={24} />
                    </a>
                    <a
                      href="#s"
                      className={`card-link ${feature3Index === 0 ? "disabled" : ""}`}
                      onClick={handlePreviousClickFeature3}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleLeft size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="everycard m-2 col-xl-5 col-md-10 col-11"
            >
              <div className="card">
                <div className="card-body">
                  <div className="text-container">
                    <AnimatePresence initial={false}>
                      <motion.p
                        key={feature4Index}
                        variants={textVariants}
                        initial="hiddenRight"
                        animate="visible"
                        exit="exitRight"
                        className="card-text"
                      >
                        {feature4Texts[feature4Index].text}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href="#s"
                      className={`card-link ${feature4Index === feature4Texts.length - 1 ? "disabled" : ""}`}
                      onClick={handleNextClickFeature4}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleRight size={24} />
                    </a>
                    <a
                      href="#s"
                      className={`card-link ${feature4Index === 0 ? "disabled" : ""}`}
                      onClick={handlePreviousClickFeature4}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaArrowAltCircleLeft size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="container-count col-12 col-md-12">
            {/* عداد الفريق */}
            <motion.div
              whileInView={() => {
                if (!hasTeamStarted) {
                  setHasTeamStarted(true);
                  teamCount();
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='col-md-4 col-12'
            >
              +{teamValue} 
              <p>{currentTexts.teamText}</p>
            </motion.div>

            {/* عداد العملاء */}
            <motion.div
              whileInView={() => {
                if (!hasCustomerStarted) {
                  setHasCustomerStarted(true);
                  customerCount();
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='col-md-7 col-12'
            >
              +{customerValue} 
              <p>{currentTexts.customerText}</p>
            </motion.div>
          </div>
        </div>
        <div className="img-use-us col-md-5 ">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            src={Img_Use_us}
            alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;

