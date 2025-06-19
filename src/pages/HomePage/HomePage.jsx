import { useEffect, useState } from 'react';
import './HomePage.scss';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function HomePage() {
    const initialText = "Hi, I'm Kristin!";
    const typingSpeed = 100;

    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolioItems = [
        { title: 'refurred', image: 'assets/images/dogballoons.jpg', category: 'Group', href: 'https://www.re-furred.com/', target: '_blank', width: '10rem' },
        { title: 'Count Me In', image: 'assets/images/party.jpg', category: 'Class', href: 'https://count-me-in.herokuapp.com', target: '_blank' },
        { title: 'Swift Seats', image: 'assets/images/confetti-portfolio.jpg', category: 'Class', href: 'https://swiftseats.herokuapp.com/', target: '_blank' },
    ];

    const filteredPortfolioItems = portfolioItems.filter(item =>
        activeFilter === 'all' ? true : item.category.toLowerCase() === activeFilter
    );

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
            <div className='HomePage'>
                <section className=''>
                    <div className="container-fluid">
                        <div className="banner rounded-4 header-section"
                            style={{
                                backgroundImage: 'url(assets/images/colors.jpg)',
                                objectFit: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '15%',
                                position: 'relative',
                                zIndex: '0',
                                height: '40rem',
                                width: '90vw',
                                margin: '0 auto',
                            }}>
                            <div className="profile-picture"
                          
                            >
                                <img src="assets/images/profile-5.png" alt="Headshot"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        backgroundImage: 'url(assets/images/.jpg)',

                                    }}
                                />
                            </div>
                            
                            
                                <div className='header-hello'>
                            <p className='text-white banner-title'>Software Engineer</p>
                                <h1 className="type-text text-white d-inline" id="typing-text">
                               {displayedText}
                                </h1>
                                </div>


                            <div className="text-uppercase rounded-4 header-banner">
                            <div className="d-flex align-items-center gap-2">
                                    <h2 className="display-3 text-light">Full</h2>
                                    <p className="text-white justify-content-center m-0 ls-4">Stack <br /> Developer</p>
                                </div>
                             
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="display-3 text-light">Motivated</h2>
                                    <p className="text-white justify-content-center m-0 ls-4">MERN<br /> Architect</p>
                                </div>
                                <div className="d-flex align-items-center gap-2 justify-content-center">
                                    <h2 className="display-3 text-light">Front</h2>
                                    <p className="text-white justify-content-center m-0 ls-4">End <br /> Enthusiast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About Section Starts --> */}
                <section className="about-section">
                    <div className="container about-container" id="about">
                        <div className="row  justify-content-center">
                            <div className="col-xxl-10">
                                <div className="">
                                       <p className='about-title'> I’m an ambitious and curious coder,
                                        <span className="text-muted about-span">
                                          focused on helping small businesses establish and optimize their online presence while enhancing both user and admin experiences.
                                            </span>
                                    </p>
                                    <h5 className="text-muted about mb-3">
                                        I recently served as the sole Full Stack Developer at Harvest Growth Strategies, a marketing and consulting firm representing local businesses in Corpus Christi, Texas. I led the full software lifecycle for two major client-facing platforms—Ezekiel Diamond Co and The Point of Corpus Christi—from architecture and development to deployment and server management.
                                    </h5>
                                    <h5 className="text-muted about mb-3 mt-4">
                                        Before completing the Software Engineering Immersive program through General Assembly in 2023, I gained valuable experience in marketing, merchandising, and sales. This background has given me a unique perspective on how to align technical solutions with business goals and user needs.
                                    </h5>
                    
                                 
                                    <h5 className="text-muted about ">
                                        I’m eager to dive deeper into the front-end space, contributing to more intuitive user journies and making digital interactions more engaging and accessible.
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

   
                <ContactForm />
                <footer>
                    <button className="scroll-to-top rounded " id="scrollBtn" onClick={scrollToTop}>
                        <i className="fas fa-angle-up"></i>
                    </button>
                </footer>
            </div>
        </>
    );
}




