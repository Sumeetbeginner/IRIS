import React, { useEffect, useState } from 'react';
import appLogo from '../images/appLogo.png';
import { getCurrentUserData } from '../services/authService';
import { auth, database } from '../firebase'; // Import auth and database
import { onAuthStateChanged } from 'firebase/auth';



const Navbar = () => {


    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const fetchUserData = async () => {
                    try {
                        const currentUserData = await getCurrentUserData();
                        setUserData(currentUserData);

                        console.log(currentUserData);
                    } catch (error) {
                        console.error('Error fetching user data:', error.message);
                        setError(error.message);
                    } finally {
                        setIsLoading(false);
                    }
                };
    
                fetchUserData();
            } else {
                setIsLoading(false);
                console.warn('User is not authenticated.');
            }
        });
    
        return () => {
            unsubscribe(); // Cleanup the subscription
        };
    }, []);
    

    return (
        <div>
            <div id='sideBar'>
                <img className='image' src={appLogo} alt="" />
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {userData && (
                    <p id='userName'>{"Hello, "+ userData.personalInfo.username}</p>
                )}

                <div className="menu">
                    <div className='menuItem'>Home</div>
                    <div className='menuItem'>Dashboard</div>
                    <div className='menuItem'>Asessments</div>
                    <div className='menuItem'>Roadmap</div>
                    <div className='menuItem'>Clubs</div>
                    <div className='menuItem'>Councelling</div>
                </div>

                <div id="menuLast">

                <i class="fas fa-cog"></i>
                <i class="fa-solid fa-power-off"></i>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
