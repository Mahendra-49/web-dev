import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App



//10.1
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return <div>

    Allen | 11th | 12th {/* for all pages it appear*/}
    
    <BrowserRouter>   {/* this appear only for those route : conditional */}

      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/neet/online-coaching-class-11' element={<Class11Program />}/>
        <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>

      </Routes>
    </BrowserRouter>

  </div>
}
function Landing(){
  return<div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    class 11th classes
  </div>
}

function Class12Program(){
  return <div>
    class 12 classses
  </div>

}

export default App;


import {BrowserRouter, Routes, Route ,Link, Outlet } from 'react-router-dom';

function App(){
  return <div>

    {/* Allen | 11th | 12th for all pages it appear */}
    
    <BrowserRouter>   {/* this appear only for those route : conditional */}

    
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route path='/' element={<Landing />}/>
         <Route path='/neet/online-coaching-class-11' element={<Class11Program />}/>
         <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
         <Route path="*" element={<ErrorPage />}/>

        </Route>

      </Routes>
    </BrowserRouter>

  </div>
}

 function Layout(){
return<div style={{padding:20, textAlign:'center', fontSize:23}}>
    <Link to="/">Allen</Link> |
    <Link to="/neet/online-coaching-class-11">11th</Link> |
    <Link to="/neet/online-coaching-class-12">12th</Link> |

    <Outlet/>

    Footer

</div>

 }

function ErrorPage(){
  return<div>
    Sorry! Page Not Found
  </div>
}
function Landing(){
  return<div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    class 11th classes
  </div>
}

function Class12Program(){
  return <div>
    class 12 classses
  </div>

}

export default App;



import {BrowserRouter, Routes, Route ,Link, Outlet } from 'react-router-dom';

function App(){
  return <div>

    {/* Allen | 11th | 12th for all pages it appear */}
    
    <BrowserRouter>   {/* this appear only for those route : conditional */}

    
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route path='/' element={<Landing />}/>
         <Route path="*" element={<ErrorPage />}/>
        </Route>

        <Route path='/neet' element={<LandingNeet/>}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />}/>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
        </Route>

        <Route path='/jee' element={<LandingNeet/>}>
          <Route path='/jee/online-coaching-class-11' element={<Class11Program />}/>
          <Route path='/jee/online-coaching-class-12' element={<Class12Program/>}/>
        </Route>

      </Routes>
    </BrowserRouter>

  </div>
}

 function Layout(){
return<div style={{padding:20, textAlign:'center', fontSize:23}}>
    <Link to="/">Allen</Link> |
    <Link to="/neet/online-coaching-class-11">11th</Link> |
    <Link to="/neet/online-coaching-class-12">12th</Link> |

    <Outlet/>

    Footer

</div>

 }

function ErrorPage(){
  return<div>
    Sorry! Page Not Found
  </div>
}
function Landing(){
  return<div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    class 11th classes
  </div>
}

function Class12Program(){
  return <div>
    class 12 classses
  </div>

}

export default App;


import {useRef } from 'react';

function App(){

  const inputref = useRef();

  // without useref
  function Click(){
    document.getElementById("asdf").focus();
  }

// using useref
function ClickRef(){
  inputref.current.focus()
}
  return<div>
    SignUp
   <input  ref={inputref} type='email'/>
   <input type='password'/>
   <button onClick={ClickRef}>Submit</button>
  </div>



}

export default App;


 import {useRef , useState} from 'react';
 function App(){
const [count, setCount] = useState(0)
const timer = useRef(0)

function Counter(){
  timer.current =setInterval(()=>{
    setCount(c=> c + 1)
  }, 1000)
}

function Stopper(){
  clearInterval(timer.current)
 

}

return <div>
  {count}
  <br/>
  <button onClick={Counter}>start</button>
  <button onClick={Stopper}>Stop</button>
</div>
 }

 export default App;

