import './App.css'

import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import imagenAuto from "./assets/seguro-para-auto.png";


function App()  {
  return(
    <>
    <NavBar/>
    <ItemListContainer mensaje="Cotizá tu seguro de auto online y ahorrá" />
    <img src={imagenAuto} alt="Seguro para auto" style={{ maxWidth: "70%", display: "block", margin: "0 auto" }} />

    </>
  
  );


}

export default App