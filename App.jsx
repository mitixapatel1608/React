import { useState } from 'react'
import { lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Student from './components/Student'
const Student = lazy(()=>import('./components/Student'))

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<p>Loading the student details!</p>}>
        <Student/>
      </Suspense>  
    </>
  )
}

export default App
