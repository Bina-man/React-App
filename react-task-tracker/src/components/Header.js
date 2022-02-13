import Button from './Button';
const Header = (props) => {
    const onClick = () => {
        console.log('clicked')
    }
  return (
    
    <header className="header">
        <h1>{props.title}</h1>
        <Button text='Add' color='green' onClick={onClick}/>
    </header>
  )
}

export default Header