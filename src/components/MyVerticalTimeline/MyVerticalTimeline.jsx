import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { BiSolidCertification, BiLogoDjango, BiLogoReact } from 'react-icons/bi';
import { MdVolunteerActivism } from 'react-icons/md';

export default function MyVerticalTimeline() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'purple', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  purple' }}
          date="September 2023 - Present"
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Oigetit</h4>
          <p>
            Quality Assurance Analyst
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 - Present"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<MdVolunteerActivism />}
        >
          <h3 className="vertical-timeline-element-title">Volunteer</h3>
          <h4 className="vertical-timeline-element-subtitle">Hack for LA</h4>
          <p>
            Software Engineer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2023 - Present"
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<BiLogoReact />}

        >
          <h3 className="vertical-timeline-element-title">refurred</h3>
          <h4 className="vertical-timeline-element-subtitle">Group Project: Front-End Developer</h4>
          <p>
            <a href="https://www.re-furred.com/">re-furred.com</a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023"
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<BiSolidCertification />}

        >
          <h3 className="vertical-timeline-element-title">Certification</h3>
          <h4 className="vertical-timeline-element-subtitle">General Assembly</h4>
          <p>
            Software Engineering Immersive
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 5 - 12, 2023"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<BiLogoReact />}

        >
          <h3 className="vertical-timeline-element-title">Class Project</h3>
          <h4 className="vertical-timeline-element-subtitle">CountMeIn</h4>
          <p>
          <a href="https://count-me-in.herokuapp.com/">count-me-in.herokuapp.com</a>

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 15 - 19, 2023"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<BiLogoDjango />}

        >
          <h3 className="vertical-timeline-element-title">Class Project</h3>
          <h4 className="vertical-timeline-element-subtitle">SwiftSeats</h4>
          <p>
          <a href="https://swiftseats.herokuapp.com/">swiftseats.herokuapp.com</a>

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2009 - December 2012"
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
          <h4 className="vertical-timeline-element-subtitle">University of North Texas</h4>
          <p>
            B.S, Merchandising
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'teal', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </>
  )
}