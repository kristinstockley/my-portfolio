import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { BiSolidCertification, BiLogoDjango, BiLogoReact, BiSolidBriefcase } from 'react-icons/bi';
import { MdVolunteerActivism } from 'react-icons/md';
import './MyVerticalTimeline.scss';


export default function MyVerticalTimeline() {
  return (
    <>
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
          <p className="qa-p">
            Remote
          </p>
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
          <p>
            Remote
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="March 2023 - June 2023"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<BiSolidCertification />}

        >
          <h3 className="vertical-timeline-element-title">Certification</h3>
          <h5 className="vertical-timeline-element-subtitle">General Assembly</h5>
          <p>
            Software Engineering Immersive
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="June 2019 - February 2023"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Promotional Products & Sales Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">FASTSIGNS</h5>
          <p>
            Corpus Christi, TX
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fbfbfb' }}
          date="April 2018 - February 2019"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<BiSolidBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Convention Services Manager</h3>
          <h5 className="vertical-timeline-element-subtitle">Visit Corpus Christi</h5>
          <p>
            Corpus Christi, TX
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fbfbfb' }}
          date="August 2009 - December 2012"
          iconStyle={{ background: 'grey', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
          <h5 className="vertical-timeline-element-subtitle">University of North Texas</h5>
          <p>
            B.S, Merchandising
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#d22626', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
          </>
  )
}