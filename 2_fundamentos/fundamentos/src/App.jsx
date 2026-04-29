import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// components
import FristFundamentos from './components/FristFundamentos'
import TemplateExpression from './components/TemplateExpression'
import ReaproveitarComponents from './components/ReaproveitarComponents'
import MyEvent from './components/Events'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

    return(
      <div>
          <FristFundamentos />
          <TemplateExpression />
          <ReaproveitarComponents />
          <MyEvent />
          <Challenge />
      </div>
    )
}

export default App
