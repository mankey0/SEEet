
import React from 'react';
import imgTeam from '../assets/Untitled-design.png';
import { FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Section7TeamWork({ language }) {
    const texts = {
        en: {
            heading: "Our team is at your service throughout the week:",
            email: "Email:",
            contactUs: "Contact Us:",
            emailAddress: "info@seet-environmentalsolutions.com",
            mobileNumber: "+966532135821",
            phoneNumber: "+966112867770",
        },
        ar: {
            heading: "فريقنا في خدمتك طوال الأسبوع:",
            email: "البريد الالكتروني:",
            contactUs: "اتصل بنا:",
            emailAddress: "info@seet-environmentalsolutions.com",
            mobileNumber: "+966532135821",
            phoneNumber: "+966112867770",
        }
    };

    const currentTexts = texts[language];

    return (
        <div className='team-work row m-0 p-0'>
            <div className='team-content-work col-xl-11 col-md-11 col-11'>
                <div className='left-side-team col-md-3'>
                    <img src={imgTeam} alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا صيت السعوديه للخدمات البيئية مكافحه الحشــــــرات لعبتنــــــــــــا" />
                </div>
                <div className='right-side-team col-md-9'>
                    <h3>{currentTexts.heading}</h3>
                    <div className='call-team col-md-12'>
                        <div className='call-us-items col-xl-5 col-md-6'>
                            <h1>{currentTexts.email}</h1>
                            <a href={`mailto:${currentTexts.emailAddress}`}>
                                <MdMarkEmailRead className='email-icon' />
                                {currentTexts.emailAddress}
                            </a>
                        </div>
                        <div className='call-us-items col-xl-7 col-md-7 col-12'>
                            <h1>{currentTexts.contactUs}</h1>
                            <div className='call-us-item col-md-12'>
                                    <a  href={`tel:${currentTexts.phoneNumber}`}>
                                        <IoCall className='email-icon' />{currentTexts.phoneNumber}
                                        </a>
                                    <a href={`tel:${currentTexts.mobileNumber}`}>
                                        <FaMobileAlt className='email-icon' />
                                        {currentTexts.mobileNumber}
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7TeamWork;
