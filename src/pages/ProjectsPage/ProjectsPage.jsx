import Card from 'react-bootstrap/Card';
import './ProjectsPage.scss';
import { BiLogoDjango, BiLogoReact, BiLogoPython, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';


export default function ProjectsPage() {

    return (
        <>
            <h1 className="text-center mt-5">Current Project</h1>

            <Card className="bg-dark text-white refurred-card mb-5">
                <a className="portfolio-item project-card" href="https://www.re-furred.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/refurred.png" alt="refurred Project" className='refurred-img' />
                        <Card.ImgOverlay className='text-white' >
                        <div className="overlay">
                                <p>View Project</p>
                            </div>
                            <Card.Title className='project-icons d-flex justify-content-end'><BiLogoMongodb /><SiExpress /> <BiLogoReact /> <BiLogoNodejs /></Card.Title>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

            <hr />

            <h1 className="text-center mt-5">Class Projects</h1>
            <Card className="bg-dark text-white cmi-card mb-2">
                <a className="portfolio-item project-card" href="https://count-me-in.herokuapp.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/count-me-in.png" alt="CMI Project" className='cmi-img' />
                        <Card.ImgOverlay className='text-white' >
                        <div className="overlay">
                                <p>View Project</p>
                            </div>
                            <Card.Title className='project-icons d-flex justify-content-end mb-5'><BiLogoMongodb /><SiExpress /> <BiLogoReact /> <BiLogoNodejs /></Card.Title>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

            <Card className="bg-dark text-white swiftseats-card mb-5">
                <a className="portfolio-item project-card" href="https://swiftseats.herokuapp.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/swift-seats.png" alt="SwiftSeats Project" className='swiftseats-img' />
                        <Card.ImgOverlay className='text-white' >
                        <div className="overlay">
                                <p>View Project</p>
                            </div>
                            <Card.Title className='project-icons d-flex justify-content-end mb-6'><BiLogoPython /> <BiLogoDjango /></Card.Title>
                        </Card.ImgOverlay>
                    </div>
                </a>

            </Card>
        </>
    )
}