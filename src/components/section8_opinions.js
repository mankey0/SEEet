


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStarSharp } from "react-icons/io5";

function Section8Opinions({ language }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: <IoStarSharp />,
      text:
        language === "ar"
          ? "صيت السعودية لخدمات مكافحة الآفات هي أفضل شركة تعاملت معها على الإطلاق! كانوا سريعًا في الاستجابة وقدموا خدمة فورية. كان فريقهم محترفًا للغاية ولديه معرفة كبيرة بأحدث التقنيات. تمكنوا من القضاء تمامًا على الآفات في منزلي. أنا سعيد للغاية بالنتائج وأشعر بالراحة الآن."
          : "Seet Saudia Pest Control is the best company I have ever dealt with! They were quick to respond and provided immediate service. Their team was highly professional and very knowledgeable about the latest technologies. They managed to completely eliminate the pests in my home. I am extremely happy with the results and feel at ease now.",
      subtitle: language === "ar" ? "سعيد العويران" : "Saeed Al-Owiran",
      small_caption: language === "ar" ? "لاعب كرة قدم" : "Football Player",
    },
    {
      title: <IoStarSharp />,
      text:
        language === "ar"
          ? "لا أستطيع أن أصف سعادتي الكبيرة بعد التعامل مع صيت لمكافحة الآفات. كانت تجربة رائعة من البداية إلى النهاية. كان الفريق محترفًا وودودًا، وتعاملوا مع مشكلة الآفات في منزلي بكفاءة كبيرة. أنا ممتن لجودة الخدمة والنتائج الرائعة التي قدموها."
          : "I can't help but feel immense happiness after dealing with Seet Saudia for pest control. It was an excellent experience from start to finish. The team was professional and friendly, and they handled the pest issue in my home with great efficiency. I am grateful for the quality of service and the amazing results they delivered.",
      subtitle: language === "ar" ? "قاسم الخبيري" : "Qasem Al-Khubairi",
      small_caption: language === "ar" ? "صانع محتوى" : "Content Creator",
    },
    {
      title: <IoStarSharp />,
      text:
        language === "ar"
          ? "صيت السعودية لخدمات مكافحة الآفات هي شركة رائعة! أنا سعيد جدًا بتجربتي معهم. كانوا محترفين للغاية ومتعاونين. قدموا لي خدمة مميزة ونجحوا في حل مشكلة الآفات التي كانت تزعجني لفترة طويلة. أنا ممتن لصبرهم واهتمامهم بتلبية احتياجاتي بالكامل."
          : "Seet Saudia Pest Control is an amazing company! I am very happy with my experience dealing with them. They were exceptionally professional and cooperative. They provided me with outstanding service and successfully resolved the pest issue that had been bothering me for a long time. I truly appreciate their patience and dedication to meeting my needs completely.",
      subtitle: language === "ar" ? "أمينة رشيد" : "Amina Rashid",
      small_caption: language === "ar" ? "ربة منزل" : "Housewife",
    },
  ];

  return (
    <div className="opinions-section row m-0">
      <h2 className="section-title col-11 col-md-6">
        {language === "ar"
          ? "آراء من عملائنا الكرام:"
          : "Opinions from Our Valued Customers:"}
      </h2>
      <div className="Opinions col-md-11">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {card.title} {card.title} {card.title} {card.title} {card.title}{" "}
                    {card.title}
                  </h5>

                  <p className="card-text">{card.text}</p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {card.subtitle}
                  </h6>
                  <h6 className="small_caption mb-2 text-body-secondary">
                    {card.small_caption}
                  </h6>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="cards-wrapper ">
            {cards.map((card, index) => (
              <div key={index} className="card col-xl-3 col-md-5">
                <div className="card-body">
                  <h5 className="card-title">
                    {card.title} {card.title} {card.title} {card.title} {card.title}{" "}
                    {card.title}
                  </h5>

                  <p className="card-text">{card.text}</p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {card.subtitle}
                  </h6>
                  <h6 className="small_caption mb-2 text-body-secondary">
                    {card.small_caption}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section8Opinions;











