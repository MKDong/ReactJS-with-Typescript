import './App.css'
import { Greet } from './components/Greet'

function App() {

  return (
    <div className='App'>
      <Greet name='Test Name' messageCount={10} />
    </div>
  )
}

export default App
