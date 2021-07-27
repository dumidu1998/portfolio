import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import firebase from 'firebase';
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  var firebaseConfig = {
    apiKey: "AIzaSyDUNcsEwN7hYbKGRFTT8SI2gNxvTpjNOR4",
    authDomain: "dumiport.firebaseapp.com",
    projectId: "dumiport",
    storageBucket: "dumiport.appspot.com",
    messagingSenderId: "132154554173",
    appId: "1:132154554173:web:eff370d00a39a36406b754",
    measurementId: "G-1HCX0BCHML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
