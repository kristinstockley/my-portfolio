import Card from 'react-bootstrap/Card';
import './ProjectsPage.scss';
import { BiLogoDjango, BiLogoReact, BiLogoPython, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';


export default function ProjectsPage() {

    return (
        <>
            <h1 className="text-center mt-5">Group Project</h1>

            <Card className="bg-dark text-white refurred-card mb-5">
                <a className="portfolio-item project-card" href="https://www.re-furred.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/refurred.png" alt="refurred Project" className='refurred-img' />
                        <Card.ImgOverlay className='text-white overlay' >
                        <div className="text-center">
                                <h2 className='mb-0'>View Project</h2>
                                <p className='project-icons'><BiLogoMongodb /><SiExpress /> <BiLogoReact /> <BiLogoNodejs /></p>
                            </div>
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
                        <Card.ImgOverlay className='text-white overlay' >
                        <div className="text-center">

                        <h2 className='mb-0'>View Project</h2>
                                <p className='project-icons'><BiLogoMongodb /><SiExpress /> <BiLogoReact /> <BiLogoNodejs /></p>
                                </div>
                        </Card.ImgOverlay>
                    </div>
                </a>
            </Card>

            <Card className="bg-dark text-white swiftseats-card mb-5">
                <a className="portfolio-item project-card" href="https://swiftseats.herokuapp.com/" target="_blank" rel="noreferrer">
                    <div className="card-overlay">
                        <Card.Img src="assets/images/swift-seats.png" alt="SwiftSeats Project" className='swiftseats-img' />
                        <Card.ImgOverlay className='text-white overlay' >
                        <div className="text-center mb-5">
                        <h2 className='mb-0'>View Project</h2>
                                <Card.Title className='project-icons mb-5'><BiLogoPython /> <BiLogoDjango /></Card.Title>
                            </div>
                        </Card.ImgOverlay>
                    </div>
                </a>

            </Card>
        </>
    )
}