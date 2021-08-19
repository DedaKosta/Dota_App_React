import React from 'react'
import HpMana from './HpMana'
import BaseGainStats from './BaseGainStats'
import '../App.css'

const Attributes = (props) => {

    return (
        <div className='hp-mana-stats'>
            <div className='hp-mana'>
                <HpMana 
                    name={props.name}
                    maxHP={props.maxHP}
                    hpRegen={props.hpRegen}
                    maxMana={props.maxMana}
                    manaRegen={props.manaRegen}
                />
            </div>

            <div className='base-gain-stats'>
                <BaseGainStats 
                    baseStr={props.baseStr}
                    baseAgi={props.baseAgi}
                    baseInt={props.baseInt}
                    strGain={props.strGain}
                    agiGain={props.agiGain}
                    intGain={props.intGain}
                />
            </div>
        </div>
    )
}

export default Attributes