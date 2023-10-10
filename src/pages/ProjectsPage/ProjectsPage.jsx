import Card from 'react-bootstrap/Card';
import './ProjectsPage.scss'

export default function ProjectsPage() {

    return (
        <>
            <Card className="bg-dark text-white refurred-card mb-2">
                <a className="portfolio-item project-card" href="https://www.re-furred.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/dogballoons.jpg" alt="refurred Project" className='refurred-img' />
                        <Card.ImgOverlay className='text-white' >
                            <Card.Title>re<span className='furr'>furr</span>ed</Card.Title>
                            <Card.Text>
                                Dog breed selector, finder, and directory
                            </Card.Text>
                            <Card.Text>MERN | WIP with two fellow GA grads</Card.Text>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

            <Card className="bg-dark text-white cmi-card mb-2">
                <a className="portfolio-item project-card" href="https://count-me-in.herokuapp.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/party.jpg" alt="CMI Project" className='cmi-img' />
                        <Card.ImgOverlay className='text-white' >
                            <Card.Title>CountMeIn</Card.Title>
                            <Card.Text>
                                Track upcoming occasions with personal countdowns
                            </Card.Text>
                            <Card.Text>MERN | Class Project</Card.Text>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

            <Card className="bg-dark text-white swiftseats-card">
                <a className="portfolio-item project-card" href="https://swiftseats.herokuapp.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/confetti-portfolio.jpg" alt="SwiftSeats Project" className='swiftseats-img' />
                        <Card.ImgOverlay className='text-white' >
                            <Card.Title>SwiftSeats</Card.Title>
                            <Card.Text>
                                Concert tracker and photo storage for Swifties
                            </Card.Text>
                            <Card.Text>Python | Django | Class Project</Card.Text>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

        </>
    )
}