import React from 'react'
import '../App.css'

const StatsNames = (props) => {

    return (
        <div className='stats-names'>
            <div className='attack-name'>
                <label>ATTACK</label>
            </div>
            <div className='defense-name'>
                <label>DEFENSE</label>
            </div>
            <div className='mobility-name'>
                <label>MOBILITY</label>
            </div>
        </div>
    )
}

export default StatsNames