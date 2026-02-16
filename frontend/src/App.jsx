import { Github, Youtube, ChartColumnBig } from 'lucide-react';
import './index.css'

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="flex space-x-4">
          <a href="https://github.com/Kub3kkk/tekstdle">
            <Github color="white" size={48} />
          </a>
          <a href="">
            <Youtube color="white" size={48} />
          </a>
        </div>

        <div>
          <h1 className='text-5xl text-white'>Tekstdle.pl</h1>
        </div>

        <div>
          <ChartColumnBig color='white' size={48}/>
        </div>
      </div>

    </>
  )
}

const Verse = () => {
  
}

const Pannel = () => {
  return (
    <>

    </>
  )
}

const App = () => {
  return (
    <>
      <NavBar />
      
    </>
  )
}

export default App
