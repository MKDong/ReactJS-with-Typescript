type GreetProps = {
    name: string
    messageCount: number
    isLoading: boolean
}

export function Greet( props: GreetProps) {
  return (
    <div> {props.isLoading ? `name :${props.name} ------ messageCount: ${props.messageCount} --------` : 'welcom false'} </div>
  )
}

