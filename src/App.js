import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { collection, doc, setDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import MyQuestionnaires from './Components/MyQuestionnaires/MyQuestionnaires';

import { phq9 } from './Dev/questionnaires';

function App() {
  const [user, setUser] = useState({
    uid: 1,
    answers: [],
    selectedQuestionnaires: []
  })
  const [questionnaires, setQuestionnaires] = useState([])


  const navigate = useNavigate()

  //firebase
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "metior-926af.firebaseapp.com",
    projectId: "metior-926af",
    storageBucket: "metior-926af.firebasestorage.app",
    messagingSenderId: "38745629317",
    appId: "1:38745629317:web:3a9789d13876c310077fec"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logout() {
    //navigate
    navigate('/login')
    //set state
    setUser(null)
  }
  async function fetchQuestionnaires(){
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "questionnaires"));
    let questionnaires = []
    querySnapshot.forEach((doc) =>{
      questionnaires.push(doc.data())
    })
    setQuestionnaires(questionnaires)
  }

  useEffect(()=>{

    fetchQuestionnaires()
    

  }, [])

  return (
    <div className="App">
      {user ? <Nav logout={logout}></Nav> : ''}

      <Routes>
        {/*User Protected Routes*/}
        <Route path="/" element={<ProtectedRoutes user={user} />}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile user={user}></Profile>}></Route>
          <Route path="/my-questionnaires" element={<MyQuestionnaires user={user}></MyQuestionnaires>}></Route>
        </Route>
        {/*Unprotected Routes*/}
        <Route path="/signup" element={<Signup app={app} user={user} setUser={setUser}></Signup>}></Route>
        <Route path="/login" element={<Login app={app} setUser={setUser} user={user}></Login>}></Route>

      </Routes>



    </div>
  );
}

export default App;
