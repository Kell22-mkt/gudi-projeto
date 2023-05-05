type InputProps = {
  text?: string,
  placeholder?: string,
  outline?: boolean,
}

function Input(props: InputProps, _outline=false){
  return <input type="text" placeholder={props.placeholder} className={props.outline? "Input Input-outline" : "Input"} value={props.text} />
}
export default Input


