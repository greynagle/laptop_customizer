import React from 'react'
import Options from '../Options/Options'

export default function MainForm(props) {
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options 
              features={props.features} 
              selected={props.selected} 
              handleUpdate={props.handleUpdate}
            />
        </form>
    )
}