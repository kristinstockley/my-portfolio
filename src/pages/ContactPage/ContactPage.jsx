import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect, useState } from 'react';


export default function ContactPage (){
    const initialText = "Get in Touch!";
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
  <h1 className="text-center mt-5">{displayedText}</h1>
        <ContactForm />
        <footer className="row" id="contact">
        <div className="col text-center">

            <a className="btn text-gradient" href="https://www.linkedin.com/in/kristin-stockley/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin text-gradient"></i>
            </a>
            <a className="btn text-gradient" href="mailto:kbstockley@gmail.com" target="_blank" rel="noreferrer">
                <i className="bi bi-envelope text-gradient"></i>
            </a>
            <a className="btn text-gradient" href="https://github.com/kristinstockley" target="_blank" rel="noreferrer">
                <i className="bi bi-github text-gradient"></i>
            </a>
        </div>
    </footer>
    </>
    )
}
