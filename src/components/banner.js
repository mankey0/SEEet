import React, { useState, useEffect } from 'react';
import photo_slide1 from '../assets/team.jpg';
import photo_slide2 from '../assets/services.jpg';
import photo_slide3 from '../assets/Comprehensive-Coverage.jpg';
import photo_slide4 from '../assets/ask.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Slider = [

    {
        title: {
            en: "Why Choose Us",
            ar: "لماذا تختارنا",
        },
        url: photo_slide1,
        sectionId: "section1",
    },
    {
        title: {
            en: "Our Services",
            ar: "خدماتنا",
        },
        url: photo_slide2,
        sectionId: "Services",
    },
    {
        title: {
            en: "Comprehensive Coverage",
            ar: "تغطية شاملة",
        },
        url: photo_slide3,
        sectionId: "Comprehensive-Coverage"
    },
    {
        title: {
            en: "Your Questions",
            ar: "اسئلة",
        },
        url: photo_slide4,
        sectionId: "asks"
    },
];

const Banner = ({ language }) => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = {
        en: [
            "Seet Saudi for Pest, Rodent, and Germ Control Services",
            "Seet Saudi Environmental Services, Pest Control is Our Game."
        ],
        ar: [
            "صيت السعودية لخدمـات مكـافحة الآفات والقوارض والجراثيم",
            "صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا"
        ]
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts[language].length);
        }, 4000);
        return () => clearInterval(interval);
    });

    const MotionLink = motion(Link);
    return (
        <div id="homeBanner"  className={`banner-carousel row m-0 ${language === 'en' ? 'ltr' : 'rtl'}`}>
            <div className="carousel-content col-md-5 col-11">
                <motion.div
                    className="text-content"
                    initial={{ opacity: 0, x: language === 'en' ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        key={textIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {texts[language][textIndex]}
                    </motion.h1>
                </motion.div>
                <motion.hr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} />
                <MotionLink
                    whileInView={{ opacity: 1 }}
                    to="/Home/contact.js"
                    className="btn col-lg-4 col-md-7 col-sm-6"
                >
                    {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </MotionLink>
            </div>

            <Swiper
                className="myswiper col-md-6 col-11"
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={2}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1560: {
                        slidesPerView: 3,
                    },
                }}
            >
                {Slider.map((data, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ backgroundImage: `url(${data.url})` }}
                        className="myswiper-slider"
                    >
                        <div>
                            <h2>{language === 'en' ? data.title.en : data.title.ar}</h2>
                            <a
                                href={`#${data.sectionId}`}
                                className="btn"
                            >
                                {language === 'en' ? 'Explore' : 'استكشاف'}
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;