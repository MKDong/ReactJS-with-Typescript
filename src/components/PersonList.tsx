
type PeopleListProps = {
  people: {
    name: string,
    age: number
  }[]
}

function PersonList(props: PeopleListProps) {
  return (
    <div>PersonList
      {props.people.map((people, index: number) => {
        return(<div key={index}>{people.name} tuoi {people.age} <br></br> </div> )
      })}
    </div>
  )
}

export default PersonList