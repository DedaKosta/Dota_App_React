import React from 'react'

const Portrait = (props) => {

    return (
        <div className='portrait-div' onClick={() => props.onClick(props.name)}>
            <img src={props.source} alt='' className='portrait-image' />
            <label className='portrait-label'>{props.name}</label>
        </div>
    )
}

export default Portrait
