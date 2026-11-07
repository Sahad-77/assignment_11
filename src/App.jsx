
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch resume data from backend
    useEffect(() => {

        axios.get('/api/resume')
            .then((response) => {
                setResume(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Unable to load resume data.');
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2 className="message">Loading Resume...</h2>;
    }

    if (error) {
        return <h2 className="message">{error}</h2>;
    }

    if (!resume) {
        return <h2 className="message">No Resume Found</h2>;
    }

    return (
        <div className="resume-container">

            <h1>{resume.name}</h1>

            <div className="contact">

                <p>
                    {resume.location} | {resume.phone} |
                    Mail: <a href={`mailto:${resume.email}`}>
                        {resume.email}
                    </a>
                </p>

                <p>
                    LinkedIn: <a href={resume.linkedin} target="_blank" rel="noreferrer">Profile</a> |
                    GitHub: <a href={resume.github} target="_blank" rel="noreferrer">Sahad-77</a> |
                    Portfolio: <a href={resume.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
                </p>

            </div>

            <hr />

            <section>
                <h3>Summary</h3>
                <p>{resume.summary}</p>
            </section>

            <section>
                <h3>Education</h3>

                {resume.education.map((item, index) => (
                    <div key={index} className="item">
                        <strong>{item.qualification}</strong>,
                        {' '}{item.institution}
                        {' '}({item.period})

                        <p>
                            {item.resultLabel}: <strong>{item.result}</strong>
                        </p>
                    </div>
                ))}
            </section>

            <section>
                <h3>Technical Skills</h3>

                <ul>
                    {resume.technicalSkills.map((skill, index) => (
                        <li key={index}>
                            <strong>{skill.category}:</strong>
                            {' '}{skill.items}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Certifications</h3>

                {resume.certifications.map((cert, index) => (
                    <div key={index} className="item">

                        <strong>{cert.title}</strong>

                        <ul>
                            {cert.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </section>

            <section>
                <h3>Projects and Data Experience</h3>

                {resume.projects.map((project, index) => (
                    <div key={index} className="item">

                        <strong>{project.title}</strong>

                        <ul>
                            {project.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </section>

            <section>
                <h3>Key Skills</h3>

                <ul>
                    {resume.keySkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Declaration</h3>
                <p>{resume.declaration}</p>
            </section>

        </div>
    );
}

export default App;
