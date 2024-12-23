import DaisyNav from "./components/DaisyNav/DaisyNav"
import LineChart from "./components/LiceChart/LineChart"
import NavBar from "./components/NavBar/NavBar"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {


  return (
    <>
      <div >
      <NavBar></NavBar>
      <div className="mt-56 ">
      <DaisyNav></DaisyNav>
      </div>
      </div>
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>

      <Phones></Phones>
    </>
  )
}

export default App
