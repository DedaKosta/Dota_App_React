import React from 'react'
import '../App.css'

const HpMana = (props) => {

    let name = props.name.replaceAll(' ','_')
    switch(name) {
        case 'anti_mage':
            name = 'antimage'
            break
        case 'clockwerk':
            name = 'rattletrap'
            break
        case 'doom':
            name = 'doom_bringer'
            break
        case 'lifestealer':
            name = 'life_stealer'
            break
        case 'queen_of_pain':
            name = 'queenofpain'
            break
        case 'shadow_fiend':
            name = 'nevermore'
            break
        case 'timbersaw':
            name = 'shredder'
            break
        case 'treant_protector':
            name = 'treant'
            break
        case 'underlord':
            name = 'abyssal_underlord'
            break
        case 'vengeful_spirit':
            name = 'vengefulspirit'
            break
        case 'windranger':
            name = 'windrunner'
            break
        case 'wraith_king':
            name = 'skeleton_king'
            break
        case 'zeus':
            name = 'zuus'
            break
        default:
            break
    }

    return (
        <>
            <img src={'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/' + name + '.png'} alt='' />
            <div className='hp'>{props.maxHP} - {props.hpRegen}</div>
            <div className='mana'>{props.maxMana} - {props.manaRegen}</div>
        </>
    )
}

export default HpMana