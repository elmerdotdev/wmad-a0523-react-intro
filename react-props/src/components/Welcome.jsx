const Welcome = (props) => {
  return (
    <div onClick={() => props.alert()} style={{ fontSize: 30 }}>Welcome {props.firstname} {props.lastname}!</div>
  )
}

export default Welcome