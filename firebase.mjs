  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
  
  import {getFirestore, getDocs, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB6s3_yaGuBqGCdsjGOXfd_lnq2meWGa7k",
    authDomain: "dogs-2770f.firebaseapp.com",
    projectId: "dogs-2770f",
    storageBucket: "dogs-2770f.appspot.com",
    messagingSenderId: "255271722509",
    appId: "1:255271722509:web:bfe289f0da865cd5eebf44"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();


  window.isLoggedIn = function(){
        return auth.currentUser == null;
  }

  window.login = function(email,password){
       return signInWithEmailAndPassword(auth, email, password);
  }

  window.signup = function(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
}

window.logout = function(){
    auth.signOut();
}

window.onLogin = function( f ){
    onAuthStateChanged(auth, user => {
        f(user);
    });
}

window.addComment = function(comment){
    return addDoc(collection(db, "comments"), {comment} );
}

window.forEachComment = async function( f ){
    var docs = await getDocs( collection(db, "comments") );
    docs.forEach( doc => f(doc.data()) );
}