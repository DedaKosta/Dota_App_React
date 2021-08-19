import React from 'react'
import HeroInformation from './HeroInformation'
import HeroImage from './HeroImage'
import '../App.css'



const Information = (props) => {

    return (
        <div className='information'>
            <div className='hero-information'>
                <HeroInformation 
                    name={props.name}
                    main={props.main}
                    atttackType={props.attackType}
                    complexity={props.complexity}
                    description={props.description}
                />
            </div>

            <div className='hero-portrait'>
                <HeroImage name={props.name} />
            </div>
        </div>
    )
}

export default Information
