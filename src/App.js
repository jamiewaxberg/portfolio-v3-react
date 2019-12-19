import React from 'react';
import './App.scss';
import Header from './components/header/Header.js'
import CardGrid from './components/cardGrid/CardGrid.js'
import Extracurriculars from './components/extracurriculars/Extracurriculars.js'
import About from './components/about/About.js'
import * as firebase from 'firebase';

function App() {
	const  firebaseConfig = {
		apiKey: "AIzaSyB0vEyoXbZE14X1thYIFhZspnj-RNkxcpM",
		authDomain: "portfolio-v3-971d8.firebaseapp.com",
		databaseURL: "https://portfolio-v3-971d8.firebaseio.com/",
		projectId: "portfolio-v3-971d8",
		storageBucket: "portfolio-v3-971d8.appspot.com",
		messagingSenderId: "359877008567",
		appId: "1:359877008567:web:dac7b66ef8951e72198132"
	};
 
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);


  return (
    <div className="App">
      <Header />
      <CardGrid />
      <Extracurriculars />
      <About />
    </div>
  );
}

export default App;
