import { useEffect, useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';




export default function HomePage() {
    const initialText = "Hi, I'm Kristin!";
    const typingSpeed = 100;

    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let typingInterval;

        if (currentIndex < initialText.length) {
            typingInterval = setInterval(() => {
                setDisplayedText((prevText) => prevText + initialText[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, typingSpeed);
        } else {
            clearInterval(typingInterval);
        }

        return () => {
            clearInterval(typingInterval);
        };
    }, [currentIndex]);


    const scrollToTop = () => {
        if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            setTimeout(scrollToTop, 1000);
        }
    };

    useEffect(() => {
        const scrollBtn = document.getElementById('scrollBtn');
        const handleScroll = () => {
            if (
                document.body.scrollTop > 700 ||
                document.documentElement.scrollTop > 700
            ) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <header className="header py-5">
                <div className="container px-5 ">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">

                            {/* <!-- Header text content--> */}
                            <div className="text-center text-xxl-start">
                                <div className="badge mb-4">
                                    <div className="text-uppercase">Customize &middot; Optimize &middot; Modernize</div>
                                </div>

                                <h1 className="display-3 fw-bolder mb-4"><span className="d-inline" id="typing-text">{displayedText}</span></h1>
                                <p className='fw-bold '>A Full Stack Developer based in Corpus Christi, TX</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link to="/projects" className="btn btn-danger btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Projects</Link>
                                    <Link to="/resume" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Resume</Link>

                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-7">
                            {/* <!-- Header profile picture--> */}
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src="assets/images/profile-2.png" alt="..." />
                                    <div className="dots-1">
                                        {/* <!-- SVG Dots--> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 191.6 1215.4"
                                        >
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-2">
                                        {/* <!-- SVG Dots--> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"

                                            viewBox="0 0 191.6 1215.4"
                                        >
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-3">
                                        {/* <!-- SVG Dots--> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"

                                            viewBox="0 0 191.6 1215.4"
                                        >
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-4">
                                        {/* <!-- SVG Dots--> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 191.6 1215.4"
                                        >
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <hr className="featurette-divider">
            </hr>
            <section className="py-5">
                <div className="container about-container" id="about">
                    <div className="row gx-6 justify-content-center">
                        <div className="col-xxl-10">
                            <div className="my-4">
                                <h1 className="display-5 fw-bolder"><span className="d-inline">A Little About Me</span></h1>
                                <h5 className="text-muted about my-3">
                                    I’m a passionate full stack developer with a strong interest on front-end development, driven to craft captivating digital experiences that delight users.
                                    After successfully completing the Software Engineering Immersive program at General Assembly in June 2023, I quickly transitioned into the tech industry, taking on the role of a Full Stack Developer.
                                </h5>
                                <h5 className="text-muted about mb-3">
                                    In my current role, I’ve been the sole developer responsible for creating and deploying innovative solutions, including QR code-based digital menus for local restaurants.
                                    This hands-on experience has sharpened my ability to manage the entire software development lifecycle, from initial concept to deployment, all while ensuring alignment with business goals.

                                
                                </h5>
                                <h5 className="text-muted about mb-3">
                                    Before my career in tech, I gained valuable experience in marketing, merchandising, and sales, which honed my skills in understanding client needs and delivering results.
                                    However, my true passion lies in technology, where I can channel my creativity and problem-solving abilities into developing visually stunning and user-friendly web interfaces.

                                </h5>
                                <h5 className="text-muted about">
                                I’m excited to continue exploring the front-end realm of tech, where I can contribute to enhancing user experiences and making the digital world more engaging and accessible.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <hr className="featurette-divider">
            </hr>
            
            <section id="skills" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="skills-title">I've worked with</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-html5 fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-css3-alt fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-js fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-node-js fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-bootstrap fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-react fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-python fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-git fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-github fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                        <div className="col-md-1 mx-2">
                            <div className="text-center">
                                <i className="fab fa-markdown fa-5x d-flex-center skills-icon" color="purple"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="featurette-divider"></hr> */}

            {/* <!-- Projects-->
            <section className="content-section" id="projects">
                <div className="container px-4">
                    <div className="content-section-heading text-center">
                        <h1 className="mt-5 mb-4">Current Project</h1>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-lg-4">
                            <a className="portfolio-item project-card" href="https://www.re-furred.com/" target="_blank" rel="noreferrer">
                                <div className="rectangle-container refurred">
                                    <img className="img-fluid refurred-img" src="assets/images/dogballoons.jpg" alt="refurred Project" />
                                    <div className="project-info">
                                        <h2 className="project-title refurred-title">re<span className="furr">furr</span>ed</h2>
                                        <small className="project-title-two refurred-title-two">MERN | WIP with two fellow GA grads</small>
                                        <p className="project-description refurred-description">Dog breed selector, finder, and directory</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <hr />

                    <div className="content-section-heading text-center">
                        <h1 className="mt-5 mb-4">Class Projects</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <a className="portfolio-item project-card" href="https://count-me-in.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div className="rectangle-container">
                                    <img className="img-fluid" src="assets/images/party.jpg" alt="CountMeIn Project" />
                                    <div className="project-info">
                                        <h3 className="project-title">CountMeIn</h3>
                                        <small className="project-title-two">MERN</small>
                                        <p className="project-description">Track upcoming occasions with personal countdowns</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4">
                            <a className="portfolio-item project-card" href="https://swiftseats.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div className="rectangle-container">
                                    <img className="img-fluid" src="assets/images/confetti-portfolio.jpg" alt="SwiftSeats Project" />
                                    <div className="project-info">
                                        <h3 className="project-title">SwiftSeats</h3>
                                        <small className="project-title-two">Python | Django</small>
                                        <p className="project-description">Concert tracker and photo storage for Swifties</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section> */}

            <footer>
                <button className="scroll-to-top rounded" id="scrollBtn" onClick={scrollToTop}>
                    <i className="fas fa-angle-up"></i>
                </button>
            </footer>



        </>
    )
}