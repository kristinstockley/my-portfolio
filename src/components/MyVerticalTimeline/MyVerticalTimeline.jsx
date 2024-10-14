import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { BiSolidCertification, BiLogoDjango, BiLogoReact, BiSolidBriefcase } from 'react-icons/bi';
import { MdVolunteerActivism } from 'react-icons/md';
import './MyVerticalTimeline.scss';
import ResumeModal from '../../components/ResumeModal/ResumeModal';



export default function MyVerticalTimeline() {
  return (
    <>
      <div className='vertical-timeline'>
        <div className="d-flex align-items-center justify-content-between timeline-header">
          <h1 className="fw-bolder mb-0 timeline-title">My Tech Timeline</h1>
          <ResumeModal />
        </div>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-black"
            contentStyle={{ background: '#255C63', color: 'white' }}

            date="December 2023 - Present"
            iconStyle={{ background: '#C9CE00', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #255C63' }}

            icon={<FaBriefcase />}

          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h5 className="vertical-timeline-element-subtitle">Harvest Growth Strategies</h5>
            <ul className='text-white my-3'>
              <li className='mb-2'>
                Sole developer responsible for all technical decisions and implementations across multiple projects, ensuring alignment with business goals and requirements under tight deadlines            </li>
              <li className='mb-2'>
                Created and deployed QR code-based digital menus for local restaurants, including <Link to='https://thepointofcorpuschristi.com/' target='_blank' className='text-white link-underline-light'>The Point of Corpus Christi</Link> and <Link to='https://laplayabythebay.com/' target='_blank' className='text-white link-underline-light'>La Playa By The Bay</Link>, using the MERN stack, significantly enhancing customer experience and streamlining operations            </li>
              <li>
                Designed and implemented an intuitive admin dashboard for menu management, enabling seamless CRUD operations on menu items, resulting in efficient real-time updates            </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fbfbfb' }}

            date="September 2023 - Present"
            iconStyle={{ background: '#F24D2C', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="qa-vertical-timeline-element-title text-black">Quality Assurance Analyst Intern</h3>
            <h5 className="qa-vertical-timeline-element-subtitle text-black">Oigetit</h5>

            <ul className='text-black my-3'>
              <li className='mb-2'>
                Conduct comprehensive quality assurance testing to identify and document software bugs
              </li>
              <li>
                Provide valuable insights and recommendations to optimize the user interface
              </li>
            </ul>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fbfbfb' }}
            date="March 2023 - June 2023"
            iconStyle={{ background: '#C9CE00', color: '#fff' }}
            icon={<BiSolidCertification />}

          >
            <h3 className="vertical-timeline-element-title">Certification</h3>
            <h5 className="vertical-timeline-element-subtitle">General Assembly</h5>
            <p className='mt-1'>
              Software Engineering Immersive
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fbfbfb' }}
            date="June 2019 - February 2023"
            iconStyle={{ background: '#F24D2C', color: '#fff' }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">Promotional Products Manager</h3>
            <h5 className="vertical-timeline-element-subtitle">FASTSIGNS</h5>

            <ul className='my-3'>
              <li className='mb-2'>
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
            iconStyle={{ background: '#C9CE00', color: '#fff' }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">Convention Services Manager</h3>
            <h5 className="vertical-timeline-element-subtitle">Visit Corpus Christi</h5>

            <ul className='my-3'>
              <li className='mb-2'>
                Achieved a 95% customer satisfaction rate by ensuring end-to-end customer satisfaction, from initial turnover from sales through the post-event phase
              </li>
              <li>
                Managed convention inventory, including budget forecasting and product order management, with the aim and achievement of 10% reduction in costs
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fbfbfb' }}
            date="August 2009 - December 2012"
            iconStyle={{ background: '#F24D2C', color: '#fff' }}
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
      </div>
    </>
  )
}