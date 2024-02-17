
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set} from 'firebase/database'
import app from '../firebase';

const auth = getAuth()
const database = getDatabase(app)

export const register = async (email, password, degree, year, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userRef  = ref(database, `users/${user.uid}`);
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
                gameScore:"",
                questionsAnswered: "",
                questionsAsked: "",
              },

        })

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