import React from 'react'
import HeroStats from './HeroStats'
import AttributesNames from './AttributesNames'
import '../App.css'

const Stats = (props) => {

    return (
        <>
            <div className='hero-stats'>
                <HeroStats 
                    name={props.name} 
                    maxHP={props.maxHP} 
                    hpRegen={props.hpRegen} 
                    maxMana={props.maxMana} 
                    manaRegen={props.manaRegen} 
                    baseStr={props.baseStr} 
                    strGain={props.strGain} 
                    baseAgi={props.baseAgi} 
                    agiGain={props.agiGain} 
                    baseInt={props.baseInt} 
                    intGain={props.intGain} 
                    roles={props.roles} 
                    minDemage={props.minDemage}
                    maxDemage={props.maxDemage}
                    attackTick={props.attackTick}
                    attackRange={props.attackRange}
                    projectileSpeed={props.projectileSpeed}
                    baseArmor={props.baseArmor}
                    magicResistance={props.magicResistance}
                    moveSpeed={props.moveSpeed}
                    turnRate={props.turnRate}
                    dayVision={props.dayVision}
                    nightVision={props.nightVision}
                />
            </div>

            <div className='hero-stats-names'>
                <AttributesNames />
            </div>
        </>
    )
}

export default Stats