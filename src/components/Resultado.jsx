import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

const Resultado = ({ imagenes }) => {
  const mostrarImagenes = () => {
    if (imagenes.length === 0) return null;
    return (
      <>
        <div className="col-12 p-5 row">
          {imagenes.map((imagen) => (
            <Imagen key={imagen.id} imagen={imagen} />
          ))}
        </div>
     
      </>
    );
  };

  return <>{mostrarImagenes()}</>;
};

export default Resultado;
