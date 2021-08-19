import React from 'react'
import melee from '../Pictures/melee.jpg'
import range from '../Pictures/range.jpg'
import '../App.css'

const AttackType = (props) => {

    let attack_type = (props.attackType === 'melee') ? 'MELEE' : 'RANGE'

    return (
        <>
            <img src={(props.attackType === 'melee') ? melee : range} alt ='' />
            <label className='hero-label'>{attack_type}</label>
        </>
    )
}

export default AttackType