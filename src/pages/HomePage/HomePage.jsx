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
        { title: 'Project 1', image: 'assets/images/refurred-mobile.png', category: 'Group', href: 'https://www.re-furred.com/', target: '_blank' },
        { title: 'Project 2', image: 'assets/images/cmi-mobile.png', category: 'Class', href: 'https://count-me-in.herokuapp.com', target: '_blank' },
        { title: 'Project 3', image: 'assets/images/swift-seats-mobile.png', category: 'Class', href: 'https://swiftseats.herokuapp.com/', target: '_blank' },
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
                                backgroundPosition: 'center',
                                position: 'relative',
                                zIndex: '0',
                                height: '40rem',
                                width: '90vw',
                                margin: '0 auto'
                            }}>
                            <div className="profile-picture"
                                style={{
                                    position: 'absolute',
                                    top: '-1.5%',
                                    left: '74.25%',
                                    width: '350px',
                                    height: '650px',
                                    backgroundSize: 'cover',
                                    zIndex: '-1',
                                }}>
                                <img src="assets/images/profile-5.png" alt="Profile Picture"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px'
                                    }} />
                            </div>
                            <div className="text-content text-white py-5 my-5">
                                <h1 className="type-text">
                                    <span className="d-inline" id="typing-text">{displayedText}</span>
                                </h1>
                            </div>

                            <div className="text-uppercase rounded-4 p-3 header-banner">
                                <div className="d-flex align-items-center gap-4 justify-content-center">
                                    <h2 className="display-2 text-light">Front</h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">End <br /> Enthusiast</p>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">1.5</h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">Years of <br /> experience</p>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">Full</h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">Stack <br /> Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About Section Starts --> */}
                <section className="py-5">
                    <div className="container about-container" id="about">
                        <div className="row gx-6 justify-content-center">
                            <div className="col-xxl-10">
                                <div className="my-4">
                                    <h1 className="display-5 fw-bolder">
                                        <span className="d-inline">A Little About Me</span>
                                    </h1>
                                    <h5 className="text-muted about my-3">
                                        I’m an ambitious and curious coder, dedicated to helping local businesses establish and optimize their online presence while enhancing user experiences.
                                    </h5>
                                    <h5 className="text-muted about mb-3">
                                        After completing the Software Engineering Immersive program at General Assembly in June 2023, I quickly transitioned into the tech industry, stepping into the role of Full Stack Engineer.
                                    </h5>
                                    <h5 className="text-muted about mb-3">
                                        As the sole developer at Harvest Growth Strategies, I juggle multiple high-priority projects simultaneously, designing and implementing tailored solutions to meet diverse business needs.
                                    </h5>
                                    <h5 className="text-muted about mb-3">
                                        My prior experience in marketing, merchandising, and sales has sharpened my ability to understand client needs and deliver impactful, results-driven solutions.
                                    </h5>
                                    <h5 className="text-muted about">
                                        I’m eager to further explore the front-end space, contributing to more intuitive user experiences and making digital interactions more engaging and accessible.
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="portfolio pb-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center">
                                    <h4 className="fw-bold display-6">Projects</h4>
                                </div>
                            </div>
                        </div>

                        <div className="button-group d-flex flex-wrap gap-3 justify-content-center pb-5 pt-3">
                            <button className={`btn btn-primary ${activeFilter === 'all' ? 'is-checked' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
                            <button className={`btn btn-primary ${activeFilter === 'group' ? 'is-checked' : ''}`} onClick={() => setActiveFilter('group')}>Group</button>
                            <button className={`btn btn-primary ${activeFilter === 'class' ? 'is-checked' : ''}`} onClick={() => setActiveFilter('class')}>Class</button>
                        </div>

                        <div className="grid p-0 clearfix row row-cols-2 row-cols-lg-3 row-cols-xl-4 portfolio">
                            {filteredPortfolioItems.map((item, index) => (
                                <div className={`col mb-4 portfolio-item ${item.category.toLowerCase()}`} key={index}>
                                    <a href={item.href} target={item.target} rel="noopener noreferrer" title={item.title}>
                                        <img src={item.image} className="img-fluid rounded-4 port-img" alt={item.title} />
                                    </a>
                                </div>
                            ))}
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




