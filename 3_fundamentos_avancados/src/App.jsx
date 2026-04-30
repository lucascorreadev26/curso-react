import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// importacao de imagens
import flamengo2 from './assets/flamengo2.jpg'

// importacao de componentes
import HookUseState from './components/HookUseState'
import InputUseState from './components/InputUseState'
import TextUseState from './components/TextUseState'
import RenderList from './components/RenderList'
import RenderProdutos from './components/RenderProdutos'
import MultiUseState from './components/MultiUseState'
import RenderAnimais from './components/RenderAnimais'

import './App.css'
import RenderCondicionalSimples from './components/RenderCondicionalSimples'
import RenderCondicional from './components/RenderCondicional'
import RenderLogado from './components/RenderLogado'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Avançando em Fundamentos de React</h1>

      <div>
        {/* Imagem Flamengo Pasta Public */}
        <img src="flamengo1.jpg" alt="Escudo do Flamengo" />
      </div>

      <div>
        {/*Imagem Flamengo Pasta Src*/}
        <img src={flamengo2} alt="Escudo do Flamengo" />
      </div>

      <HookUseState />
      <InputUseState />
      <TextUseState />
      <RenderList />
      <RenderProdutos />
      <MultiUseState />
      <RenderAnimais />
      <RenderCondicionalSimples />
      <RenderCondicional />
      <RenderLogado />
    </div>
  );
}

export default App
