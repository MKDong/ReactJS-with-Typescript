type personName = {
    name: {
        first: string;
        last: string;
    }
}
function Person( props: personName) {
  return (
    <div> {props.name.first} -- {props.name.last} Person</div>
  )
}

export default Person