import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <section className='about-description'>
                <p className='about-description-heading'>
                    About me
                </p>
                <p className='about-description-text'>
                    My name is Kyle and I'm a software engineer. I would consider myself
                    a jack of all trades, but I believe that is an advantage. Diving into
                    a wide variety of technology gives me a better understanding of how
                    different things work and how they can interact with one another. 
                    If you want an idea of what I do currently, just scroll down a bit 
                    and see for yourself.
                </p>
            </section>
            <div class='about-tech-stack'>
                <div className='about-tech-stack-wrapper'>
                    <div class="about-tech-stack-icons">
                        <div class="icon">
                            <img src="images/react.png" alt="React" />
                            <p>React</p>
                        </div>
                        <div class="icon">
                            <img src="images/node.png" alt="Node.js" />
                            <p>Node.js</p>
                        </div>
                        <div class="icon">
                            <img src="images/graphql.png" alt="GraphQL" />
                            <p>GraphQL</p>
                        </div>
                        <div class="icon">
                            <img src="images/aws.png" alt="AWS" />
                            <p>AWS</p>
                        </div>
                        <div class="icon">
                            <img src="images/javascript.png" alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div class="icon">
                            <img src="images/sql.png" alt="SQL" />
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;