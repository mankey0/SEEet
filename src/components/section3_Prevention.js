import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import imgPrevention from '../assets/Prevention.jpeg'
import { motion, AnimatePresence } from 'framer-motion'
import Restaurants from '../assets/Restaurants.jpg'
import Food_Manufacturing from '../assets/Food-Manufacturing.jpg'
import Supermarkets from '../assets/Supermarkets.jpg'
import Logistics from '../assets/Logistics.jpg'
import Hotels from '../assets/Hotels.jpg'
import Office from '../assets/Office.jpg'
import Education from '../assets/Education.jpg'
import Non_Food from '../assets/Non-Food.jpg'
import Property from '../assets/Property.jpg'
import Hospitals from '../assets/Hospitals.jpg'
import Government from '../assets/Government.jpg'
import house from '../assets/house.jpg'

const Section2_Prevention = ({ language }) => {
    const [showMore, setShowMore] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isSwiperRunningHotels, setIsSwiperRunningHotels] = useState(true);
    const [isSwiperRunningProperty, setIsSwiperRunningProperty] = useState(true);
   
    const [isFlipped, setIsFlipped] = useState(false); // حالة الدوران
    const [isHovered, setIsHovered] = useState(false); // التحقق من التفاعل مع الكارد

    useEffect(() => {
        let interval;
        if (!isHovered) {
            // إذا لم يكن هناك hover، استمر في التقليب التلقائي
            interval = setInterval(() => {
                setIsFlipped((prev) => !prev);
            }, isFlipped ? 5000 : 3000); // النص: 5 ثوانٍ، الصورة: 3 ثوانٍ
        }
        return () => clearInterval(interval); // تنظيف المؤقت
    }, [isFlipped, isHovered]);




    const toggleShowMore = () => {
        setShowMore(!showMore);
    };


    const texts = {
        en: {
            title: 'Commercial',
            description: `Pests pose a huge risk to business's public health and reputation, leading to enormous loss. 
    We guarantee a proactive pest management program that protects your business. We identify pests and the 
    constructive environment leading to the issue. Then, we propose the ideal control plan and follow-up to 
    make sure the problem is solved. Our pest management professionals are expertly trained to deal with pests 
    without interrupting your daily operations.`,



            restaurantsTitle: 'Restaurants & Coffee Shops',
            restaurantsDescription: `A wide range of pests can infest food preparation and storage areas. Seet Saudia provides 
    you with a customized plan offering protection from pests all year long. We believe that each facility needs to 
    be treated with different `,
            restaurantsExpanded: `strategies. We help you in educating your staff on how to identify pests and access points,
    as well as further instructions and recommendations regarding sanitation.`,





            foodManufacturingTitle: 'Food Manufacturing Industries',
            foodManufacturingDescription: `Seet is certified with ISO 22000 and fully aware of the HACCP, BRC, AIM, FSSC 
    22000 standards. We grant you the best service and performance that meets your audit requirements. 
    Our plan is designed to cover your needs and provides `,
            foodManufacturingExpanded: `protection against possible pests. Any pest threats will 
    be documented in our reports. Emergency service is available 24/7 with no extra cost. Your business safety is our priority.`,



            groceryTitle: 'Grocery Stores & Supermarkets',
            groceryDescription: `No pests shall be allowed in grocery stores. Seet Saudia works in maintaining the safest 
    environment for your business. We provide you with expert solutions based on scientific research and 
    innovative control procedures. `,
            groceryExpanded: `Our staff is equipped with the needed knowledge, certifications 
    (e.g., ISO 22000 - Food Safety Management) and tools to eliminate pests from their source. We are ready 24/7 
    to ensure the safety of your facility.`,



            logisticsTitle: 'Logistics & Warehouses',
            logisticsDescription: `Warehouses are susceptible to pests such as stored product insects, German cockroaches, 
    mice, and more due to the possibility of infested shipments arriving at any time. Pests contaminate products 
    and raw materials by droppings,`,
            logisticsExpanded: `cast skin, dead insects, etc. Our role is to offer you a pest-free environment 
    for your staff to work safely.`,



            hotelsTitle: 'Hotels & Motels',
            hotelsDescription: `Pests such as ants, mice, and even bed bugs pose a huge risk to hotels' reputation. 
    In Seet Saudia, we monitor pests' activity to control and prevent pests' access to the penthouse.`,
            hotelsExpanded: `Laundry room and anywhere in-between. With many international hotel rooms pest-free. 
    We use science, data, research, and accurate analysis to deliver the best solution.`,
            hotelsExpanded2: `We provide reports to keep you up to date with each process. Partner with Seet Saudia to eliminate pests from 
    their breeding sites and entry points.`,




            OfficeTitle: 'Office Buildings & Banks',
            OfficeDescription: `Pests in office buildings pose huge health risks to employees and other individuals, 
    which may affect the company's reputation. Seet Saudia grants you the best service and pest-free work environment.`,

            EducationTitle: 'Education & Daycares',
            EducationDescription: `The presence of pests in educational facilities causes panic to students, 
    damage to buildings, and most importantly increases the possibility of disease transmission. 
    Seet Saudia designs a specific plan to `,
            EducationExpanded: `keep your facility safe, whether it is a daycare, school, or university. 
    Seet Saudia offers a pest-free educational atmosphere.`,

            Non_FoodTitle: 'Non-Food Retailers and Shopping Malls',
            Non_FoodDescription: `Imagine having pests inside your store! Retail stores and malls are susceptible to mice, 
    flies, and stored product insects, which will damage your customer's trust. Seet will deliver `,
            Non_FoodExpanded: `you a pest-free environment with innovative pest control strategies.`,


            Property_ManagementTitle: 'Property Management',
            Property_ManagementDescription: `Keeping tenants satisfied is a major part of property management's reputation. 
    With a generous amount of water, food, and shelter, it is very likely for pests to infest residential buildings. 
    Preventative pest control is the key to a pest-free `,



            Property_ManagementExpanded: `environment. Choosing the right pest control company is critical for protecting your valuable property. 
    Seet uses unique and efficient control methods for rapid and safe pest elimination. Our experts will offer`,
            Property_ManagementExpanded2: ` you a detailed inspection to develop an optimum pest management plan. Seet Saudia covers your facility with the ideal 
    number of skillful technicians to ensure a healthy and happy atmosphere.`,


            HospitalsTitle: 'Hospitals & Clinics',
            HospitalsDescription: `Keeping healthcare facilities pest-free is very critical. Pests in hospitals, clinics, or doctor's offices increase the spread of diseases. 
    Seet Saudia handles healthcare facilities differently, offering you the safest pest management practices.`,
            HospitalsExpanded: `We develop a proactive plan implemented by a highly trained team to deal with a sensitive facility like yours.`,


            GovernmentTitle: 'Government Buildings',
            GovernmentDescription: `Seet is serving a variety of governmental organizations within different sectors. Each client has their own customized pest management plan 
    that ensures ideal protection against pests. We offer you the safest pest control approaches to deliver you a healthy work environment.`,



            ResidentialTitle: 'Residential',
            ResidentialDescription: `House pests can be a huge nuisance and a main source of diseases for your family and pets. 
    To control pests, an intensive knowledge of their behavior, conducive environment, and the right control methods are required. 
    Seet technicians are highly experienced when dealing with residential pests, offering you and your family a secure pest-free atmosphere using the latest pest management technologies and safest pesticides.`,
        },


        ar: {
            title: 'تجاري',
            description: `تشكل الآفات خطرًا كبيرًا على الصحة العامة وسمعة الأعمال التجارية، مما يؤدي إلى خسائر فادحة.
    نضمن لك برنامجًا لإدارة الآفات بشكل استباقي يحمي عملك. نقوم بتحديد الآفات والبيئة المهيئة التي تؤدي إلى المشكلة.
    ثم نقترح خطة التحكم المثالية والمتابعة لضمان حل المشكلة. يتم تدريب محترفينا في إدارة الآفات على التعامل مع الآفات
    دون التأثير على العمليات اليومية.`,

            restaurantsTitle: 'المطاعم والمقاهي',
            restaurantsDescription: `يمكن أن تصيب مجموعة واسعة من الآفات مناطق إعداد الطعام وتخزينه. توفر صيت السعودية خطة مخصصة
    توفر الحماية من الآفات على مدار العام. نؤمن بأن كل منشأة تحتاج إلى استراتيجيات مختلفة. نساعدك في تعليم موظفيك`,
            restaurantsExpanded: `كيفية تحديد الآفات ونقاط الوصول، بالإضافة إلى المزيد من التعليمات والتوصيات بشأن النظافة.`,


            foodManufacturingTitle: 'صناعات تصنيع الأغذية',
            foodManufacturingDescription: `Seet حاصلة على شهادة ISO 22000 ومطلعة تمامًا على معايير HACCP و BRC و AIM و FSSC 22000.
    نقدم لك أفضل خدمة وأداء يتماشى مع متطلبات التدقيق الخاصة بك. تم تصميم خطتنا لتلبية احتياجاتك و`,
            foodManufacturingExpanded: "وتوفير الحماية ضد الآفات المحتملة . سيتم توثيق أي تهديدات من الآفات في تقاريرنا. تتوفر خدمة الطوارئ على مدار الساعة طوال أيام الأسبوع دون أي تكلفة إضافية. سلامة عملك هي أولويتنا.",

            groceryTitle: 'محلات البقالة والسوبر ماركت',
            groceryDescription: `يجب ألا تكون هناك آفات في محلات البقالة. تعمل صيت السعودية على الحفاظ على البيئة الأكثر أمانًا
    لعملك. نقدم لك حلولاً خبيرة بناءً على البحث العلمي وإجراءات التحكم المبتكرة. فريقنا مزود بالمعرفة اللازمة والشهادات`,
            groceryExpanded: `(مثل ISO 22000 - إدارة سلامة الأغذية) والأدوات للقضاء على الآفات من مصدرها. نحن جاهزون على مدار الساعة لضمان
    سلامة منشأتك.`,

            logisticsTitle: 'اللوجستيات والمستودعات',
            logisticsDescription: `المستودعات معرضة للآفات مثل حشرات المنتجات المخزنة، الصراصير الألمانية، الفئران والمزيد
    بسبب احتمال وصول شحنات مصابة في أي وقت. تقوم الآفات بتلويث المنتجات والمواد الخام من خلال الفضلات،`,
            logisticsExpanded: `الجلد المتساقط، الحشرات الميتة، وما إلى ذلك. دورنا هو توفير بيئة خالية من الآفات لفريق عملك للعمل بأمان.`,



            hotelsTitle: 'الفنادق والنزل',
            hotelsDescription: `الآفات مثل النمل، الفئران وحتى بق الفراش تشكل خطرًا كبيرًا على سمعة الفنادق.
    في صيت السعودية نراقب نشاط الآفات للتحكم ومنع دخول الآفات إلى الجناح.`,
            hotelsExpanded: `غرفة الغسيل وأي مكان آخر بينهما. مع العديد من غرف الفنادق الدولية الخالية من الآفات.
    نحن نستخدم العلوم والبيانات والبحث والتحليل الدقيق لتقديم أفضل الحلول. نحن نقدم تقارير لتبقيك على اطلاع بكل عملية.`,
            hotelsExpanded2: `شارك مع صيت السعودية للتخلص من الآفات من مواقع تكاثرها ونقاط دخولها`,


            OfficeTitle: 'المباني الإدارية والبنوك',
            OfficeDescription: `الآفات في المباني الإدارية تشكل تهديدًا كبيرًا لصحة الموظفين والأفراد الآخرين، مما قد يؤثر سلبًا على سمعة الشركة.
    تقدم صيت السعودية أفضل الخدمات لضمان بيئة عمل خالية من الآفات`,

            EducationTitle: 'التعليم ورياض الأطفال',
            EducationDescription: `وجود الآفات في المنشآت التعليمية يسبب الفزع لدى الطلاب، ويؤدي إلى تلف المباني، والأهم من ذلك يزيد من احتمالية انتقال الأمراض.
    تصمم صيت السعودية خطة محددة للحفاظ على سلامة منشأتك،`,
            EducationExpanded: `سواء كانت روضة أطفال أو مدرسة أو جامعة. تقدم صيت السعودية بيئة تعليمية خالية من الآفات`,


            Non_FoodTitle: 'محلات التجزئة غير الغذائية والمراكز التجارية',
            Non_FoodDescription: `تخيل وجود آفات داخل متجرك! المحلات التجارية والمراكز التجارية عرضة للفئران، الذباب، وحشرات المنتجات المخزنة،
    مما سيلحق الضرر بثقة عملائك. تقدم صيت السعودية`,
            Non_FoodExpanded: `لك بيئة خالية من الآفات باستخدام استراتيجيات مبتكرة لمكافحة الآفات`,

            Property_ManagementTitle: 'إدارة الممتلكات',
            Property_ManagementDescription: `الحفاظ على رضا المستأجرين هو جزء أساسي من سمعة إدارة الممتلكات. مع توفر المياه والطعام والمأوى بكميات كبيرة،
    فإن من المحتمل جدًا أن تصاب المباني السكنية بالآفات. يعد الوقاية من الآفات هو المفتاح لبيئة خالية من الآفات.`,

            Property_ManagementExpanded: `اختيار شركة مكافحة الآفات المناسبة أمر بالغ الأهمية لحماية ممتلكاتك القيمة. تستخدم صيت السعوديه أساليب فريدة وفعالة للتخلص السريع والآمن من الآفات.
    سيقدم لك خبراؤنا فحصًا مفصلاً لتطوير خطة إدارة آفات مثالية.`,
            Property_ManagementExpanded2: `تغطي صيت السعودية منشأتك بالعدد المثالي من الفنيين المهرة لضمان بيئة صحية وسعيد`,

            HospitalsTitle: 'المستشفيات والعيادات',
            HospitalsDescription: `من المهم جدًا الحفاظ على منشآت الرعاية الصحية خالية من الآفات. فالآفات في المستشفيات، العيادات، أو مكاتب الأطباء تزيد من انتشار الأمراض.
    تتعامل صيت السعودية مع منشآت الرعاية الصحية بشكل مختلف،`,
            HospitalsExpanded: `حيث تقدم لك آمن أساليب إدارة الآفات. نطور خطة استباقية يتم تنفيذها من قبل فريق مدرب تدريبًا عاليًا للتعامل مع منشأة حساسة مثل منشأت`,

            GovernmentTitle: 'المباني الحكومية',
            GovernmentDescription: `تقدم Seet خدماتها لعدد من المنظمات الحكومية في مختلف القطاعات. كل عميل لديه خطة مخصصة لإدارة الآفات تضمن حماية مثالية ضد الآفات.
    نقدم لك أفضل أساليب مكافحة الآفات لضمان بيئة عمل صحية وآمنة.`,

            ResidentialTitle: 'المنازل',
            ResidentialDescription: `الآفات في المنازل يمكن أن تكون مصدر إزعاج كبير ومصدرًا رئيسيًا للأمراض لعائلتك وحيواناتك الأليفة. 
    للسيطرة على الآفات، يتطلب الأمر معرفة عميقة بسلوكها، والبيئة المهيئة لها، وأساليب التحكم الصحيحة. 
    يتمتع فنيوا صيت  بخبرة عالية في التعامل مع الآفات المنزلية، ويقدمون لك ولعائلتك بيئة آمنة خالية من الآفات باستخدام أحدث تقنيات إدارة الآفات وأأمن المبيدات.`,
        }

    };



    const currentTexts = texts[language];

    useEffect(() => {
        setActiveSlide(0);
    }, [language]);








    return (
        <>

            <div className="Prevention row m-0" id='Comprehensive-Coverage'>
                <div
                    className="cardPrevention col-md-11 col-11"
                    onMouseEnter={() => {
                        setIsHovered(true);
                        setIsFlipped(true); // اقلب البطاقة فورًا عند التفاعل
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="card-innerPrevention"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-frontPrevention">
                            <img src={imgPrevention} className="card-img-top" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                        </div>
                        <div className="card-backPrevention col-md-11 col-12">
                            <h5 className="card-title col-md-10 col-12">{currentTexts.title}</h5>
                            <p className="card-text col-md-10 col-12">{currentTexts.description}</p>
                        </div>
                    </motion.div>
                </div>
                <div className='Prevention-card col-md-11 col-12'>
                    <div className='first-show col-12'>
                        
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0.5, x: 100 }}
                            transition={{ duration: 1 }}
                            className="everycard col-xl-5 col-md-10 col-11"
                        >
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={Restaurants} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                    </div>
                                    <div
                                        className="col-md-7"
                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">{currentTexts.restaurantsTitle}</h5>
                                            <Swiper
                                                key={language}
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                            >
                                                <SwiperSlide key="description">
                                                    <p className="card-text">{currentTexts.restaurantsDescription}</p>
                                                </SwiperSlide>
                                                <SwiperSlide key="expanded">
                                                    <p className="card-text">{currentTexts.restaurantsExpanded}</p>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="dots-container">
                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0.5, x: -100 }}
                            transition={{ duration: 1 }}
                            className="everycard col-xl-5 col-md-10 col-11"
                        >
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={Food_Manufacturing} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                    </div>
                                    <div
                                        className="col-md-7"
                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">{currentTexts.foodManufacturingTitle}</h5>
                                            <Swiper
                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                            >
                                                <SwiperSlide key="description">
                                                    <p className="card-text">{currentTexts.foodManufacturingDescription}</p>
                                                </SwiperSlide>
                                                <SwiperSlide key="expanded">
                                                    <p className="card-text">{currentTexts.foodManufacturingExpanded}</p>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="dots-container">
                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0.5, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="everycard col-xl-5 col-md-10 col-11"
                        >
                            <div className="card">
                                <div className="row g-0">

                                    <div
                                        className="col-md-7"
                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">{currentTexts.groceryTitle}</h5>
                                            <Swiper
                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                            >
                                                <SwiperSlide key="description">
                                                    <p className="card-text">{currentTexts.groceryDescription}</p>
                                                </SwiperSlide>
                                                <SwiperSlide key="expanded">
                                                    <p className="card-text">{currentTexts.groceryExpanded}</p>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="dots-container">
                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={Supermarkets} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0.5, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="everycard col-xl-5 col-md-10 col-11"
                        >
                            <div className="card">
                                <div className="row g-0">

                                    <div
                                        className="col-md-7"
                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">{currentTexts.logisticsTitle}</h5>
                                            <Swiper
                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                            >
                                                <SwiperSlide key="description">
                                                    <p className="card-text">{currentTexts.logisticsDescription}</p>
                                                </SwiperSlide>
                                                <SwiperSlide key="expanded">
                                                    <p className="card-text">{currentTexts.logisticsExpanded}</p>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="dots-container">
                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={Logistics} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {
                        !showMore && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .5, duration: .5 }}
                                className='show-more  col-lg-2  col-md-4 col-sm-4' >
                                <a href='#s' onClick={toggleShowMore} className='btn' style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    textAlign: "center",
                                    cursor: "pointer",
                                }}>
                                    {language === "ar" ? "اظهار المزيد" : "Show More"}
                                </a>
                            </motion.div>
                        )
                    }

                    <AnimatePresence>
                        {
                            showMore && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 1, height: 0 }}
                                    transition={{
                                        opacity: { duration: 2, ease: 'easeInOut' },
                                        height: { duration: 2, ease: 'easeInOut' },
                                        exit: {
                                            opacity: { duration: 0.1, ease: 'easeInOut' },
                                            height: { duration: 0.1, ease: 'easeInOut' },
                                        },
                                    }}
                                    className="Second-cards col-12"
                                >
                                    <div className='all-cards-secound col-12'>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: 100 }}
                                            transition={{ duration: 2 }}
                                            className="everycard col-xl-5 col-md-10 col-11"
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src={Hotels} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                    <div
                                                        className="col-md-7"
                                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                                    >
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.hotelsTitle}</h5>
                                                            <Swiper
                                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                loop={true}
                                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                                            >
                                                                <SwiperSlide key="description">
                                                                    <p className="card-text">{currentTexts.hotelsDescription}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide key="expanded1">
                                                                    <p className="card-text">{currentTexts.hotelsExpanded}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide key="expanded2">
                                                                    <p className="card-text">{currentTexts.hotelsExpanded2}</p>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="dots-container">
                                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 2 ? 'active' : ''}`}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: .5, x: -100 }}
                                            transition={{ duration: 2 }}
                                            className='everycard col-xl-5 col-md-10 col-11'
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src={Office} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.OfficeTitle}</h5>
                                                            <p className="card-text">{currentTexts.OfficeDescription}</p>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: 100 }}
                                            transition={{ duration: 2.5 }}
                                            className="everycard col-xl-5 col-md-10 col-11"
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div
                                                        className="col-md-7"
                                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                                    >
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.EducationTitle}</h5>
                                                            <Swiper
                                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                loop={true}
                                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                                            >
                                                                <SwiperSlide key="description">
                                                                    <p className="card-text">{currentTexts.EducationDescription}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide key="expanded">
                                                                    <p className="card-text">{currentTexts.EducationExpanded}</p>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="dots-container">
                                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <img src={Education} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: -100 }}
                                            transition={{ duration: 2.5 }}
                                            className="everycard col-xl-5 col-md-10 col-11"
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div
                                                        className="col-md-7"
                                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                                    >
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.Non_FoodTitle}</h5>
                                                            <Swiper
                                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                loop={true}
                                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                                            >
                                                                <SwiperSlide key="description">
                                                                    <p className="card-text">{currentTexts.Non_FoodDescription}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide key="expanded">
                                                                    <p className="card-text">{currentTexts.Non_FoodExpanded}</p>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="dots-container">
                                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <img src={Non_Food} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: 100 }}
                                            transition={{ duration: 3 }}
                                            className="everycard col-xl-5 col-md-10 col-11"
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src={Property} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                    <div
                                                        className="col-md-7"
                                                        onMouseEnter={() => setIsSwiperRunningProperty(false)}
                                                        onMouseLeave={() => setIsSwiperRunningProperty(true)}
                                                    >
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.Property_ManagementTitle}</h5>
                                                            <Swiper
                                                                key={language}
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                loop={true}
                                                                autoplay={isSwiperRunningProperty ? { delay: 2000, disableOnInteraction: false } : false}
                                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                                                onSwiper={(swiper) => setActiveSlide(swiper.realIndex)}
                                                            >
                                                                <SwiperSlide>
                                                                    <p className="card-text">{currentTexts.Property_ManagementDescription}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <p className="card-text">{currentTexts.Property_ManagementExpanded}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <p className="card-text">{currentTexts.Property_ManagementExpanded2}</p>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="dots-container">
                                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 2 ? 'active' : ''}`}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: -100 }}
                                            transition={{ duration: 3 }}
                                            className="everycard col-xl-5 col-md-10 col-11"
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src={Hospitals} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                    <div
                                                        className="col-md-7"
                                                        onMouseEnter={() => setIsSwiperRunningHotels(false)}
                                                        onMouseLeave={() => setIsSwiperRunningHotels(true)}
                                                    >
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.HospitalsTitle}</h5>
                                                            <Swiper
                                                                key={language} // إعادة تهيئة السويبر عند تغيير اللغة
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                loop={true}
                                                                autoplay={isSwiperRunningHotels ? { delay: 3000, disableOnInteraction: false } : false}
                                                                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                                            >
                                                                <SwiperSlide key="description">
                                                                    <p className="card-text">{currentTexts.HospitalsDescription}</p>
                                                                </SwiperSlide>
                                                                <SwiperSlide key="expanded">
                                                                    <p className="card-text">{currentTexts.HospitalsExpanded}</p>
                                                                </SwiperSlide>
                                                            </Swiper>
                                                            <div className="dots-container">
                                                                <span className={`dot ${activeSlide === 0 ? 'active' : ''}`}></span>
                                                                <span className={`dot ${activeSlide === 1 ? 'active' : ''}`}></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0.5, x: 100 }}
                                            transition={{ duration: 3.5 }}
                                            className='everycard col-xl-5 col-md-10 col-11'
                                        >
                                            <div className="card">
                                                <div className="row g-0">
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{currentTexts.groceryTitle}</h5>
                                                            <p className="card-text">{currentTexts.groceryDescription}</p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <img src={Government} className="img-fluid rounded-start" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: .5, duration: .5 }}
                                        className='show-more col-lg-2  col-md-4 col-sm-4'>
                                        <a
                                            href="#4"
                                            onClick={toggleShowMore}
                                            className="btn"
                                            style={{
                                                textDecoration: "none",
                                                color: "#fff",
                                                display: "block",
                                                width: "100%",
                                                height: "100%",
                                                textAlign: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {language === "ar" ? "اظهار القليل" : "Show More"}
                                        </a>
                                    </motion.div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                <div
                    className="cardPrevention col-md-11 col-12"
                    onMouseEnter={() => {
                        setIsHovered(true); // يتم تفعيل التفاعل
                        setIsFlipped(true); // تقلب البطاقة مباشرة
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false); // إنهاء التفاعل
                    }}
                >
                    <motion.div
                        className="card-innerPrevention"
                        animate={{ rotateY: isFlipped ? 180 : 0 }} // الدوران يعتمد على حالة isFlipped
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-frontPrevention">
                            <img src={house} className="card-img-top" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                        </div>
                        <div className="card-backPrevention">
                            <h5 className="card-title col-md-10 col-12">{currentTexts.ResidentialTitle}</h5>
                            <p className="card-text col-md-10 col-12">{currentTexts.ResidentialDescription}</p>
                        </div>
                    </motion.div>
                </div>
            </div >
        </>
    )
}

export default Section2_Prevention











