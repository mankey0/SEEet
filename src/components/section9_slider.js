import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];

function Section9Slider() {
    const sliderRef = useRef(null);
    const isMouseDown = useRef(false);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [language] = useState('ltr'); // يمكن تغيير اللغة هنا حسب الحاجة

    const scrollSlider = () => {
        if (sliderRef.current && !isMouseDown.current) {
            setScrollAmount(prevAmount => {
                const newAmount = prevAmount + 1;
                if (newAmount >= sliderRef.current.scrollWidth / 2) {
                    return 0;
                }
                return newAmount;
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollSlider, 26);

        const handleMouseUp = () => {
            isMouseDown.current = false;
        };

        const handleMouseDown = () => {
            isMouseDown.current = true;
        };

        const sliderElement = sliderRef.current;
        sliderElement.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            clearInterval(interval);
            sliderElement.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollAmount;
        }
    }, [scrollAmount]);

    return (
        <div className={`companies-container row m-0 ${language === 'rtl' ? 'rtl' : 'ltr'}`}>
            <div className="col-md-11 justify-content-center">
                <div className="">
                    <div className="slider-container" ref={sliderRef}>
                        <div className="slider-track">
                            {images.concat(images).map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt="صيت السعودية لخدمات مكافحة الآفات والقوارض، مكافحة الآفات هي خبرتنا. صيت السعودية للخدمات البيئية، مكافحة الحشرات لعبتنا."
                                    className="slider-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9Slider;
