import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { BiSolidCertification, BiLogoDjango, BiLogoReact, BiSolidBriefcase } from 'react-icons/bi';
import { MdVolunteerActivism } from 'react-icons/md';
import './MyVerticalTimeline.scss';
import ResumeModal from '../../components/ResumeModal/ResumeModal';



export default function MyVerticalTimeline() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4 mx-5 mt-5">
        <h1 className="fw-bolder mb-0 mx-5">My Tech Timeline</h1>
        {/* <a href="/assets/images/Kristin Stockley-Resume.pdf" download="Kristin Stockley's Resume.pdf"> */}

            <ResumeModal />
        {/* </a> */}
      </div>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'purple' }}
          contentArrowStyle={{ borderRight: '7px solid  purple' }}
          date="September 2023 - Present"
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="qa-vertical-timeline-element-title">Quality Assurance Analyst Intern</h3>
          <h5 className="qa-vertical-timeline-element-subtitle">Oigetit</h5>

          <ul className='text-light'>
            <li>
              Conduct comprehensive quality assurance testing to identify and document software bugs
            </li>
            <li>
              Provide valuable insights and recommendations to optimize the user interface
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="August 2023 - Present"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<MdVolunteerActivism />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer Volunteer</h3>
          <h5 className="vertical-timeline-element-subtitle">Hack for LA</h5>

          <ul>
            <li>
              Actively engage with Hack for LA's GitHub project board to pick up issues, enhancing the website's functionality and user experience
            </li>
            <li>
              Utilize Docker to set up local development environments, allowing for efficient code review, testing, and debugging
            </li>
          </ul>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="July 2023 - Present"
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<BiLogoReact />}

        >
          <h3 className="vertical-timeline-element-title">refurred</h3>
          <h5 className="vertical-timeline-element-subtitle">Group Project: Front-End Developer</h5>
          <p>
            <a href="https://www.re-furred.com/">re-furred.com</a>
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="March 2023 - June 2023"
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<BiSolidCertification />}

        >
          <h3 className="vertical-timeline-element-title">Certification</h3>
          <h5 className="vertical-timeline-element-subtitle">General Assembly</h5>
          <p className='mt-1'>
            Software Engineering Immersive
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="June 5 - 12, 2023"
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<BiLogoReact />}

        >
          <h3 className="vertical-timeline-element-title">Class Project</h3>
          <h5 className="vertical-timeline-element-subtitle">CountMeIn</h5>
          <p>
            <a href="https://count-me-in.herokuapp.com/">count-me-in.herokuapp.com</a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="May 15 - 19, 2023"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<BiLogoDjango />}

        >
          <h3 className="vertical-timeline-element-title">Class Project</h3>
          <h5 className="vertical-timeline-element-subtitle">SwiftSeats</h5>
          <p>
            <a href="https://swiftseats.herokuapp.com/">swiftseats.herokuapp.com</a>

          </p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="March 2023"
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<BiSolidCertification />}

        >
          <h3 className="vertical-timeline-element-title">Career Change</h3>
          <h5 className="vertical-timeline-element-subtitle">General Assembly</h5>
          <p>
            Began Software Engineering Immersive Course
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="June 2019 - February 2023"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Promotional Products Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">FASTSIGNS</h5>

          <ul>
            <li>
              Orchestrated the management of a promotional products department including drinkware, office items, and event giveaways, resulting in a 15% growth in brand equity
            </li>
            <li>
              Spearheaded the implementation for a paperless workflow system resulting in increased team efficiency, productivity, and 70% reduction in paper usage
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="April 2018 - February 2019"
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Convention Services Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">Visit Corpus Christi</h5>

          <ul>
            <li>
              Achieved a 95% customer satisfaction rate by ensuring end-to-end customer satisfaction, from initial turnover from sales through the post-event phase
            </li>
            <li>
              Managed convention inventory, including budget forecasting and product order management, with the aim and achievement of 10% reduction in costs
            </li>
          </ul>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="July 2014 - July 2015"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Marketing Specialist</h3>
          <h5 className="vertical-timeline-element-subtitle">JCPenney Corporate</h5>
          <p>
            Frisco, TX
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="November 2013 - July 2014"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Assistant Brand Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">Sally Beauty Corporate</h5>
          <p>
            Denton, TX
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="March 2017 - June 2017"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Business Development Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">Sageplan Technology Services</h5>
          <p>
            Austin, TX
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="August 2009 - December 2012"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
          <h5 className="vertical-timeline-element-subtitle">University of North Texas</h5>
          <p>
            B.S, Merchandising
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<FaStar />}
        /> */}
      </VerticalTimeline>
    </>
  )
}