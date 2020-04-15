import React from 'react'
import Summary from '../Summary/Summary'
import SuTotal from '../SuTotal/SuTotal'

export default function MainForm(props) {
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
              selected={props.selected}
            />
            <SuTotal
              selected={props.selected}
            />
        </section>
    )
}