import React, { useState, useEffect } from 'react';
import './box.css';

export default function Box() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const boxElements = document.querySelectorAll('.Box_container');

            boxElements.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < windowHeight * 0.75) {
                    setIsAnimated(true);
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const data = [
        {
            image: "./images/web.jpg",
            boxheading: "Web development",
            paragraph: "Web development etc",
            additionalContent: "Creating custom web applications tailored to your specific business needs for improved efficiency and productivity.",
        },
        {
            image: "./images/mobile.jpg",
            boxheading: "Mobile development",
            paragraph: "Mobile development etc",
            additionalContent: "Crafting native mobile apps for iOS and Android platforms to reach a wider audience.",
        },
        {
            image: "./images/dextop.jpg",
            boxheading: "Desktop development",
            paragraph: "Desktop development etc",
            additionalContent: "Building robust desktop applications for Windows, macOS, and Linux platforms for seamless performance.",
        },
    ];

    return (
        <div className={`box_main ${isAnimated ? 'animated' : ''}`}>
            {data.map((item, index) => (
                <div className='Box_container' key={index}>
                    <div className='Box_content'>
                        <div className='Box_imageContainer'>
                            <img src={item.image} alt='' className='Box_image' />
                        </div>
                        <h2 className='Box_heading'>{item.boxheading}</h2>
                        <p className='Box_paragraph'>{item.paragraph}</p>
                    </div>
                    <div className='Box_overlay'>
                        <p>{item.additionalContent}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
