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
  return (
    <>
      <p className='text-gray-300'> LALALA </p>
    </>
  )
}

const Pannel = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mt-8 max-w-md mx-auto">

        
        <div className="flex flex-col gap-4 w-ful">
          <Verse />
          <Verse />
        </div>

        
        <div className="flex w-full gap-2">
          <input
            type="text"
            placeholder="Jaki tu utwór?"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
          />
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
            Submit
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
            Skip
          </button>
        </div>

      </div>
    </>


  )
}

const App = () => {
  return (
    <>
      <NavBar />
      <Pannel />
      
    </>
  )
}

export default App

