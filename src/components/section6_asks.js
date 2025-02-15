
import React, { useState } from 'react';
import imgAsk from '../assets/ask.jpg';

const Section6Asks = ({ language }) => {
    const [currentlyActive, setCurrentlyActive] = useState(1);

    const handleAccordionClick = (newActiveAccordion) => {
        setCurrentlyActive(newActiveAccordion === currentlyActive ? null : newActiveAccordion);
    };

    // تعريف الأسئلة والإجابات
    const content = {
        1: {
            question: {
                en: "Are pesticides safe for public health?",
                ar: "هل المبيدات آمنة علي الصحة العامة؟"
            },
            answer: {
                en: "The pesticides used by Seet Saudia for pest control are completely safe for public health and comply with European safety and quality standards.",
                ar: "جميع المبيدات المستخدمة من قبل شركة صيت السعودية لمكافحة الحشرات هي آمنة تماماً علي الصحة العامة ومطابقة لمواصفات الجودة والامان الاوروبية"
            }
        },
        2: {
            question: {
                en: "What precautions should I take for pest control?",
                ar: "هل يوجد ضمان علي عملية مكافحة الحشرات؟"
            },
            answer: {
                en: "All Seet Saudia services include a warranty period, depending on the services provided to the client.",
                ar: "جميع خدمات صيت السعودية تشمل فترة ضمان وهذا حسب الخدمات المقدمة للعميل"
            }
        },
        3: {
            question: {
                en: "How often should pest control be done?",
                ar: "هل تتم مكافحة الحشرات في يوم واحد فقط؟"
            },
            answer: {
                en: "In most cases, the extermination process is completed in just one day, except for large mansions with multiple floors or large factories and companies.",
                ar: "في معظم الاحيان تتم عملية الابادة في يوم واحد فقط, ماعدا بعض القصور الضخمة والتي تحتوي علي عدة طوابق او المصانع والشركات الكبيرة"
            }
        },
        4: {
            question: {
                en: "Are the chemicals environmentally friendly?",
                ar: "هل يلزم مغادرة المنزل اثناء عملية مكافحة الحشرات؟"
            },
            answer: {
                en: "The house is never to be left during the pest or rodent control process. The family can continue with their daily life and activities fully without any issues while the workers carry out their tasks.",
                ar: "لا يتم مغادرة المنزل مطلقاً اثناء عملية مكافحة الحشرات او القوارض, تستطيع الأسرة ممارسة حياتنا ونشاطاتها بشكل كامل بدون اي مشكلة اثناء تأدية العمال لوظيفتهم"
            }
        }
    };

    return (
        <div className="content-ask row m-0" id='asks'>
            <div className="items col-md-11">
                <div className="img-ask col-md-4 p-0">
                    <img src={imgAsk} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" className="img-fluid" />
                </div>
                <div className="accordion-menu col-md-7">
                    <h3 className="title-ask">{language === 'en' ? "Here are some frequently asked questions to assist our valued customers." : "إليك بعض الأسئلة الشائعة لمساعدة عملائنا الكرام."}</h3>
                    {/* Accordion 1 */}
                    <div
                        className={`accordion-ask-item col-md-12 ${currentlyActive === 1 ? 'active' : ''}`}
                        onClick={() => handleAccordionClick(1)}
                    >
                        <div className={`accordion-item ${currentlyActive === 1 ? 'active' : ''}`}>
                            <h4 className="ask">{language === 'en' ? content[1].question.en : content[1].question.ar}</h4>
                            <div className={`accordion-content ${currentlyActive === 1 ? 'active' : ''}`}>
                                {language === 'en' ? content[1].answer.en : content[1].answer.ar}
                            </div>
                        </div>
                    </div>
                    {/* Accordion 2 */}
                    <div
                        className={`accordion-ask-item col-md-12 ${currentlyActive === 2 ? 'active' : ''}`}
                        onClick={() => handleAccordionClick(2)}
                    >
                        <div className={`accordion-item ${currentlyActive === 2 ? 'active' : ''}`}>
                            <h4 className="ask">{language === 'en' ? content[2].question.en : content[2].question.ar}</h4>
                            <div className={`accordion-content ${currentlyActive === 2 ? 'active' : ''}`}>
                                {language === 'en' ? content[2].answer.en : content[2].answer.ar}
                            </div>
                        </div>
                    </div>
                    {/* Accordion 3 */}
                    <div
                        className={`accordion-ask-item col-md-12 ${currentlyActive === 3 ? 'active' : ''}`}
                        onClick={() => handleAccordionClick(3)}
                    >
                        <div className={`accordion-item ${currentlyActive === 3 ? 'active' : ''}`}>
                            <h4 className="ask">{language === 'en' ? content[3].question.en : content[3].question.ar}</h4>
                            <div className={`accordion-content ${currentlyActive === 3 ? 'active' : ''}`}>
                                {language === 'en' ? content[3].answer.en : content[3].answer.ar}
                            </div>
                        </div>
                    </div>
                    {/* Accordion 4 */}
                    <div
                        className={`accordion-ask-item col-md-12 ${currentlyActive === 4 ? 'active' : ''}`}
                        onClick={() => handleAccordionClick(4)}
                    >
                        <div className={`accordion-item ${currentlyActive === 4 ? 'active' : ''}`}>
                            <h4 className="ask">{language === 'en' ? content[4].question.en : content[4].question.ar}</h4>
                            <div className={`accordion-content ${currentlyActive === 4 ? 'active' : ''}`}>
                                {language === 'en' ? content[4].answer.en : content[4].answer.ar}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section6Asks;
