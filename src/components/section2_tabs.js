import React, { useState, useEffect, useRef } from 'react';
import imgTab1 from '../assets/1.png';
import imgTab2 from '../assets/2.png';
import { Link } from 'react-router-dom';
import Cockroaches from '../assets/icons pest and germs control/cockroach.png'
import Flies from '../assets/icons pest and germs control/fruit-fly.png'
import Ants from '../assets/icons pest and germs control/ant.png'
import Bed_bugs from '../assets/icons pest and germs control/bed-bug.png'
import Rodents from '../assets/icons pest and germs control/rodent.png'
import Stored_Product_Pests from '../assets/icons pest and germs control/Stored-Product-Pests.png'
import snackes from '../assets/icons pest and germs control/snake.png'
import Covid_19 from '../assets/icons pest and germs control/coronavirus.png'
import Hantavirus from '../assets/icons pest and germs control/Hantavirus.png'
import influenza_A from '../assets/icons pest and germs control/influenza-A-removebg-preview.png'
import Hepatitis_B from '../assets/icons pest and germs control/hepatitis-b.png'
import Hepatitis_C from '../assets/icons pest and germs control/hepatitis-c.png'
import HIV from '../assets/icons pest and germs control/hiv.png'
const Section3Tabs = ({ language }) => {


    const [activeTab, setActiveTab] = useState(0);
    const [title, setTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const textToType = language === 'ar' ? "خدماتنا" : "Our Services";  // Change text based on language
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 1000;

    useEffect(() => {
        let timeout;

        if (!isDeleting) {
            if (index < textToType.length) {
                timeout = setTimeout(() => {
                    // If it's the first letter, keep it fixed
                    if (index === 0) {
                        setTitle(textToType[0]);  // Keep the first letter fixed
                    } else {
                        setTitle((prev) => prev + textToType[index]);
                    }
                    setIndex((prev) => prev + 1);
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            if (index > 1) {  // Start deleting after the first character
                timeout = setTimeout(() => {
                    setTitle((prev) => prev.slice(0, -1)); // Remove the last character except the first one
                    setIndex((prev) => prev - 1);
                }, deletingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setIndex(0);
                }, pauseDuration);
            }
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, textToType]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };






    const servicesSectionRef = useRef(null);

    // استخدام useEffect للتحقق مما إذا كان هناك طلب من الرابط للتوجه إلى قسم معين
    useEffect(() => {
        if (window.location.hash === "#services") {
            servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);














    return (
        <div ref={servicesSectionRef} className="tabs-container row m-0" id="Services">
            <h1 className={`title-services ${language === 'ar' ? 'text-right' : ''}`}>
                {title}
                <span className="cursor"></span>
            </h1>
            <div className="tabs col-md-11">
                <div
                    className={`tab col-xl-4 col-md-5 col-5 ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                >
                    <div className='img-header-tab col-md-5 col-12'>
                        <img src={imgTab1} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" className='tab-icon ' />
                    </div>
                    <h3 className='col-md-12 col-6'>{language === 'ar' ? 'مكافحة الآفات' : 'PEST CONTROL'}</h3>
                </div>
                <div
                    className={`tab col-xl-4 col-md-5 col-5 ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    <div className='img-header-tab col-md-5 col-12'>
                        <img src={imgTab2} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" className='tab-icon' />
                    </div>
                    <h3 className='col-md-12 col-6'>{language === 'ar' ? 'مكافحة الجراثيم' : 'GERM CONTROL'}</h3>
                </div>
            </div>
            <div className="tab-content col-lg-11 col-md-11 col-12">
                {activeTab === 0 && (
                    <div className='contact-tabs col-md-12'>
                        <img src={imgTab1} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" className='img-tab-icon col-lg-4 col-xl-3 col-md-6 col-10' />
                        <div className="tab-colums col-lg-8 col-md-12 col-12">
                            <div className='tab-colum col-md-6 col-12'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <div className='home-img-servicces'>
                                                    <img src={Cockroaches} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'الصراصير' : 'cockroaches'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "تلوث الصراصير كميات كبيرة من المواد سنويًا وهي ناقلات محتملة للأمراض. تتغذى الصراصير من المجاري والمصارف ومناطق القمامة مما يجعلها على اتصال مع مجموعة متنوعة..."
                                                        : "Cockroaches contaminate vast quantities of materials each year and are potential carriers of diseases..."}
                                                </p>
                                                <Link to="../Home/services/cockroaches" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div className='home-img-servicces'>
                                                    <img src={Flies} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'الذباب' : 'Flies'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "الذباب هو واحد من أكثر الآفات الناقلة للأمراض شيوعًا. يتم الإشارة إلى العديد من الأنواع بمصطلح (الذباب القذر) بسبب ارتباطها بمواد قد تكون ملوثة..."
                                                        : "Flies are one of the most common disease carrier pests. Many species are collectively called filth flies..."}
                                                </p>
                                                <Link to="../Home/services/flies" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <div className='home-img-servicces'>
                                                    <img src={Ants} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'نمل' : 'ants'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "النمل هو حشرات اجتماعية تعيش في مستعمرات كبيرة ومنظمة تضم ملايين الأفراد. يتميز النمل بتنوع أنواعه وأشكاله، وهو يتكيف مع مختلف البيئات حول العالم..."
                                                        : "Ants are social insects that live in large, organized colonies containing millions of individuals. They are..."}
                                                </p>
                                                <Link to="../Home/services/ants" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <div className='home-img-servicces'>
                                                    <img src={Bed_bugs} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'بق الفراش' : 'Bed bugs'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "تعتبر المباني السكنية والفنادق معرضة بشكل خاص لمشاكل بق الفراش بسبب الكثافة العالية للسكان. كل شخص يمكن أن يكون مصدرًا لنقل بق الفراش من خلال التعلق بالأمتعة الشخصية..."
                                                        : "Residential buildings and hotels are particularly vulnerable to bed bug problems because of the high-density human populations..."}
                                                </p>
                                                <Link to="../Home/services/bed-bugs" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-colum col-md-6 col-12'>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <div className='home-img-servicces'>
                                                    <img src={Rodents} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'القوارض' : 'Rodents'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "الفئران والجرذان يمكن أن تكون آفات عامة تهدد مجموعة واسعة من الصناعات. يعد جرذ النرويج وجرذ السقف وفأر المنزل من أكثر..."
                                                        : "Rats and mice can be major public pests to a wide range of industries. Norway rat, roof rat, and house mouse are the most..."}
                                                </p>
                                                <Link to="../Home/services/Rodents" className='card-link'onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <div className='home-img-servicces'>
                                                    <img src={Stored_Product_Pests} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'آفات المنتجات المخزنة' : 'Stored Product Pests'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "الحشرات التي تصيب المنتجات المخزنة تشكل مجموعة كبيرة من الآفات، تشمل الخنافس والعث. تتحمل هذه الحشرات مسؤولية تلوث..."
                                                        : "Stored Product Insects are a large group of pests, including beetles and moths. They are responsible for contaminating..."}
                                                </p>
                                                <h2>
                                                    <Link to="../Home/services/stored-product-pests" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                        {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <div className='home-img-servicces'>
                                                    <img src={snackes} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'الافاعي' : 'Snakes'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "تشكل الثعابين مخاطر جسيمة على الناس والحيوانات. يمكن أن تكون وجودها في أو حول المباني أمرًا مقلقًا وخطيرًا. بعض الأنواع سامة وتتطلب تدخلاً مهنيًا فوريًا لإزالتها..."
                                                        : "Snakes can pose serious risks to people and animals. Their presence in or around buildings can be alarming and dangerous..."}
                                                </p>
                                                <Link to="../Home/services/snakes" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className='contact-tabs'>
                        <img src={imgTab2} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" className='img-tab-icon col-lg-4 col-xl-3 col-md-6 col-10' />
                        <div className="tab-colums col-lg-8 col-md-12 col-12">
                            <div className='tab-colum col-md-6 col-12'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <div className='home-img-servicces'>
                                                    <img src={Covid_19} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'كوفيد-19 (سارس-كوف-2)' : 'Covid-19 (SARS-Cov-2)'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "فيروس كورونا المستجد، المعروف أيضًا باسم (SARS-CoV-2)، هو فيروس يسبب مرض كوفيد-19. ظهر لأول مرة في مدينة ووهان بالصين في ديسمبر 2019،.."
                                                        : "The novel coronavirus, also known as SARS-CoV-2, is a virus that causes COVID-19. It was first identified in Wuhan, China..."}
                                                </p>
                                                <Link to="../Home/services/Covid19" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div className='home-img-servicces'>
                                                    <img src={Hantavirus} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'فيروس هانتا' : 'Hantavirus'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "فيروس هانتا هو نوع من الفيروسات الذي ينتقل إلى البشر عبر الاتصال المباشر أو غير المباشر مع القوارض المصابة، مثل الفئران والجرذان. يُعتبر هذا الفيروس مسببًا لأمراض خطيرة..."
                                                        : "Hantavirus is a type of virus transmitted to humans through direct or indirect contact with infected rodents, such as mice and rats..."}
                                                </p>
                                                <Link to="../Home/services/Hantavirus" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <div className='home-img-servicces'>
                                                    <img src={influenza_A} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'إنفلونزا A' : 'influenza A'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "انفلونزا A هي نوع من أنواع فيروسات الإنفلونزا التي تصيب الجهاز التنفسي. يُعد هذا الفيروس الأكثر شيوعًا بين أنواع الإنفلونزا الأخرى، ويتميز بقدرته..."
                                                        : "Influenza A is a type of flu virus that affects the respiratory system. It is the most common type of influenza and is known..."}
                                                </p>
                                                <Link to="../Home/services/InfluenzaA" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <div className='home-img-servicces'>
                                                    <img src={Hepatitis_B} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'التهاب الكبد B' : 'Hepatitis B'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "التهاب الكبد B هو عدوى فيروسية تصيب الكبد، يسببها فيروس التهاب الكبد B (HBV). يُعتبر من أكثر أمراض الكبد انتشارًا حول العالم. ينتقل الفيروس عن طريق الدم أو سوائل الجسم..."
                                                        : "Hepatitis B is a viral infection that affects the liver, caused by the Hepatitis B Virus (HBV). It is one of the most common liver diseases..."}
                                                </p>
                                                <Link to="../Home/services/HepatitisB" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab-colum col-md-6 col-12'>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <div className='home-img-servicces'>
                                                    <img src={Hepatitis_C} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'التهاب الكبد C' : 'Hepatitis C'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "التهاب الكبد الوبائي سي هو مرض فيروسي يصيب الكبد، ويُسببه فيروس التهاب الكبد سي (HCV). يُعتبر هذا المرض أحد الأسباب الرئيسية لأمراض الكبد..."
                                                        : "Hepatitis C is a viral disease that affects the liver and is caused by the hepatitis C virus (HCV)..."}
                                                </p>
                                                <Link to="../Home/services/HepatitisC" className='card-link'onClick={() => window.scrollTo(0, 0)}>
                                                    {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <div className='home-img-servicces'>
                                                    <img src={HIV} alt='' />
                                                </div>
                                                <h4>
                                                    {language === 'ar' ? 'فيروس نقص المناعة البشرية' : 'Human Immunodeficiency Virus'}
                                                </h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {language === "ar"
                                                        ? "فيروس نقص المناعة البشري هو فيروس يهاجم جهاز المناعة، مما يضعف قدرة الجسم على محاربة العدوى والأمراض. ينتقل الفيروس عبر سوائل الجسم مثل الدم،.."
                                                        : "Human Immunodeficiency Virus (HIV) is a virus that attacks the immune system, weakening the body's ability to fight infections..."}
                                                </p>
                                                <h2>
                                                    <Link to="../Home/services/Hiv" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                                                        {language === 'ar' ? 'قراءة المزيد' : 'read more'}
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section3Tabs;

