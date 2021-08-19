import React from 'react'
import str from '../Pictures/str.jpg'
import agi from '../Pictures/agi.jpg'
import int from '../Pictures/int.jpg'
import '../App.css'


const BaseGainStats = (props) => {

    return (
        <>
            <div className='str-gain-stats'>
                <img src={str} alt='' />
                <label>{props.baseStr} + {props.strGain}</label>
            </div>

            <div className='agi-gain-stats'>
                <img src={agi} alt='' />
                <label>{props.baseAgi} + {props.agiGain}</label>
            </div>

            <div className='int-gain-stats'>
                <img src={int} alt='' />
                <label>{props.baseInt} + {props.intGain}</label>
            </div>
        </>
    )
}

export default BaseGainStats