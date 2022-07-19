import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCE31t5gHjrskdw9l9YQ_orXMK3DSWLzTs",
    authDomain: "clone-e7ecf.firebaseapp.com",
    projectId: "clone-e7ecf",
    storageBucket: "clone-e7ecf.appspot.com",
    messagingSenderId: "883919588057",
    appId: "1:883919588057:web:769f68e52416b04af38cc8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email= signupForm.email.value
    const password= signupForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
        console.log("user created:", cred.user)
        signupForm.reset()
    })
    .catch((err)=>{
        console.log(err.message)
    })
})
