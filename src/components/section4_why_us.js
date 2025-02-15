
import React, { useState } from 'react';
import imgtab1 from '../assets/Advantages.jpg';
import imgtab2 from '../assets/Food-Manufacturing.jpg';
import imgtab3 from '../assets/Ambition.jpg';

function Section4WhyUs({ language }) {
    const [selected, setSelected] = useState('Our Mission');
    const [expandedTabs, setExpandedTabs] = useState({
        'Our Mission': false,
        'Our Vision': false,
        'Our Ambition': false
    });

    const toggleText = (tabName) => {
        setExpandedTabs((prev) => ({
            ...prev,
            [tabName]: !prev[tabName],
        }));
    };

    const content = {
        "Our Mission": {
            basicText: {
                en: "Our mission is to provide a clean and healthy environment for our clients by effectively and safely eliminating insects and rodents. We aim to ensure the comfort and well-being of our clients, securing a safe living and working environment.",
                ar: "مهمتنا هي توفير بيئة نظيفة وصحية لعملائنا من خلال القضاء الفعال والآمن على الحشرات والقوارض. نهدف إلى ضمان راحة ورفاهية عملائنا، وتوفير بيئة آمنة للعيش والعمل."
            },
            expandedText: {
                en: "You will receive a specialized team of experts in pest and rodent control. Our team possesses the necessary experience and in-depth knowledge to analyze and diagnose issues related to pests and rodents, and they will apply innovative strategies to eliminate them.",
                ar: "سوف تتلقى فريقًا متخصصًا من الخبراء في مكافحة الحشرات والقوارض. يمتلك فريقنا الخبرة اللازمة والمعرفة العميقة لتحليل وتشخيص المشكلات المتعلقة بالحشرات والقوارض، وسيتبعون استراتيجيات مبتكرة للقضاء عليها."
            },
            imgSrc: imgtab1,
        },
        "Our Vision": {
            basicText: {
                en: "To become Seet Saudia's leading and trusted company in pest and rodent control. In our company, we aim to achieve a future vision that establishes us as the leading and reference company in the pest and rodent control industry.",
                ar: "أن نصبح الشركة الرائدة والموثوقة في صيت لمكافحة الحشرات والقوارض. في شركتنا، نهدف إلى تحقيق رؤية مستقبلية تضعنا كالشركة الرائدة والمرجعية في صناعة مكافحة الحشرات والقوارض."
            },
            expandedText: {
                en: "Our company maintains a spirit of innovation and continuous development. We strive to explore and adopt the best practices and new technologies in the pest and rodent control industry, with the aim of improving our processes and offering effective and innovative solutions to our clients.",
                ar: "تحافظ شركتنا على روح الابتكار والتطوير المستمر. نسعى لاستكشاف واعتماد أفضل الممارسات والتقنيات الحديثة في صناعة مكافحة الحشرات والقوارض، بهدف تحسين عملياتنا وتقديم حلول فعالة ومبتكرة لعملائنا."
            },
            imgSrc: imgtab2,
        },
        "Our Ambition": {
            basicText: {
                en: "To become Seet Saudia's leading and trusted company in pest and rodent control. In our company, we aim to achieve a future vision that establishes us as the leading and reference company in the pest and rodent control industry.",
                ar: "أن نصبح الشركة الرائدة والموثوقة في صيت لمكافحة الحشرات والقوارض. في شركتنا، نهدف إلى تحقيق رؤية مستقبلية تضعنا كالشركة الرائدة والمرجعية في صناعة مكافحة الحشرات والقوارض."
            },
            expandedText: {
                en: "Our company maintains a spirit of innovation and continuous development. We strive to explore and adopt the best practices and new technologies in the pest and rodent control industry, with the aim of improving our processes and offering effective and innovative solutions to our clients.",
                ar: "تحافظ شركتنا على روح الابتكار والتطوير المستمر. نسعى لاستكشاف واعتماد أفضل الممارسات والتقنيات الحديثة في صناعة مكافحة الحشرات والقوارض، بهدف تحسين عملياتنا وتقديم حلول فعالة ومبتكرة لعملائنا."
            },
            imgSrc: imgtab3,
        },
    };

    return (
        <div className={`App-why row m-0 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <header className="header-why col-md-11">
                <div className="nav-why col-md-12">
                    <button onClick={() => setSelected("Our Mission")} className=' col-md-3 col-4'>{language === 'en' ? 'Our Mission' : 'مهمتنا'}</button>
                    <button onClick={() => setSelected("Our Vision")} className=' col-md-3 col-4'>{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</button>
                    <button onClick={() => setSelected("Our Ambition")} className=' col-md-3 col-4'>{language === 'en' ? 'Our Ambition' : 'طموحاتنا'}</button>
                </div>
                <div className="content-why col-md-12">
                    {['Our Mission', 'Our Vision', 'Our Ambition'].map((section) => (
                        <div className={`section col-md-12 ${selected === section ? 'show' : ''}`} key={section}>
                            {content[section].imgSrc && (
                                <div className='col-md-4'>
                                    <img
                                        src={content[section].imgSrc}
                                        alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا. صيت السعودية للخدمات البيئية، مكافحة الحشرات لعبتنا."
                                        className={`image-why ${language === 'ar' ? 'order-last' : ''}`}
                                    />
                                </div>
                            )}
                            <div className={`text-why col-md-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                <h2>{language === 'en' ? section : section === 'Our Mission' ? 'مهمتنا' : section === 'Our Vision' ? 'رؤيتنا' : 'طموحاتنا'}:</h2>
                                <div className="text-container">
                                    <p>
                                        {!expandedTabs[section] ? content[section].basicText[language] : content[section].expandedText[language]}
                                    </p>
                                </div>
                                <button
                                    className='btn'
                                    onClick={() => toggleText(section)}
                                >
                                    {expandedTabs[section] ? (language === 'en' ? "show less" : "عرض الاقل") : (language === 'en' ? "show more" : "قراءة المزيد")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default Section4WhyUs;
