import React from 'react'
import MainAttribute from './MainAttribute'
import AttackType from './AttackType'
import Complexity from './Complexity'
import '../App.css'

const HeroInformation = (props) => {

    let description = props.description
    let desc_new_lines = description.split('__')

    return (
        <>
            <div className='hero-main-attribute'>
                <MainAttribute main={props.main} />
            </div>

            <div className='description'>
                <label className='description-label'>
                    {
                        desc_new_lines.map((line) => (
                            <p>{line}</p>
                        ))
                    }
                </label>
            </div>

            <div className='attack-type'>
                <AttackType attackType={props.attackType} />
            </div>

            <div className='complexity'>
                <Complexity complexity={props.complexity} />
            </div>
        </>
    )
}

export default HeroInformation