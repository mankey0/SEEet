import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/navigation';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Cock from './pages/cock';
import Ants from './pages/ants';
import Flies from './pages/flies';
import BedBugs from './pages/bed_bugs';
import Snakes from './pages/snakes';
import StoredProductPests from './pages/stored_product_pests';
import Rodents from './pages/rodents';
import Covid19 from './pages/covid_19';
import Hantavirus from './pages/hantavirus';
import InfluenzaA from './pages/influenza_A';
import HepatitisB from './pages/hepatitis_B';
import HepatitisC from './pages/hepatitis_C';
import Hiv from './pages/hiv';
import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Emergency from './assets/wafcs(1).png';
import { IoCall } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";

import './App.css';

function App() {
    const [language, setLanguage] = useState('ar'); // الحالة الخاصة باللغة
    const [showLogo, setShowLogo] = useState(true);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // النصوص الخاصة بالطوارئ
    const emergencyTexts = {
        en: {
            title: "Emergency",
            description: "We offer an emergency pest control service designed to meet your urgent needs efficiently and swiftly. Amidst the heavy traffic in Riyadh, our team stands out with a unique emergency response. A specialized technician arrives on a motorcycle in record time, ready to tackle even the most challenging and urgent pest problems on the spot.",
            features: [
                "Immediate Response: We reach you as quickly as possible to resolve your urgent issues.",
                "Expert Technicians: Trained to handle all types of pests and critical situations.",
                "Fast & Flexible Mobility: Using motorcycles to navigate Riyadh’s traffic and ensure a rapid service.",
                "Effective & Instant Solutions: Providing quick resolutions using the best techniques and materials.",
            ],
            footer: "Don't let pests ruin your day! We're here to rescue you anytime, anywhere. Request our emergency service now and enjoy peace of mind with Seet Saudi—your comfort and safety are our top priorities!",
        },
        ar: {
            title: "خدمة الطوارئ",
            description: "نحن نقدم خدمة مكافحة الحشرات الطارئة المصممة لتلبية احتياجاتك العاجلة بكفاءة وسرعة. وسط ازدحام المرور في الرياض، يبرز فريقنا بخدمة طوارئ فريدة. يصل إليك فني متخصص بدراجة نارية في وقت قياسي، مستعد لمعالجة أكثر مشكلات الحشرات تحدياً وإلحاحاً على الفور.",
            features: [
                "استجابة فورية: نصل إليك بأسرع وقت ممكن لحل مشاكلك العاجلة.",
                "فنيون متخصصون: مدربون للتعامل مع جميع أنواع الحشرات والمشكلات الحرجة.",
                "تنقل مرن وسريع: باستخدام الدراجات النارية لتجاوز ازدحام المرور في الرياض وضمان الخدمة السريعة.",
                "حلول فورية وفعالة: لضمان حل المشكلة في أقصر وقت ممكن باستخدام أفضل التقنيات والمواد.",
            ],
            footer: "لا تدع مشاكل الحشرات تفسد يومك. نحن هنا لإنقاذك أينما كنت وفي أي وقت! اطلب خدمة الطوارئ الآن واستمتع براحة البال مع صيت السعودية. راحتك وسلامتك هي أولويتنا!",
        },
    };

    const currentEmergencyText = emergencyTexts[language];

    return (
        <Router>
            <div className={`App ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className="watermark"></div>
                <Nav language={language} toggleLanguage={toggleLanguage} />

                {showLogo && (
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/Home/about.js" element={<About language={language} />} />
                    <Route path="/Home/contact.js" element={<Contact language={language} />} />
                    <Route path="/Home/services/cockroaches" element={<Cock language={language} />} />
                    <Route path="/Home/services/ants" element={<Ants language={language} />} />
                    <Route path="/Home/services/flies" element={<Flies language={language} />} />
                    <Route path="/Home/services/bed-bugs" element={<BedBugs language={language} />} />
                    <Route path="/Home/services/Snakes" element={<Snakes language={language} />} />
                    <Route path="/Home/services/stored-product-pests" element={<StoredProductPests language={language} />} />
                    <Route path='/Home/services/rodents' element={<Rodents language={language} />} />
                    <Route path='/Home/services/Covid19' element={<Covid19 language={language} />} />
                    <Route path='/Home/services/Hantavirus' element={<Hantavirus language={language} />} />
                    <Route path='/Home/services/InfluenzaA' element={<InfluenzaA language={language} />} />
                    <Route path='/Home/services/HepatitisB' element={<HepatitisB language={language} />} />
                    <Route path='/Home/services/HepatitisC' element={<HepatitisC language={language} />} />
                    <Route path='/Home/services/Hiv' element={<Hiv language={language} />} />
                </Routes>

                <button
                    className="fixed-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop"
                >
                    <h6>{currentEmergencyText.title}</h6>
                    <div className='img-emergency'>
                        <img src={Emergency} alt='' />
                    </div>
                </button>

                <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="staticBackdropLabel">{currentEmergencyText.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <p>{currentEmergencyText.description}</p>
                            <ul>
                                {currentEmergencyText.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <p>{currentEmergencyText.footer}</p>
                            <div className='call-emergency'>
                                <a href="mailto:Info@seet-sa.net">
                                    <IoMailOpen />
                                </a>
                                <a href="tel:+966532135821">
                                    <IoCall />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;


