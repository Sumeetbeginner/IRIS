import React, { useEffect, useState } from 'react';
import '../css/home.css';
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
                    <p id='userName'>{userData.personalInfo.username}</p>
                )}
            </div>
        </div>
    );
};

export default Navbar;
