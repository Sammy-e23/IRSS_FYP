 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
 import { getAuth , createUserWithEmailPasswrd} from "https;//gstatic.com/firebasejs/10.7.2/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyDm0vFDak4Iv0TSL2hyusWXRrUn2CyFUNo",
   authDomain: "irss-bfc0a.firebaseapp.com",
   projectId: "irss-bfc0a",
   storageBucket: "irss-bfc0a.appspot.com",
   messagingSenderId: "193789337299",
   appId: "1:193789337299:web:05ed5eaee914d6a3adbe26",
   measurementId: "G-L2PPNY4YVE"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'login_bootstrap.html'; // Change 'login.html' to the actual login page URL
});