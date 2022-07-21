import React, {useState} from 'react'

import Navbar from './Navbar'
import Main from './Main'
import './style.css'

function ReactFacts(){

    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}

export default ReactFacts