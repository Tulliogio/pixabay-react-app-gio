const Buscador = (props) => {
     const handleSubmit = (event) => {
          event.preventDefault();
          // Aquí puedes agregar la lógica para manejar el envío del formulario
          // Por ejemplo, puedes obtener el valor del campo de entrada y realizar una búsqueda
          // utilizando esa información.
          const inputValue = event.target.elements[0].value;
          props.onBuscar(inputValue);
          console.log("Input value:", inputValue);
     };
     
     return (
          <form onSubmit={handleSubmit}>
               <div className="row">
                    <div className="form-group col-md-8">
                         <input type="text" className="form-control form-control-lg" placeholder="Busca tu imagen,ejemplo: Futbol" />

                    </div>
                    <div className="form-group col-md-4">
                         <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar ..." />

                    </div>

               </div>
         </form>
     )
};
export default Buscador;