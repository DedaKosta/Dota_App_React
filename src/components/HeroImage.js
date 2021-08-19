import React from 'react'
import '../App.css'

const HeroImage = (props) => {

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
            <video poster={'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/' + name + '.png'}
                    autoplay='' 
                    preload='auto'
                    loop
                 >
                    <source type='video/webm' src={'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/' + name + '.webm'} />
                    <img src={'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/' + name + '.png'} alt='' />
                </video>
        </>
    )
}

export default HeroImage