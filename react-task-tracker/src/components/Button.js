import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    
  return (
    <button onClick={onClick} className="btn" style={{ backgroundColor:color }}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'Blue',
    text: 'Button'
}
Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired
}


export default Button