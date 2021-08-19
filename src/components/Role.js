import React from 'react'
import '../App.css'

const Role = (props) => {

    let meter = ''
    switch(props.roleValue) {
        case '0':
            meter = '0%'
            break
        case '2':
            meter = '33.33%'
            break
        case '4':
            meter = '66.66%'
            break
        case '6':
            meter = '100%'
            break
        default:
            break
    }

    return (
        <div className='role'>
            <label className='role-label'>{props.name}</label>
            <div className='role-bar'>
                <div className='true-values' style={{width: meter}}></div>
            </div>
        </div>
    )
}

export default Role