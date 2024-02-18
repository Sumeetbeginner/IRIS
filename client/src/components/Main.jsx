import React, { useState } from 'react'
import course1 from '../images/courses/course1.webp'
import course2  from '../images/courses/course2.webp'
import course3  from '../images/courses/course3.webp'
import course4  from '../images/courses/course4.webp'
import course5  from '../images/courses/course5.webp'
import course6  from '../images/courses/course6.webp'


const Main = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const courses = [
        {
            id: 1,
            name: 'Data Structures and Algorithms',
            description: 'From arrays and linked lists to dynamic programming, learn key concepts and techniques essential for efficient problem-solving in programming. Perfect for beginners and intermediate learners.',
            image: course1, 
            branch:'Computer Science'
        },
        {
            id: 2,
            name: 'Object Oriented Programming',
            description: 'Delve into Object-Oriented Programming (OOP) principles in our comprehensive course. From encapsulation and inheritance to polymorphism, grasp essential concepts for efficient software design and development.',
            image: course2, 
            branch:'Information Technology'
        },
        {
            id: 3,
            name: 'Fluid Mechanics',
            description: 'Dive into the intricacies of fluid dynamics and engineering in our specialized course. From understanding thermodynamics to mastering fluid behavior, gain essential insights crucial for mechanical design and analysis.',
            image: course3,
            branch: 'Mechanical Engineering'
        },
        {
            id: 4,
            name: '8051 Microcontroller Programming',
            description: 'Embark on a journey into the world of embedded systems with our course on 8051 microcontroller programming. From understanding architecture to hands-on coding, acquire vital skills for designing and implementing embedded applications.',
            image: course4,
            branch: 'Electrical Engineering'
        },
        {
            id: 5,
            name: 'Calculus Fundamentals',
            description: 'Immerse yourself in the foundational principles of Calculus with our comprehensive course. From limits and derivatives to integrals and applications, master the essential concepts that form the basis of mathematical analysis.',
            image: course5,
            branch: 'Mechanical Engineering'
        },
        {
            id: 6,
            name: 'Discrete Mathematics',
            description: 'Explore the foundations of computer science with our specialized Discrete Mathematics course. From logic and set theory to graph theory and algorithms, develop critical thinking skills essential for computational problem-solving.',
            image: course6,
            branch: 'Computer Science'
        }    
     
    ];

    const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))


    const handleStartCourse = (id) => {
        // Assuming you have a route for displaying course details
        history.push(`/course/${id}`);
    };
    
    return (
        <div id='mainHome'>
            <div id="topBar">

                <div id="selBox">
                    <div id='selCourse'>Courses</div>
                    <div id='selGames'>Games</div>
                </div>

                <input
                    placeholder='Search'
                    id='searchField'
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div id="selIcon">
                    <i class="fa-solid fa-trophy"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>

            {/* Create a Map Function and pass course pic , course name , course description, start button*/}
            <div className="courseCards">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="courseCard">
                        <img src={course.image} alt={`Course ${course.id}`} />
                        <div className="courseInfo">
                            <h3>{course.name}</h3>
                            <p className='courseDesc'>{course.description}</p>
                            <button className='courseBtn' onClick={() => handleStartCourse(course.id)}>Start</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main
