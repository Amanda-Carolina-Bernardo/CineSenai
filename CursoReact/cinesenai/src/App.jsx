// import { Rodape } from "./components/Rodape"

// function App () {
//   return (
//     <>
//     <h1>CineSenai</h1>
//     <Rodape />
//     </>
//   );
// }

// export default App; //main recebe essa informação


import { Contador } from "./components/Contador";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App(){
  return (
    <>
    <Navbar/>
    <Contador/>
    <Home/>
    
    </>
  );

}

export default App;




