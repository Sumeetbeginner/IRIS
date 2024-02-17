// authService.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { auth, database } from '../firebase';  // Import auth from firebase.js

export const register = async (email, password, degree, year, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userRef = ref(database, `users/${user.uid}`);
        await set(userRef, {
            personalInfo: {
                username: username || "",
                email: user.email || "",
                degree: degree || "",
                year: year || "",
            },
            siteInfo: {
                currCourses: "",
                badges: "",
                completedCourse: "",
                gameScore: "",
                questionsAnswered: "",
                questionsAsked: "",
            },
        });

    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const getCurrentUserData = async () => {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('User is not authenticated.');
        }

        const userSnapshot = await get(ref(database, `users/${user.uid}`));

        if (userSnapshot.exists()) {
            return userSnapshot.val();
        } else {
            console.warn('User data does not exist in the database.');
        }

        return null;
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        throw error;
    }
};
