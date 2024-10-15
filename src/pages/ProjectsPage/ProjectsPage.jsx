import React, { useState } from 'react';
import './ProjectsPage.scss';

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    // Project data
    const projects = [
        {
            id: 1,
            category: 'client',
            title: 'The Point of Corpus Christi',
            imgSrc: 'assets/images/thepoint-menu.png',
            role: 'Full Stack Developer - MERN Menu & Dashboard',
            link: 'https://thepointofcorpuschristi.com/'
        },
        {
            id: 2,
            category: 'client',
            title: 'La Playa By The Bay',
            imgSrc: 'assets/images/laplaya-dashboard.png',
            role: 'Full Stack Developer - MERN Menu & Dashboard',
            description: 'Online Ordering in Progress',

            link: 'https://laplayabythebay.com/'
        },
        {
            id: 3,
            category: 'projects',
            title: 'refurred',
            imgSrc: 'assets/images/breed-selector.png',
            role: 'Group Project - Front End Developer',
            link: 'https://www.re-furred.com/'
        },
        {
            id: 4,
            category: 'general',
            title: 'CountMeIn',
            imgSrc: 'assets/images/count-me-in.png',
            role: 'Class Project - MERN Stack',
            link: 'https://count-me-in.herokuapp.com'
        },
        {
            id: 5,
            category: 'general',
            title: 'SwiftSeats',
            imgSrc: 'assets/images/swift-seats.png',
            role: 'Class Project - Django',
            link: 'https://swiftseats.herokuapp.com/'
        }
    ];

    // Filtered projects based on the selected category
    const filteredProjects = projects.filter(project => {
        if (activeFilter === '*') return true;
        return project.category === activeFilter;
    });

    return (
        <>
            <section className="section_gap portfolio_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="main-title">
                                <h1>Latest Works</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="projects_filter">
                                <ul className="filter list">
                                    <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterChange('*')}>
                                        All
                                    </li>
                                    <li className={activeFilter === 'client' ? 'active' : ''} onClick={() => handleFilterChange('client')}>
                                        Clients
                                    </li>
                                    <li className={activeFilter === 'projects' ? 'active' : ''} onClick={() => handleFilterChange('projects')}>
                                        Projects
                                    </li>
                                    <li className={activeFilter === 'general' ? 'active' : ''} onClick={() => handleFilterChange('general')}>
                                        General Assembly
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="projects_inner row grid">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="col-lg-4 col-md-6 grid-item">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="projects_item">
                                        <img className="img-fluid w-100" src={project.imgSrc} alt={project.title} />
                                        <div className="projects_text">
                                            <h4>{project.title}</h4>
                                            <p>{project.role}</p>
                                            <small>{project.description}</small>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
