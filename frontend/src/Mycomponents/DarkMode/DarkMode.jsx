import React, { useEffect, useState } from 'react'
import './DarkMode.css'

const DarkMode = () => {
    const[isDarkMode,setIsDarkMode] = useState(false); 

    useEffect(() => {
        const body = document.body;
        if(isDarkMode) {
            body.classList.add('dark-mode');}
        else{
            body.classList.remove('dark-mode');
        }
    },[isDarkMode]);
    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode);
    };


  return (
    <button onClick={toggleDarkMode}>
        {isDarkMode ?'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode