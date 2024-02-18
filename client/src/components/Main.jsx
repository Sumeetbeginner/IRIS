import React, { useState } from 'react'
import course1 from '../images/courses/course1.webp'
import course2  from '../images/courses/course2.webp'
import course3  from '../images/courses/course3.webp'
import course4  from '../images/courses/course4.webp'
import course5  from '../images/courses/course5.webp'
import course6  from '../images/courses/course6.webp'
import { Link } from 'react-router-dom'; // 

import game1 from '../images/games/game1.webp'
import game2  from '../images/games/game2.png'
import game3  from '../images/games/game3.avif'


const Main = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const [type, setType] = useState('courses')

    const changeToGames = () => {
        setType('games');
        document.getElementById('selGames').style.backgroundColor = "#3a3fc5";
        document.getElementById('selCourse').style.backgroundColor = "#14152a";
    };
    
    const changeToCourses = () => {
        setType('courses');
        document.getElementById('selCourse').style.backgroundColor = "#3a3fc5";
        document.getElementById('selGames').style.backgroundColor = "#14152a";
    };

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
    const games = [
        {
            id: 1,
            name: 'MCQ Quiz',
            description: 'Test your knowledge in various programming concepts, from arrays and linked lists to dynamic programming. Perfect for assessing your problem-solving skills.',
            image: game1, 
            branch: 'Computer Science',
            path: '/quizgame'
        },
        {
            id: 2,
            name: 'Coding Challenges',
            description: 'Take on coding challenges to sharpen your skills and delve into Object-Oriented Programming (OOP) principles. Explore encapsulation, inheritance, and polymorphism for efficient software design and development.',
            image: game2,
            branch: 'Information Technology',
            path: '/codinggame'
        },
        {
            id: 3,
            name: 'Electrical Simulations',
            description: 'Immerse yourself in electrical simulations to experience the intricacies of fluid dynamics and engineering. Understand thermodynamics and fluid behavior, gaining insights crucial for mechanical design and analysis.',
            image: game3,
            branch: 'Electrical Engineering',
            path: '/simulationgame'
        },
        
      
    ];
    

    

    const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleStartCourse = (id) => {
        const coursePath = courses[id - 1].path;
    
        return <Link to={coursePath} />;
    };

    const handleStartGame = (id) => {
        const gamePath = games[id - 1].path;
    
        return <Link to={gamePath} />;
    };
    
    return (
        <div id='mainHome'>
            <div id="topBar">

                <div id="selBox">
                    <div onClick={changeToCourses} id='selCourse'>Courses</div>
                    <div onClick={changeToGames} id='selGames'>Games</div>
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
            {type === 'courses' ? (
                <div className="courseCards">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="courseCard">
                            <img src={course.image} alt={`Course ${course.id}`} />
                            <div className="courseInfo">
                                <h3>{course.name}</h3>
                                <p className='courseDesc'>{course.description}</p>
                                {/* Use Link instead of window.location.href */}
                                <Link to={course.path}>
                                    <button className='courseBtn'>Start</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="gameCards">
                    {filteredGames.map((game) => (
                        <div key={game.id} className="gameCard">
                            <img src={game.image} alt={`Game ${game.id}`} />
                            <div className="gameInfo">
                                <h3>{game.name}</h3>
                                <p className='gameDesc'>{game.description}</p>
                                {/* Use Link instead of window.location.href */}
                                <Link to={game.path}>
                                    <button className='gameBtn'>Play</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Main;