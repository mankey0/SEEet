import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import logo from '../assets/logo.png';
import img1 from '../assets/Customers/01.png';
import img2 from '../assets/Customers/02.png';
import img3 from '../assets/Customers/03.png';
import img4 from '../assets/Customers/04.png';
import img5 from '../assets/Customers/05.png';
import img6 from '../assets/Customers/06.png';
import img7 from '../assets/Customers/07.png';
import img8 from '../assets/Customers/08.png';
import img9 from '../assets/Customers/09.png';
import img10 from '../assets/Customers/10.png';
import img11 from '../assets/Customers/11.png';
import img12 from '../assets/Customers/12.png';
import img13 from '../assets/Customers/13.png';
import img14 from '../assets/Customers/14.png';
import img15 from '../assets/Customers/15.png';
import img16 from '../assets/Customers/16.png';
import img17 from '../assets/Customers/17.png';
import img18 from '../assets/Customers/18.png';
import img19 from '../assets/Customers/19.png';
import img20 from '../assets/Customers/20.png';
import img21 from '../assets/Customers/21.png';
import img22 from '../assets/Customers/22.png';
import img23 from '../assets/Customers/23.png';
import img24 from '../assets/Customers/24.png';
import img25 from '../assets/Customers/25.png';
import img26 from '../assets/Customers/26.png';
const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26
];
function Nav({ language, toggleLanguage }) {





    const insects = [
        { name_en: "cockroaches", name_ar: "الصراصير", path: "/Home/services/cockroaches" },
        { name_en: "Ants", name_ar: "النمل", path: "/Home/services/ants" },
        { name_en: "Flies", name_ar: "الذباب", path: "/Home/services/flies" },
        { name_en: "BedBugs", name_ar: "بق الفراش", path: "/Home/services/bed-bugs" },
        { name_en: "Stored Product Pests", name_ar: "آفات المنتجات المخزنة", path: "/Home/services/stored-product-pests" },
        { name_en: "Rodents", name_ar: "القوارض", path: "/Home/services/Rodents" },
        { name_en: "Snakes", name_ar: "الثعابين", path: "/Home/services/Snakes" },
    ];
    const germs = [
        { name_en: "Covid 19", name_ar: 'كوفيد-19 (سارس-كوف-2)', path: "/Home/services/Covid19" },
        { name_en: "Hantavirus", name_ar: "فيروس هانتا", path: "/Home/services/hantavirus" },
        { name_en: "Influenza A", name_ar: "إنفلونزا A", path: "/Home/services/InfluenzaA" },
        { name_en: "Hepatitis B", name_ar: "التهاب الكبد B", path: "/Home/services/HepatitisB" },
        { name_en: "Hepatitis C", name_ar: "التهاب الكبد C", path: "/Home/services/HepatitisC" },
        { name_en: "Hiv", name_ar: "فيروس نقص المناعة البشرية", path: "/Home/services/Hiv" },
    ];


    const sliderRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);




    const scrollSlider = useCallback(() => {
        if (sliderRef.current && !isMouseDown) {
            sliderRef.current.scrollLeft += 1;
            if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
                sliderRef.current.scrollLeft = 0;
            }
        }
    }, [isMouseDown]);

    const handleMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsMouseDown(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(scrollSlider, 26);

        const sliderElement = sliderRef.current;
        sliderElement.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            clearInterval(interval);
            sliderElement.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [scrollSlider, handleMouseDown, handleMouseUp]);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

    const [openSection, setOpenSection] = useState(null); // تتبع القسم المفتوح

    // دالة لتبديل الأقسام الفرعية
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // فتح أو إغلاق القسم
    };

    // منع التأثير على القائمة الأصلية (التي تحتوي على "الخدمات")
    const handleDropdownToggle = (e) => {
        e.preventDefault(); // منع الفتح والإغلاق التلقائي للقائمة
        e.stopPropagation(); // منع تأثير النقر على العناصر
    };

    // منع إغلاق القائمة الأصلية عند التفاعل مع الأقسام الفرعية
    const handleDropdownMenuClick = (e) => {
        e.stopPropagation(); // منع التفاعل مع القائمة الأصلية
    };

    return (
        <>
            <div className='all-nav- row m-0'>
                <div className='nav-logo- col-lg-2 col-xl-1 col-md-2 col-2 p-0'>
                    <Link to="/"> {/* إضافة رابط للصفحة الرئيسية */}
                        <div className='logo-img- col-md-10 col-12'>
                            <img
                                src={logo}
                                alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا"
                                style={{ cursor: 'pointer' }} // إضافة مؤشر الفأرة
                            />
                        </div>
                    </Link>
                </div>




                <div className={`slid-nav col-lg-3 col-xl-5 col-md-6 col-5 p-0 ${language === 'rtl' ? 'rtl' : 'ltr'}`}>
                    <div className="nav-container- p-0">
                        <div className="slider-content-">
                            <div className="slider-container" ref={sliderRef}>
                                <div className="slider-track">
                                    {images.concat(images).map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا. صيت السعودية للخدمات البيئية، مكافحة الحشرات لعبتنا.`}
                                            className="slider-image"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className='icons-nav col-lg-6 col-xl-5 col-md-2 col-2'>

                    <button
                        type="button"
                        className="btn d-lg-none"
                        onClick={toggleNavbar}
                    >
                        ☰
                    </button>

                    {isNavbarOpen && (
                        <div
                            className="model-mobile modal fade show row m-0"
                            id="navbarModal"
                            tabIndex="-1"
                            aria-labelledby="navbarModalLabel"
                            style={{
                                display: 'block',
                                width: language === 'en' ? '100%' : '100%',
                            }}
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="navbarModalLabel">
                                            {language === 'en' ? 'صيت السعوديه' : 'صيت السعودية'}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={toggleNavbar}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="container-fluid">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <Link className="icon-nav-link" to="/" onClick={toggleNavbar}>
                                                            <FaHome className="nav-icon" />{' '}
                                                            {language === 'en' ? 'Home' : 'الرئيسية'}
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="icon-nav-link" to="/Home/about.js" onClick={toggleNavbar}>
                                                            <FaUserCircle className="nav-icon" />{' '}
                                                            {language === 'en' ? 'About Us' : 'من نحن'}
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item dropdown" onClick={handleDropdownMenuClick}>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            role="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded={openSection !== null ? 'true' : 'false'}
                                                            onClick={handleDropdownToggle}
                                                        >
                                                            <FaServer className="nav-icon" />
                                                            {language === 'en' ? 'Services' : 'الخدمات'}
                                                        </Link>
                                                        <ul className={`dropdown-menu ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                                                            <li>
                                                                <h5
                                                                    className={`dropdown-header ${language === 'ar' ? 'text-end' : 'text-start'}`}
                                                                    role="button"
                                                                    onClick={() => toggleSection('germs')}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    {language === 'en' ? 'Germs' : 'جراثيم'}
                                                                </h5>
                                                                {openSection === 'germs' && (
                                                                    <ul className="list-unstyled">
                                                                        {germs.map((insect, index) => (
                                                                            <li key={index}>
                                                                                <Link className="dropdown-item" to={insect.path} onClick={toggleNavbar}>
                                                                                    {language === 'en' ? insect.name_en : insect.name_ar}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                            <li>
                                                                <h5
                                                                    className="dropdown-header"
                                                                    role="button"
                                                                    onClick={() => toggleSection('insects')}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    {language === 'en' ? 'Pests' : 'الآفـــات'}
                                                                </h5>
                                                                {openSection === 'insects' && (
                                                                    <ul className="list-unstyled">
                                                                        {insects.map((insect, index) => (
                                                                            <li key={index}>
                                                                                <Link className="dropdown-item" to={insect.path} onClick={toggleNavbar}>
                                                                                    {language === 'en' ? insect.name_en : insect.name_ar}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="icon-nav-link" to="/Home/contact.js" onClick={toggleNavbar}>
                                                            <IoCall className="nav-icon" />{' '}
                                                            {language === 'en' ? 'Contact' : 'اتصل بنا'}
                                                        </Link>
                                                    </li>

                                                </ul>

                                            </div>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}



                    <nav className="navbar col-md-12 navbar-expand-lg d-none d-lg-flex">
                        <div className="container col-md-12 d-flex justify-content-center">
                            <ul className="navbar-nav d-flex justify-content-center col-md-12">
                                <li className="nav-item">
                                    <Link className="icon-nav-link" to="/">
                                        <FaHome className="nav-icon" />{' '}
                                        {language === 'en' ? 'Home' : 'الرئيسية'}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="icon-nav-link" to="/Home/about.js">
                                        <FaUserCircle className="nav-icon" />{' '}
                                        {language === 'en' ? 'About Us' : 'من نحن'}
                                    </Link>
                                </li>
                                <li className="nav-item dropdown" onClick={handleDropdownMenuClick}>
                                    <Link
                                        className="dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded={openSection !== null ? 'true' : 'false'} // حالة التوسيع
                                        onClick={handleDropdownToggle} // منع التأثير على القائمة الأصلية
                                    >
                                        <FaServer className="nav-icon" />{' '}
                                        {language === 'en' ? 'Services' : 'الخدمات'}
                                    </Link>
                                    <ul className="dropdown-menu dropdown-grid">
                                        <li>
                                            <h5
                                                className="dropdown-header"
                                                role="button"
                                                onClick={() => toggleSection('germs')}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {language === 'en' ? 'Germs' : 'جراثيم'}
                                            </h5>
                                            {openSection === 'germs' && (
                                                <ul className="list-unstyled">
                                                    {germs.map((insect, index) => (
                                                        <li key={index}>
                                                            <Link className="dropdown-item" to={insect.path}>
                                                                {language === 'en' ? insect.name_en : insect.name_ar}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <h5
                                                className="dropdown-header"
                                                role="button"
                                                onClick={() => toggleSection('insects')}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {language === 'en' ? 'Pests' : 'الآفـــات'}
                                            </h5>
                                            {openSection === 'insects' && (
                                                <ul className="list-unstyled">
                                                    {insects.map((insect, index) => (
                                                        <li key={index}>
                                                            <Link className="dropdown-item" to={insect.path}>
                                                                {language === 'en' ? insect.name_en : insect.name_ar}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="icon-nav-link" to="/Home/contact.js">
                                        <IoCall className="nav-icon" />{' '}
                                        {language === 'en' ? 'Contact' : 'اتصل بنا'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>




                <div className='langauge-btn col-lg-1 col-xl-1 col-md-2 col-2'>
                    <button onClick={toggleLanguage} className="btn col-md-8 m-0">
                        {language === 'en' ? 'ع' : 'En'}
                    </button>
                </div>
            </div>


        </>
    )
}

export default Nav;
