import React from "react"
import "./styles.css"

const Button = props => (
    <button
        onClick={e => props.click && props.click(props.label)}
        className={`
            button
            ${props.operation ? 'operation' : '' }
            ${props.double ? 'double' : '' }
            ${props.triple ? 'triple' : '' }
        `}>
        {props.label}
    </button>
)

export default Button