import React from 'react';
import logoimg from '../assets/logo.png';
import { FaInstagramSquare, FaFacebookSquare, FaMobileAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdOutlineWhatsapp } from "react-icons/md";
import { PiTiktokLogoBold, PiSnapchatLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Footer({ language }) {
    const footerTexts = {
        services: language === "ar" ? "الخدمات" : "Services",
        contactUs: language === "ar" ? "اتصل بنا" : "Contact Us",
        saudiArabia: language === "ar" ? "طريق الملك فهد الفرعي - حي الوشام - برج الوشم ص.ب : 12735" : "King Fahd Branch Road - Al-Washam District - Al-Washam Tower P.O. Box: 12735",
        cockroaches: language === "ar" ? "صراصير" : "cockroaches",
        ants: language === "ar" ? "نمل" : "ants",
        flies: language === "ar" ? "ذباب" : "flies",
        bedBugs: language === "ar" ? "بق الفراش" : "bed-bugs",
        rodents: language === "ar" ? "قوارض" : "Rodents",
        snakes: language === "ar" ? "افاعي" : "snakes",
        storedProductPests: language === "ar" ? "آفات المنتجات المخزنة" : "stored-product-pests",
        Covid_19: language === "ar" ? "كوفيد-19 (سارس-كوف-2)" : "Covid-19 (SARS-Cov-2)",
        Hantavirus: language === "ar" ? "هانتافيروس" : "Hantavirus",
        influenza_A: language === "ar" ? "إنفلونزا A" : "influenza A",
        Hepatitis_B: language === "ar" ? "التهاب الكبد B" : "Hepatitis B",
        Hepatitis_C: language === "ar" ? "التهاب الكبد C" : "Hepatitis C",
        HIV: language === "ar" ? "فيروس نقص المناعه البشرية" : "HIV",
    };


    return (
        <footer className={`text-center text-lg-start ${language === "ar" ? "rtl" : ""}`}>
            <div className=" text-center text-md-start mt-5">
                <div className="container-footer d-flex row m-0 mt-3">
                    <div className='content-footer col-md-11'>

                        <div className="img-footer col-md-3 col-lg-2 col-xl-2 col-8 mx-auto mb-4">
                            <Link to="/" onClick={() => setTimeout(() => document.getElementById('homeBanner')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
                                <img
                                    src={logoimg}
                                    alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا"
                                    className='col-md-12 col-12'
                                    style={{ cursor: 'pointer' }}
                                />
                            </Link>
                        </div>

                        <div className="footer-services col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h3 className="name-col text-uppercase fw-bold mb-4">
                                {footerTexts.services}
                            </h3>
                            <div className='peets col-md-12'>
                                <div className='col-md-6'>
                                    <p>
                                        <Link to="/Home/services/ants" className="text-reset">{footerTexts.ants}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/bed-bugs" className="text-reset">{footerTexts.bedBugs}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/cockroaches" className="text-reset">{footerTexts.cockroaches}</Link>
                                    </p>

                                    <p>
                                        <Link to="/Home/services/flies" className="text-reset">{footerTexts.flies}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/Rodents" className="text-reset">{footerTexts.rodents}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/snakes" className="text-reset">{footerTexts.snakes}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/stored-product-pests" className="text-reset">{footerTexts.storedProductPests}</Link>
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p>
                                        <Link to="/Home/services/Covid19" className="text-reset">{footerTexts.Covid_19}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/Hantavirus" className="text-reset">{footerTexts.Hantavirus}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/InfluenzaA" className="text-reset">{footerTexts.influenza_A}</Link>
                                    </p>

                                    <p>
                                        <Link to="/Home/services/HepatitisB" className="text-reset">{footerTexts.Hepatitis_B}</Link>
                                    </p>



                                    <p>
                                        <Link to="/Home/services/HepatitisC" className="text-reset">{footerTexts.Hepatitis_C}</Link>
                                    </p>
                                    <p>
                                        <Link to="/Home/services/Hiv" className="text-reset">{footerTexts.HIV}</Link>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="social-media col-md-4 col-lg-4 col-xl-3 col-8 mx-auto mb-md-0 mb-4">
                            <h3 className="name-col text-uppercase fw-bold mb-4">{footerTexts.contactUs}</h3>
                            <p className='m-0'>
                                <i className="fas fa-phone me-3"></i><a href="tel:+966532135821"><FaMobileAlt /></a>
                                <i className="fas fa-phone me-3"></i><a href="tel:+966112867770"><MdOutlinePhoneInTalk /></a>
                                <i className="fas fa-print me-3"></i><a href="mailto:info@seet-environmentalsolutions.com"><MdOutlineEmail /></a>
                            </p>
                            <p>
                                <i className="fas fa-print me-3"></i>
                                <a href='https://www.instagram.com/seetenvironmental?utm_source=qr&igsh=aHptN3EwZWM5cnZj'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagramSquare /></a>
                                <i className="fas fa-print me-3"></i><a href='https://www.facebook.com/share/15N8nyBw4w/?mibextid=wwXIfr'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><FaFacebookSquare /></a>
                                <i className="fas fa-print me-3"></i><a href='https://twitter.com/Seet_Saudia'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><FaXTwitter /></a>
                                <i className="fas fa-print me-3"></i><a href='https://www.tiktok.com/@pest_and_germcontrol'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PiTiktokLogoBold /></a>
                                <i className="fas fa-print me-3"></i><a
                                    href="https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B5%D9%8A%D8%AA-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-seet-saudia-co-for-contracting/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn /></a>
                                <i className="fas fa-print me-3"></i><a
                                    href="https://www.snapchat.com/add/seetenvironment?share_id=B-DfT27Ratc&locale=en-GB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PiSnapchatLogoBold /></a>
                                <i className="fas fa-print me-3"></i><a
                                    href='https://wa.me/966578272727'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <MdOutlineWhatsapp className='icon-contacts' />
                                </a>
                            </p>
                            <p><i className="fas fa-home me-3"></i>{footerTexts.saudiArabia}</p>

                        </div>

                        <div className="land col-md-3 col-lg-3 col-xl-3 col-8 mx-auto mb-4">


                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.3683925280416!2d46.699878675363934!3d24.645444878070226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzQzLjYiTiA0NsKwNDInMDguOCJF!5e0!3m2!1sen!2seg!4v1736723890057!5m2!1sen!2seg"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Google Maps Location"
                            ></iframe>



                        </div>
                    </div>
                    <div className='copyright d-flex justify-content-center col-md-12'>
                        <h4 className='d-flex justify-content-center'>
                            &copy;copyright&nbsp;Seet Saudi
                        </h4>
                        <h4 className='d-flex justify-content-center'>
                            Power py and Create &nbsp;<a href='https://www.facebook.com/profile.php?id=61552130970112'
                                target="_blank"
                                rel="noopener noreferrer">Information system security </a>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
