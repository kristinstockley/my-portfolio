import MyVerticalTimeline from '../../components/MyVerticalTimeline/MyVerticalTimeline';
import { useEffect, useState } from 'react';


export default function AboutPage (){
    const initialText = "A Little About Me";
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
      
    return(
        <>
        <div>
        <section className="py-5">
                <div className="container about-container" id="about">
                    <div className="row gx-6 justify-content-center">
                        <div className="col-xxl-10">
                            <div className="my-4">
                                <h1 className="display-5 fw-bolder text-center mb-4"><span className="d-inline">{displayedText}</span></h1>
                                <h4 className="text-muted about mb-3 text-center">
                                    I'm a passionate front-end developer who's on a mission to craft captivating digital experiences.
                                    I successfully completed the intensive Software Engineering Immersive program through General Assembly
                                    in June 2023, and I'm ready to make waves in the tech industry. </h4>
                                <h4 className="text-muted about mb-3 text-center">Before diving into tech, I wore many hats
                                    in marketing, merchandising, and sales, where I refined my ability to connect with people and understand
                                    their needs.
                                    However, I yearned for a career that allowed me to channel my creativity and problem-solving skills into
                                    creating visually stunning and user-friendly web interfaces.</h4>
                                <h4 className="text-muted about text-center">I'm truly excited about the front-end realm of
                                    tech and the endless possibilities it offers for enhancing user experiences and making the digital world
                                    more engaging.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        <MyVerticalTimeline />
        </div>
        </>
    )
}