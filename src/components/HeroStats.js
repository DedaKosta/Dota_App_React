import React from 'react'
import Attributes from './Attributes'
import Role from './Role'
import StatsNames from './StatsNames'
import StatsValues from './StatsValues'
import '../App.css'

const HeroStats = (props) => {

    return (
        <>
            <div className='attributes'>
                <Attributes 
                    name={props.name}
                    maxHP={props.maxHP}
                    hpRegen={props.hpRegen}
                    maxMana={props.maxMana}
                    manaRegen={props.manaRegen}
                    baseStr={props.baseStr}
                    baseAgi={props.baseAgi}
                    baseInt={props.baseInt}
                    strGain={props.strGain}
                    agiGain={props.agiGain}
                    intGain={props.intGain}
                />
            </div>

            <div className='vertical-line'></div>

            <div className='roles'>
                 <div className='roles-information'>
                    {
                        props.roles.map((role) => (
                            <Role name={role.name} roleValue={role.value}/>
                        ))
                    }
                </div>
            </div>

            <div className='vertical-line'></div>

            <div className='stats-information'>
                
                <StatsNames />

                <div className='stats-values'>
                    <StatsValues 
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
            </div>
        </>
    )
}

export default HeroStats