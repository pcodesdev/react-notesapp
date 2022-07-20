import React from 'react'

import catIMG from './assets/cat.jpg'

function ReactFacts(){
    return(
        <div>
        <div className='bg-dark text-white p-5 d-flex justify-content-between'>
            <h2>React Facts</h2>
            <p>toggle</p>
        </div>
        <div className='bg-secondary p-5 fs-3 text' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>React Fun Facts</h1>
            <ul style={{backgroundImage: `url(${catIMG})`,backgroundSize:'cover'}}>
            <li> React is not a framework</li>
            <li>React has a strong community</li>
            <li>Virtual DOM is faster than real DOM</li>
            <li>Keep your components small</li>
            <li>Supports Type Systems</li>
            <li>React development and SEO go together</li>
            </ul>
        </div>
        </div>
    )
}

export default ReactFacts