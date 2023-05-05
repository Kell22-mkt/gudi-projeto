import {CSSProperties} from 'react'

type ButtonProps = {
  text: string,
  outline?: boolean,
  theme?: string,
  color?: string,
  cn?: string,
  objStyle?:CSSProperties,
}

function Button(props: ButtonProps, _outline=false){

  let objStyle:CSSProperties = {
    boxShadow: 'inset 0 0 0 1px '+props.color,
    color: props.color,
    backdropFilter: "blur(5px)"
  }
  
  return <button style={objStyle} className={props.outline? "Button Button-outline" : "Button"}>{props.text}</button>
}

export default Button


