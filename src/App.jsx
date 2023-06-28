import { useState } from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";
import Paginacion from "./components/Paginacion";

const App = () => {
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  const consultarApi = (busqueda, pagina) => {
    const apiKey = "37962156-ef3005bc33a33caf8f72a90f3";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&page=${pagina}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Datos de la API:", data);
        setImagenes(data.hits);
      })
      .catch(error => {
        console.error("Error al consultar la API:", error);
      });
  };

  const buscarDatos = (busqueda) => {
    console.log("Realizando búsqueda:", busqueda);
    setBusqueda(busqueda);
    consultarApi(busqueda, 1);
    setPaginaActual(1);
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      const nuevaPagina = paginaActual - 1;
      consultarApi(busqueda, nuevaPagina);
      setPaginaActual(nuevaPagina);
    }
  };

  const paginaSiguiente = () => {
    const nuevaPagina = paginaActual + 1;
    consultarApi(busqueda, nuevaPagina);
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Buscador onBuscar={buscarDatos} />
      </div>
      <div className="row justify-content-center">
        <Resultado imagenes={imagenes} />
      </div>
      <div className="row justify-content-center">
        <Paginacion
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          paginaActual={paginaActual}
        />
      </div>
    </div>
  );
};

export default App;
