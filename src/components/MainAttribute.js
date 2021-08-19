import React from 'react'
import str from '../Pictures/str.jpg'
import agi from '../Pictures/agi.jpg'
import int from '../Pictures/int.jpg'
import '../App.css'

const MainAttribute = (props) => {

    let main_att = (props.main === 'str') ? 'STRENGTH' : ((props.main === 'agi') ? 'AGILITY' : 'INTELLIGENCE')

    return (
        <>
            <img src={(props.main === 'str') ? str : ((props.main === 'agi') ? agi : int)} alt=''/>
            <label className='hero-label'>{main_att}</label>
        </>
    )
}

export default MainAttribute