import React from 'react'
import demage from '../Pictures/demage.png'
import attack_tick from '../Pictures/attack_tick.png'
import attack_range from '../Pictures/attack_range.png'
import projectile_speed from '../Pictures/projectile_speed.png'
import base_armor from '../Pictures/base_armor.png'
import magic_resistance from '../Pictures/magic_resistance.png'
import move_speed from '../Pictures/move_speed.png'
import turn_rate from '../Pictures/turn_rate.png'
import vision from '../Pictures/vision.png'
import '../App.css'

const StatsValues = (props) => {

    return (
        <>
            <div className='attack'>
                 <div className='attack-value'>
                     <img src={demage} alt='' />
                     <label className='stats-value-label'>{props.minDemage} - {props.maxDemage}</label>
                 </div>
                 <div className='attack-value'>
                     <img src={attack_tick} alt='' />
                     <label className='stats-value-label'>{props.attackTick}</label>
                 </div>
                 <div className='attack-value'>
                     <img src={attack_range} alt='' />
                     <label className='stats-value-label'>{props.attackRange}</label>
                 </div>
                 <div className='attack-value'>
                     <img src={projectile_speed} alt='' />
                     <label className='stats-value-label'>{props.projectileSpeed}</label>
                 </div>
            </div>
                        
            <div className='defense'>
                <div className='defense-value'>
                    <img src={base_armor} alt='' />
                    <label className='stats-value-label'>{props.baseArmor}</label>
                </div>
                <div className='defense-value'>
                    <img src={magic_resistance} alt='' />
                    <label className='stats-value-label'>{props.magicResistance}</label>
                </div>
            </div>
                        
            <div className='mobility'>
                <div className='mobility-value'>
                    <img src={move_speed} alt='' />
                    <label className='stats-value-label'>{props.moveSpeed}</label>
                </div>
                <div className='mobility-value'>
                    <img src={turn_rate} alt='' />
                    <label className='stats-value-label'>{props.turnRate}</label>
                </div>
                <div className='mobility-value'>
                    <img src={vision} alt='' />
                    <label className='stats-value-label'>{props.dayVision}/{props.nightVision}</label>
                </div>
            </div>
        </>
    )
}

export default StatsValues