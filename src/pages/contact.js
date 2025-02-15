import React from 'react';
// import formImg from '../assets/Untitled-design.png';
import { BiPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

import Footer from '../components/footer';

function Contact({ language }) { 
  return (
    <>
      <div className='contact row m-0'>

        {/* <div className='all-contact col-11'>
          <div className='left-contact col-md-5 col-12'>
            <form>
              <div className='form-input col-md-12'>
                <input placeholder={language === 'en' ? '*First name' : '*الاسم الأول'} className='col-md-5 col-12' />
                <input placeholder={language === 'en' ? '*Last name' : '*الاسم الأخير'} className='col-md-5 col-12' />
              </div>
              <div className='form-input col-md-12'>
                <input placeholder={language === 'en' ? '*Your email' : '*البريد الإلكتروني'} className='col-md-5 col-12' />
                <input placeholder={language === 'en' ? '*Phone number' : '*رقم الهاتف'} className='col-md-5 col-12' />
              </div>
              <div className='form-input col-md-12'>
                <textarea placeholder={language === 'en' ? '*Message' : '*الرسالة'} className='col-md-10 col-12' />
              </div>
              <div className='form-input col-md-12'>
                <button type="button" className='btn col-md-10'>{language === 'en' ? 'Send to' : 'إرسال'}</button>
              </div>
            </form>
          </div>
          <div className='right-contact col-md-4'>
            <img src={formImg} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
          </div>
        </div> */}
        <div className='all-section-call col-md-11 col-11'>
          <div className='caption-contact col-md-12'>
            <h1>{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h1>
            <h2>{language === 'en' ? 'We are available to serve you every day of the week, so don\'t hesitate to contact us:' : 'نحن متاحون لخدمتك طوال أيام الأسبوع، فلا تتردد في الاتصال بنا:'}</h2>
          </div>
          <div className='call col-md-12 d-flex'>
            <div className='call-side col-md-5'>
              <div className='call-item col-xl-6 col-md-12 col-12'>
                <div className='call-whatapp-item'>
                  <div className='left'>
                    <h3><a href="tel:+966578272727">{language === 'en' ? 'mobile' : 'الجوال'}</a></h3>
                    <h3><a href="tel:+966578272727">{language === 'en' ? '+966578272727' : '966578272727+'}</a></h3>
                  </div>
                  <div className='right'>
                    <a href="tel:+966578272727"><FaMobileAlt className='icon-contacts' /></a>
                  </div>
                </div>
                <div className='call-whatapp-item'>
                  <div className='left'>
                    <h3><a href='https://wa.me/966578272727' target='_blank' rel='noopener noreferrer'>
                      {language === 'en' ? 'WhatsApp' : 'الواتساب'}</a></h3>
                  </div>
                  <div className='right'>
                    <a href='https://wa.me/966578272727' target='_blank' rel='noopener noreferrer'>
                      <MdOutlineWhatsapp className='icon-contacts' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='call-item col-xl-6 col-md-12 col-12'>
                <div className='call-whatapp-item'>
                  <div className='left'>
                    <h3><a href="tel:+966112867770">{language === 'en' ? 'phone' : 'الهاتف'}</a></h3>
                    <h3><a href="tel:+966112867770">{language === 'en' ? '+966112867770' : '966112867770+'}</a></h3>
                  </div>
                  <div className='right'>
                    <a href="tel:+966112867770"><BiPhoneCall className='icon-contacts' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='call-side col-md-7'>
              <div className='call-item col-xl-7 col-md-12 col-12'>
              <div className='call-whatapp-item'>
                  <div className='left'>
                    <h3><a href='mailto:info@seet-environmentalsolutions.com'>{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</a></h3>
                    <h3><a href='mailto:info@seet-environmentalsolutions.com'>info@seet-environment<br/>alsolutions.com</a></h3>
                  </div>
                  <div className='right'>
                    <a href='mailto:info@seet-environmentalsolutions.com'><MdMarkEmailRead className='icon-contacts' /></a>
                  </div>
                </div>
              </div>
              <div className='call-item col-xl-5 col-md-12 col-12'>
                <div className='call-whatapp-item'>
                  <div className='left'>
                    <h3><a
                      href="https://www.google.com/maps/place/24%C2%B038'43.6%22N+46%C2%B042'08.8%22E"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{language === 'en' ? 'address' : 'العنوان'}</a></h3>
                    <h3>
                      <a
                        href="https://www.google.com/maps/place/24%C2%B038'43.6%22N+46%C2%B042'08.8%22E"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === 'en'
                          ? 'King Fahd Branch Road - Al-Washam District - Al-Washam Tower P.O. Box: 12735'
                          : "طريق الملك فهد الفرعي - حي الوشام - برج الوشم ص.ب : 12735"}
                      </a>
                    </h3>
                  </div>
                  <div className='right'>
                    <a
                      href="https://www.google.com/maps/place/24%C2%B038'43.6%22N+46%C2%B042'08.8%22E"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><FaLocationDot className='icon-contacts' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer language={language} />
    </>
  );
}

export default Contact;
