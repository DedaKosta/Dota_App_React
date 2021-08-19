import React from 'react'
import empty_star from '../Pictures/empty_star.png'
import full_star from '../Pictures/full_star.png'
import '../App.css'

const Complexity = (props) => {

    return (
        <>
            <label className='hero-label'>COMPLEXITY &nbsp; &nbsp; &nbsp;</label>
            <img src={full_star} alt='' />
            <img src={(props.complexity >=2) ? full_star : empty_star} alt='' />
            <img src={(props.complexity >2) ? full_star : empty_star} alt='' />
        </>
    )
}

export default Complexity