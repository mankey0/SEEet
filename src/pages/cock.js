import { FaCheck } from "react-icons/fa";
import Advantages_img from '../assets/Advantages.jpg';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/footer'
import Pest_Control from '../assets/Pest and Rodent Control/cockroaches control.jpg'
import cockroaches1 from '../assets/Pest and Rodent Control/cockroaches control-1.jpg'
import cockroaches2 from '../assets/Pest and Rodent Control/cockroaches control-2.jpg'
import ants_icon from '../assets/icons pest and germs control/ant.png'
import Flies_icon from '../assets/icons pest and germs control/fruit-fly.png'
import Bed_bugs_icon from '../assets/icons pest and germs control/bed-bug.png'
import Rodents_icon from '../assets/icons pest and germs control/rodent.png'
import Stored_Product_Pests_icon from '../assets/icons pest and germs control/Stored-Product-Pests.png'
import snackes_icon from '../assets/icons pest and germs control/snake.png'
import Covid_19 from '../assets/icons pest and germs control/coronavirus.png'
import Hantavirus from '../assets/icons pest and germs control/Hantavirus.png'
import influenzaA from '../assets/icons pest and germs control/influenza-A-removebg-preview.png'
import HepatitisB from '../assets/icons pest and germs control/hepatitis-b.png'
import HepatitisC from '../assets/icons pest and germs control/hepatitis-c.png'
import Hiv from '../assets/icons pest and germs control/hiv.png'

const Cock = ({ language }) => {
  const [currentlyActive, setCurrentlyActive] = useState(4);
  const location = useLocation();

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(newActiveAccordion === currentlyActive ? null : newActiveAccordion);
  };

  const insects = [
    { name: language === 'en' ? 'Ants' : 'النمل', path: '/Home/services/ants' },
    { name: language === 'en' ? 'Flies' : 'الذباب', path: '/Home/services/flies' },
    { name: language === 'en' ? 'Bed Bugs' : 'بق الفراش', path: '/Home/services/bed-bugs' },
    { name: language === 'en' ? 'Stored Product Pests' : 'آفات المنتجات المخزنة', path: '/Home/services/stored-product-pests' },
    { name: language === 'en' ? 'Rodents' : 'القوارض', path: '/Home/services/Rodents' },
    { name: language === 'en' ? 'cockroaches' : 'الصراصير', path: '/Home/services/cockroaches' },
    { name: language === 'en' ? 'Snakes' : 'الثعابين', path: '/Home/services/snakes' },
  ];
  const germs = [
    { name: language === 'en' ? 'Covid 19' : 'كوفيد-19', path: '/Home/services/Covid19' },
    { name: language === 'en' ? 'Hantavirus' : "فيروس هانتا", path: '/Home/services/Hantavirus' },
    { name: language === 'en' ? 'Influenza A' : "إنفلونزا A", path: '/Home/services/InfluenzaA' },
    { name: language === 'en' ? 'Hepatitis B' : "التهاب الكبد B", path: '/Home/services/HepatitisB' },
    { name: language === 'en' ? 'Hepatitis C' : "التهاب الكبد C", path: '/Home/services/HepatitisC' },
    { name: language === 'en' ? 'Hiv' : "فيروس نقص المناعة البشرية", path: '/Home/services/Hiv' },
  ];


  const text = {
    en: {
      banner: {
        title: 'cockroaches Control',
        home: 'Home',
        services: 'Services',
      },
      caption_services: {
        title: "cockroaches Control Services",
        caption: "Cockroaches contaminate vast quantities of materials each year and are potential carriers of diseases. Cockroaches feed from sewers, drains and garbage areas which bring them in contact with a variety of pathogens including salmonella, typhoid, hepatitis and tuberculosis",
        subheading_1: "Dangers of cockroaches:",
        subheading_2: "The Correct Way to Get Rid of cockroaches:",
        subheading_3: "Features of seet:",
      },

      accordion1: {
        title: "Cockroaches are pests that can cause a variety of health and environmental issues in homes and offices:",
        content: [
          "Bacterial Contamination: Cockroaches carry many types of bacteria and germs, which can spread to furniture, leading to contamination. These germs can cause diseases such as food poisoning, gastritis, and diarrhea.",
          "Furniture Damage: Cockroaches can damage upholstered furniture or wooden furniture. Some types of cockroaches feed on organic materials like paper and wood, gradually causing furniture damage over time.",
          "Unpleasant Odor: Cockroaches secrete chemicals from their bodies, leaving a foul odor on furniture, especially if they gather in specific areas and breed.",
          "Allergies: Cockroaches can trigger allergic reactions in people who are sensitive to insects or pests. Some individuals may experience respiratory problems or skin rashes due to the presence of cockroach droppings or discarded exoskeletons.",
        ]
      },



      accordion2: {
        title: "The Correct Way to Get Rid of cockroaches:",
        content: [
          "Early Diagnosis: cockroaches presence should be detected early to control them before they cause significant damage. A pest control expert can be called to assess the situation and diagnose the infestation.",
          "Chemical Control: The most common method for getting rid of cockroaches involves using appropriate pesticides. A pest control expert should apply the pesticides correctly according to recommended doses and safety guidelines.",
          "Sealing and Insulation: Sealing and insulation processes should be carried out to prevent the spread of cockroaches. This includes replacing infested wood and sealing gaps and cavities to prevent cockroaches from reaching other areas."
        ]
      },


      accordion3: {
        title: "Features of Sert cockroaches Control Company:",
        content: [
          "Experience and Professionalism: The company has extensive experience in cockroaches control and works professionally to provide high-quality services.",
          "Use of Advanced Technologies: Sert uses advanced technologies and modern tools to detect and effectively control cockroaches. It relies on modern techniques to ensure comprehensive elimination of cockroaches.",
          "Customized Solutions: The company offers customized and innovative solutions for cockroaches control, based on studying each case and providing individualized strategies for each client according to their specific needs.",
          "Technical Support and Consultation: Sert provides ongoing technical support and consultation to its clients. It offers advice and guidance to maintain treated areas free from cockroaches and prevent re-infestation.",
          "Commitment to Quality and Safety: The company prioritizes quality and safety in delivering its services. It uses safe and effective materials and adheres to health and environmental standards and practices."
        ]
      },


      accordion4: {
        title: "In summary,",
        content: [
          "Sert cockroaches Control Company offers effective and customized solutions, with a focus on experience, professionalism, and quality. It relies on modern technologies and provides technical support to clients, while committing to quality and safety in all its services."
        ]
      },


      Advantages: {
        Advantages_title: "Advantages of seet for Pest and germs Control:",
        Advantages_caption: "The company is committed to applying European safety and quality standards in all its services, whether for pest or rodent control. It ensures that all products used are completely safe for the health of the family and have no negative impact on health, either directly or indirectly.",
        Advantages_points: [
          "Highly trained teams at the highest level.",
          "The latest equipment and tools for germs control.",
          "Professionalism and the ability to execute all pest control operations.",
        ]
      },
      
      bedBugs: {
        title: "Bed Bugs",
        description: "Residential buildings and hotels are particularly vulnerable to bed bug problems because of the high-density human populations.",
        link: "Read More",
      },

      rodents: {
        title: "Rodents",
        description: "Residential buildings and hotels are particularly vulnerable to bed bug problems because of the high-density human populations.",
        link: "Read More",
      },
      snakes: {
        title: "Snakes",
        description: "Snakes can pose serious risks to people and animals. Their presence in or around buildings can be alarming and dangerous. ",
        link: "Read More",
      },
      storedProductPests: {
        title: "Stored Product Insects",
        description: "Stored Product Insects are a large group of pests, including beetles and moths. They are responsible for contaminating ",
        link: "Read More",
      },
      Flies: {
        title: "Flies",
        description: "Flies are one of the most common disease carrier pests. Many species are collectively called filth flies,",
        link: "Read More",
      },
      Covid_19: {
        title: "Covid-19 (SARS-Cov-2)",
        description: `The novel coronavirus, also known as SARS-CoV-2, is a virus that causes COVID-19. It was first identified in Wuhan, China,`,
        link: "Read More",
      },
      Hantavirus: {
        title: "Hantavirus",
        description: `Hantavirus is a type of virus transmitted to humans through direct or indirect contact with infected rodents, such as mice and rats.`,
        link: "Read More",
      },
      influenzaA: {
        title: "influenza A",
        description: `Influenza A is a type of flu virus that affects the respiratory system. It is the most common type of influenza and is known`,
        link: "Read More",
      },
      HepatitisB: {
        title: "Hepatitis B",
        description: "Hepatitis B is a viral infection that affects the liver, caused by the Hepatitis B Virus (HBV). It is one of the most common liver diseases ",
        link: "Read More",
      },
      HepatitisC: {
        title: "Hepatitis C",
        description: `Hepatitis C is a viral disease that affects the liver and is caused by the hepatitis C virus (HCV)`,
        link: "Read More",
      },
      Hiv: {
        title: "HIV ",
        description: `Human Immunodeficiency Virus (HIV) is a virus that attacks the immune system, weakening the body's ability to fight infections `,
        link: "Read More",
      },

      Ants: {
        title: "Ants",
        description: "Ants are social insects that live in large, organized colonies containing millions of individuals. They are ",
        link: "Read More",

      }


    },
    ar: {
      banner: {
        title: 'مكافحة الصراصير',
        home: 'الرئيسية',
        services: 'الخدمات',
      },
      caption_services: {
        title: "خدمات مكافحة الصراصير",
        caption: "تلوث الصراصير كميات كبيرة من المواد سنويًا وهي ناقلات محتملة للأمراض. تتغذى الصراصير من المجاري والمصارف ومناطق القمامة مما يجعلها على اتصال مع مجموعة متنوعة من مسببات الأمراض بما في ذلك السالمونيلا، التيفوئيد، التهاب الكبد والسل.",
        subheading_1: " مخاطر الصراصير :",
        subheading_2: " الطريقة الصحيحة للتخلص من الصراصير:",
        subheading_3: " مميزات شركة صيت:",
      },
      accordion1: {
        title: "الصراصير تعتبر من الآفات التي يمكن أن تسبب العديد من المشاكل الصحية والبيئية في المنازل والمكاتب:",
        content: [
          "التلوث البكتيري: الصراصير تحمل معها العديد من البكتيريا والجراثيم التي يمكن أن تنتقل إلى الأثاث، مما يؤدي إلى تلوثه. هذه الجراثيم قد تسبب أمراضًا مثل التسمم الغذائي، التهاب المعدة، والإسهال.",
          "التسبب في تلف الأثاث: الصراصير يمكن أن تضر بالأثاث المنجّد أو المصنوع من الخشب. فبعض أنواع الصراصير تتغذى على المواد العضوية مثل الورق والخشب، مما يؤدي إلى تلف الأثاث بمرور الوقت.",
          "الرائحة الكريهة: الصراصير تفرز مواد كيميائية من جسمها قد تترك رائحة كريهة على الأثاث، خاصة إذا كانت تتجمع في مناطق معينة وتتكاثر.",
          "الحساسية: قد تسبب الصراصير ردود فعل تحسسية للأشخاص الذين لديهم حساسية من الفيروسات أو الحشرات. بعض الأشخاص قد يعانون من مشاكل تنفسية أو حكة في الجلد بسبب وجود براز الصراصير أو الجلد المتساقط.",
        ]
      },
      accordion2: {
        title: "للتخلص الفعال من الصراصير يجب اتباع الخطوات التالية:",
        content: [
          " تنظيف المكان بشكل دوري: الصراصير عادة ما تنجذب إلى الأماكن القذرة والمليئة بفتات الطعام أو القاذورات. لذلك، من المهم تنظيف الأماكن المحيطة بشكل مستمر. تأكد من تنظيف الأرضيات، الأسطح، والزوايا التي قد تختبئ فيها الصراصير.",
          "التحكم الكيميائي: الطريقة الأكثر شيوعًا للتخلص من الصراصير هي باستخدام المبيدات المناسبة. يجب أن يقوم خبير مكافحة الآفات بتطبيق المبيدات بشكل صحيح وفقًا للجرعات الموصى بها وإرشادات السلامة.",
          " سد الفتحات والشقوق: يمكن للصراصير دخول المنازل من خلال الشقوق الصغيرة أو الفتحات في الجدران أو النوافذ أو الأبواب. استخدم معجون السد أو مواد أخرى لملء الفتحات التي قد تكون مداخل للصراصير. تأكد من غلق الأبواب والنوافذ بإحكام وتأكد من أن هناك مصدات محكمة.",
        ]
      },
      accordion3: {
        title: "مميزات شركة صيت لمكافحة الصراصير:",
        content: [
          "الخبرة والاحترافية: تمتلك الشركة خبرة واسعة في مكافحة الصراصير وتعمل بشكل احترافي لتقديم خدمات عالية الجودة.",
          "استخدام التقنيات المتقدمة: تستخدم صيت تقنيات وأدوات حديثة لاكتشاف الصراصير ومكافحته بفعالية. تعتمد على تقنيات حديثة لضمان القضاء الشامل على الصراصير.",
          "حلول مخصصة: تقدم الشركة حلولاً مخصصة ومبتكرة لمكافحة الصراصير بناءً على دراسة كل حالة وتوفير استراتيجيات فردية لكل عميل وفقًا لاحتياجاته الخاصة.",
          "الدعم الفني والاستشارات: تقدم صيت الدعم الفني المستمر والاستشارات لعملائها. توفر نصائح وإرشادات للحفاظ على المناطق المعالجة خالية من الصراصير ومنع عودة الإصابة.",
          "الالتزام بالجودة والسلامة: تعطي الشركة الأولوية للجودة والسلامة في تقديم خدماتها. تستخدم مواد آمنة وفعالة وتلتزم بالمعايير الصحية والبيئية."
        ]
      },
      accordion4: {
        title: "باختصار:",
        content: [
          "تقدم شركة صست لمكافحة الصراصير حلولًا فعالة ومخصصة، مع التركيز على الخبرة والاحترافية والجودة. تعتمد على التقنيات الحديثة وتوفر الدعم الفني للعملاء، مع الالتزام بالجودة والسلامة في جميع خدماتها."
        ]
      },

      Advantages: {
        Advantages_title: "مزايا شركة صيت لمكافحة الآفات والجراثيم:",
        Advantages_caption: "تلتزم الشركة بتطبيق معايير السلامة والجودة الأوروبية في جميع خدماتها، سواء لمكافحة الآفات أو الجراثيم. وتضمن أن جميع المنتجات المستخدمة آمنة تمامًا لصحة الأسرة ولا تؤثر سلبًا على الصحة سواء بشكل مباشر أو غير مباشر.",
        Advantages_points: [
          "فرق مدربة تدريبًا عاليًا بأعلى مستوى.",
          "أحدث المعدات والأدوات لمكافحة الجراثيم .",
          "الاحترافية والقدرة على تنفيذ جميع عمليات مكافحة الآفات."
        ]
      },
      
      bedBugs: {
        title: "بق الفراش",
        description: "تعتبر المباني السكنية والفنادق معرضة بشكل خاص لمشاكل بق الفراش بسبب الكثافة العالية للسكان. كل شخص يمكن أن يكون مصدرًا لنقل بق الفراش من خلال التعلق بالأمتعة الشخصية.",
        link: "اقرأ المزيد"
      },
      rodents: {
        title: "القوارض",
        description: "الفئران والجرذان يمكن أن تكون آفات عامة تهدد مجموعة واسعة من الصناعات. يعد جرذ النرويج وجرذ السقف وفأر المنزل من أكثر القوارض شيوعًا التي تعيش بالقرب من البشر.",
        link: "اقرأ المزيد"
      },
      snakes: {
        title: "الثعابين",
        description: "تشكل الثعابين مخاطر جسيمة على الناس والحيوانات. يمكن أن تكون وجودها في أو حول المباني أمرًا مقلقًا وخطيرًا. بعض الأنواع سامة وتتطلب تدخلاً مهنيًا فوريًا لإزالتها.",
        link: "اقرأ المزيد"
      },
      storedProductPests: {
        title: "حشرات المنتجات المخزنة",
        description: "الحشرات التي تصيب المنتجات المخزنة تشكل مجموعة كبيرة من الآفات، تشمل الخنافس والعث. تتحمل هذه الحشرات مسؤولية تلوث",
        link: "اقرأ المزيد"
      },
      Flies: {
        title: "الذباب",
        description: "الذباب هو واحد من أكثر الآفات الناقلة للأمراض شيوعًا. يتم الإشارة إلى العديد من الأنواع بمصطلح (الذباب القذر) بسبب ارتباطها بمواد قد تكون ملوثة،",
        link: "اقرأ المزيد"
      },

      Covid_19: {
        title: 'كوفيد-19',
        description: `فيروس كورونا المستجد، المعروف أيضًا باسم (SARS-CoV-2)، هو فيروس يسبب مرض كوفيد-19. ظهر لأول مرة في مدينة ووهان بالصين في ديسمبر 2019،`,
        link: "اقرأ المزيد",
      },
      Hantavirus: {
        title: "فيروس هانتا",
        description: `فيروس هانتا هو نوع من الفيروسات الذي ينتقل إلى البشر عبر الاتصال المباشر أو غير المباشر مع القوارض المصابة، مثل الفئران والجرذان. يُعتبر هذا الفيروس مسببًا لأمراض خطيرة، `,
        link: "اقرأ المزيد",
      },
      influenzaA: {
        title: "الإنفلونزا A",
        description: `انفلونزا A هي نوع من أنواع فيروسات الإنفلونزا التي تصيب الجهاز التنفسي. يُعد هذا الفيروس الأكثر شيوعًا بين أنواع الإنفلونزا الأخرى، ويتميز بقدرته`,
        link: "اقرأ المزيد",
      },
      HepatitisB: {
        title: "التهاب الكبد B",
        description: `التهاب الكبد B هو عدوى فيروسية تصيب الكبد، يسببها فيروس التهاب الكبد B (HBV). يُعتبر من أكثر أمراض الكبد انتشارًا حول العالم. ينتقل الفيروس عن طريق الدم أو سوائل الجسم،`,
        link: "اقرأ المزيد",
      },
      HepatitisC: {
        title: "التهاب الكبد الوبائي C",
        description: `التهاب الكبد الوبائي سي هو مرض فيروسي يصيب الكبد، ويُسببه فيروس التهاب الكبد سي (HCV). يُعتبر هذا المرض أحد الأسباب الرئيسية لأمراض الكبد `,
        link: "اقرأ المزيد",
      },
      Hiv: {
        title: "فيروس نقص المناعة البشري",
        description: `فيروس نقص المناعة البشري هو فيروس يهاجم جهاز المناعة، مما يضعف قدرة الجسم على محاربة العدوى والأمراض. ينتقل الفيروس عبر سوائل الجسم مثل الدم،`,
        link: "اقرأ المزيد",
      },

      Ants: {
        title: "النمل",
        description: "النمل هو حشرات اجتماعية تعيش في مستعمرات كبيرة ومنظمة تضم ملايين الأفراد. يتميز النمل بتنوع أنواعه وأشكاله، وهو يتكيف مع مختلف البيئات حول العالم.",
        link: "اقرأ المزيد",

      }
    }
  }



  const translatePathname = (path, language) => {
    const translations = {
      "cockroaches": language === 'ar' ? "الصراصير" : "cockroaches",
      "ants": language === 'ar' ? "النمل" : "Ants",
      "flies": language === 'ar' ? "الذباب" : "Flies",
      "bed_bugs": language === 'ar' ? "بق الفراش" : "Bed Bugs",
      "snakes": language === 'ar' ? "الثعابين" : "snakes",
      "stored_product_pests": language === 'ar' ? "آفات المنتجات المخزنة" : "Stored Product Pests",
      "rodents": language === 'ar' ? "القوارض" : "Rodents",
      "Covid19": language === 'ar' ? "كوفيد-19" : "Covid19",
      "Hantavirus": language === 'ar' ? "فايرس هانتا" : "Hantavirus",
      "InfluenzaA": language === 'ar' ? "انفلونزا A" : "Influenza A",
      "HepatitisB": language === 'ar' ? "التهاب الكبد B" : "Hepatitis B",
      "HepatitisC": language === 'ar' ? "التهاب الكبد C" : "Hepatitis C",
      "Hiv": language === 'ar' ? "فيروس نقص المناعة البشرية" : "Hiv",
    };

    return translations[path] || path;
  };

  const sortedInsects = insects.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedInsects);
  const pathnames = location.pathname.split('/').filter((x) => x !== "" && x !== "Home"); 
  const sortedGerms = insects.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedGerms);

  return (
    <>
      <div className="row m-0">
        <div className='banner-services col-md-12'>
          <div id="carouselExampleCaptions" className="carousel slide col-md-12">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-services">
                  <img src={Pest_Control} className="img-fluid " style={{ objectPosition: "center" }} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                </div>
                <div className="carousel-caption d-md-block">
                  <h1>{text[language].banner.title}</h1>
                  <div className="breadcrumb">
                    <Link to="/">{text[language].banner.home}</Link>
                    {pathnames.length > 0 && (
                      <>
                        <span> / </span>
                        <Link to="/#services">
                          {language === 'ar' ? 'الخدمات' : 'Services'}
                        </Link>
                      </>
                    )}
                    {pathnames.length > 1 && (
                      <>
                        <span> / </span>
                        <span>{translatePathname(pathnames[1], language)}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="img-services">
                  <img src={cockroaches1} className="d-block w-100" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                </div>
                <div className="carousel-caption d-md-block">
                  <h1>{text[language].banner.title}</h1>
                  <div className="breadcrumb">
                    <Link to="/">{text[language].banner.home}</Link>
                    {pathnames.length > 0 && (
                      <>
                        <span> / </span>
                        <Link to="/#services">{text[language].banner.services}</Link>
                      </>
                    )}
                    {pathnames.length > 1 && (
                      <>
                        <span> / </span>
                        <span>{translatePathname(pathnames[1], language)}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-services">
                  <img src={cockroaches2} className="d-block w-100" alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                </div>
                <div className="carousel-caption d-md-block">
                  <h1>{text[language].banner.title}</h1>
                  <div className="breadcrumb">
                    <Link to="/">{text[language].banner.home}</Link>
                    {pathnames.length > 0 && (
                      <>
                        <span> / </span>
                        <Link to="/#services">{text[language].banner.services}</Link>
                      </>
                    )}
                    {pathnames.length > 1 && (
                      <>
                        <span> / </span>
                        <span>{translatePathname(pathnames[1], language)}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////// */}
      <div className='all-content-services row m-0'>
        <div className='content-services col-md-11'>
          <div className="left-side col-md-4 col-10">
            <div className="accordion col-md-10" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" dir={language === 'en' ? 'ltr' : 'rtl'}>
                  <button className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',

                    }}>
                    <h3>{language === 'en' ? 'PEST CONTROL' : 'مكافحة الآفات'}</h3>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {insects.map((insects, index) => (
                      <p
                        key={index}
                        style={{
                          color: location.pathname === insects.path ? '#dd5d20' : '#000',
                          backgroundColor: location.pathname === insects.path ? '#b8a693' : 'transparent',
                          padding: '5px',
                          borderRadius: '4px',
                          display: 'block',
                          cursor: 'pointer',
                        }}
                      >
                        <Link to={insects.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}onClick={() => window.scrollTo(0, 0)}>
                          {insects.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    <h3>{language === 'ar' ? 'مكافحة الجراثيم' : 'GERM CONTROL'}</h3>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {germs.map((germs, index) => (
                      <p
                        key={index}
                        style={{
                          color: location.pathname === germs.path ? '#dd5d20' : '#000',
                          backgroundColor: location.pathname === germs.path ? '#b8a693' : 'transparent',
                          padding: '5px',
                          borderRadius: '4px',
                          display: 'block',
                          cursor: 'pointer',
                        }}
                      >
                        <Link to={germs.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}onClick={() => window.scrollTo(0, 0)}>
                          {germs.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
          <div className="rite-side col-md-8">
            <div className="accordion-menu row m-0">
              <div className="col-md-12 col-10">
                <h3 className="title-ask">{text[language].caption_services.title}</h3>
                <p className="small-caption">{text[language].caption_services.caption}</p>
                <h4 className="Subheading Subheading-1">{text[language].caption_services.subheading_1}</h4>
                {/* Accordion 1 */}
                <div
                  className={`accordion-ask-item ${currentlyActive === 1 ? ' active' : ''}`}
                  onClick={() => handleAccordionClick(1)}
                >
                  <div className={`accordion-item ${currentlyActive === 1 ? 'active' : ''}`}>
                    <div className={`icon-accordion ${currentlyActive === 1 ? 'active' : ''}`}>
                    </div>
                    <h4 className="ask">{text[language].accordion1.title}</h4>
                    <div className={`accordion-content ${currentlyActive === 1 ? 'active' : ''}`}>
                      {text[language].accordion1.content.map((item, index) => (
                        <ul className="col-12" key={index}>
                          <li className="col-12">{item}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="Subheading Subheading-2">{text[language].caption_services.subheading_2}</h4>
                {/* Accordion 2 */}
                <div
                  className={`accordion-ask-item ${currentlyActive === 2 ? 'active' : ''}`}
                  onClick={() => handleAccordionClick(2)}
                >
                  <div className={`accordion-item ${currentlyActive === 2 ? 'active' : ''}`}>
                    <div className={`icon-accordion ${currentlyActive === 2 ? 'active' : ''}`}>
                    </div>
                    <h4 className="ask">{text[language].accordion2.title}</h4>
                    <div className={`accordion-content ${currentlyActive === 2 ? 'active' : ''}`}>
                      {text[language].accordion2.content.map((item, index) => (
                        <ul key={index}>
                          <li>{item}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="Subheading Subheading-3">{text[language].caption_services.subheading_3}</h4>
                {/* Accordion 3 */}
                <div
                  className={`accordion-ask-item ${currentlyActive === 3 ? 'active' : ''}`}
                  onClick={() => handleAccordionClick(3)}
                >
                  <div className={`accordion-item ${currentlyActive === 3 ? 'active' : ''}`}>
                    <div className={`icon-accordion ${currentlyActive === 3 ? 'active' : ''}`}>
                    </div>
                    <h4 className="ask">{text[language].accordion3.title}</h4>
                    <div className={`accordion-content ${currentlyActive === 3 ? 'active' : ''}`}>
                      {text[language].accordion3.content.map((item, index) => (
                        <ul key={index}>
                          <li>{item}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Accordion 4 */}
                <div
                  className={`accordion-ask-item ${currentlyActive === 4 ? 'active' : ''}`}
                  onClick={() => handleAccordionClick(4)}
                >
                  <div className={`accordion-item ${currentlyActive === 4 ? 'active' : ''}`}>
                    <div className={`icon-accordion ${currentlyActive === 4 ? 'active' : ''}`}>
                    </div>
                    <h4 className="ask">{text[language].accordion4.title}</h4>
                    <div className={`accordion-content ${currentlyActive === 4 ? 'active' : ''}`}>
                      <ul>
                        <li>{text[language].accordion4.content}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Advantages-section row m-0">
              <div className='Advantages col-md-12 col-10 '>
                <div className='Advantages-img col-md-5'>
                  <img src={Advantages_img} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                </div>
                <div className='Advantages-right-side col-md-7'>
                  <h2 className="Advantages-title">{text[language].Advantages.Advantages_title}</h2>
                  <p className="Advantages-caption Advantages-caption-1">{text[language].Advantages.Advantages_caption}</p>
                  {text[language].Advantages.Advantages_points.map((point, index) => (
                    <li key={index} className={`Advantages-points Advantages-caption-${index + 2}`}>
                      <FaCheck className='check' />
                      {point}
                    </li>
                  ))}
                </div>
              </div>
            </div>


            <div className="carousel-services row m-0">
              <div className=" col-md-12 col-11">
                <div id="carouselExample" className="carousel slide " data-bs-ride="carousel" data-bs-interval="2000">
                  <div className="carousel-inner col-12">
                    <div className="carousel-item active ">
                      <div className="card-wraper">
                      <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={ants_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].Ants.title}</h6>
                            <p className="card-text">{text[language].Ants.description}...</p>
                            <Link to="../Home/services/ants" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].Ants.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Bed_bugs_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].bedBugs.title}</h6>
                            <p className="card-text">{text[language].bedBugs.description}...</p>
                            <Link to="../Home/services/bed-bugs" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].bedBugs.link}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="card-wraper">
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Rodents_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].rodents.title}</h6>
                            <p className="card-text">{text[language].rodents.description}...</p>
                            <Link to="../Home/services/Rodents" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].rodents.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={snackes_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].snakes.title}</h6>
                            <p className="card-text">{text[language].snakes.description}...</p>
                            <Link to="../Home/services/snakes" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].snakes.link}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="card-wraper">
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Stored_Product_Pests_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].storedProductPests.title}</h6>
                            <p className="card-text">{text[language].storedProductPests.description}...</p>
                            <Link to="../Home/services/stored-product-pests" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].storedProductPests.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Flies_icon} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].Flies.title}</h6>
                            <p className="card-text">{text[language].Flies.description}...</p>
                            <Link to="../Home/services/Flies" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].Flies.link}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="card-wraper">
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Covid_19} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].Covid_19.title}</h6>
                            <p className="card-text">{text[language].Covid_19.description}...</p>
                            <Link to="../Home/services/Covid19" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].Covid_19.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Hantavirus} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].Hantavirus.title}</h6>
                            <p className="card-text">{text[language].Hantavirus.description}...</p>
                            <Link to="../Home/services/Hantavirus" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].Hantavirus.link}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="card-wraper">
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={influenzaA} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].influenzaA.title}</h6>
                            <p className="card-text">{text[language].influenzaA.description}...</p>
                            <Link to="../Home/services/InfluenzaA" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].influenzaA.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={HepatitisB} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].HepatitisB.title}</h6>
                            <p className="card-text">{text[language].HepatitisB.description}...</p>
                            <Link to="../Home/services/HepatitisB" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].HepatitisB.link}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="card-wraper">
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={HepatitisC} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].HepatitisC.title}</h6>
                            <p className="card-text">{text[language].HepatitisC.description}...</p>
                            <Link to="../Home/services/HepatitisC" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].HepatitisC.link}
                            </Link>
                          </div>
                        </div>
                        <div className="card col-md-5">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary"><img src={Hiv} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />{text[language].Hiv.title}</h6>
                            <p className="card-text">{text[language].Hiv.description}...</p>
                            <Link to="../Home/services/Hiv" className="card-link"onClick={() => window.scrollTo(0, 0)}>
                              {text[language].Hiv.link}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                  </div>
                  <button className="carousel-control-prev col-1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next col-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Footer language={language} />

    </>
  );
};

export default Cock;
