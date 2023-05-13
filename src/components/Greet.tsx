type GreetProps = {
    name: string
    messageCount: number
}

export function Greet( props: GreetProps) {
  return (
    <div> {props.name} Greet</div>
  )
}

