import { useState } from "react";
import { Header } from "./components/Header";
import { Tweet } from "./components/Tweet"
import { AppRoutes } from "./Routes";

function App() {

  //Adicionando estado = State
  const [tweets, setTweets] = useState<string[]>([
    'Primeiro Tweet',
    'Segundo Tweet',
    'Terceiro Tweet'
  ])

  function createTweet() {
    setTweets([...tweets, '4'])
  }

  return (
    <div>
      {/* <Tweet text="Primeiro" /> */}
      {/* <Tweet text="Segundo" /> */}
      {/* <Tweet text="Terceiro" /> */}


      <AppRoutes />

      {tweets.map(tweet => {

        return <Tweet text={tweet} />

      })}

      {/* 
      css in js 
      style={{
          backgroundColor: '#8257e6',
          border: '0',
          borderRadius: '5px',
          padding: '6px 12px',
          color: '#fff'
        }} 
        */}
        
      <button
        onClick={createTweet}
        className='btn'
      >
        Adicionar tweet
      </button>

      <a
        href="/"
      >
        Home
      </a>

      <a
        href="/cart"
      >
        Carrinho
      </a>

      <a
        href="/catalog"
      >
        Catalogo
      </a>
    </div>
  );
}

export default App