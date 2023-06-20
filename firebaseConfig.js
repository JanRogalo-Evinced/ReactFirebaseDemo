import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

export const firebaseConfig = {
    apiKey: 'AIzaSyCCMdFMq0U8eEW8K7ZLFesy81WenE63xUo',
    authDomain: 'fir-react-demo-test.firebaseapp.com',
    projectId: 'fir-react-demo-test',
    storageBucket: 'fir-react-demo-test.appspot.com',
    messagingSenderId: '1095579200553',
    appId: '1:1095579200553:web:bbe185c6bd267f6f600038',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)