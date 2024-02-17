import React from 'react'

const Main = () => {
    return (
        <div id='mainHome'>
            <div id="topBar">

                <div id="selBox">
                    <div id='selCourse'>Courses</div>
                    <div id='selGames'>Games</div>
                </div>

                <input placeholder='Search' id='searchField' type="search" />
                
                <div id="selIcon">
                <i class="fa-solid fa-trophy"></i>
                <i class="fa-solid fa-user"></i>
                </div>
            </div>

            <div id="courseCards">

            </div>
        </div>
    )
}

export default Main
