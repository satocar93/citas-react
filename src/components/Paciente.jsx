

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
      const respuesta = confirm("¿Deseas eliminar este paciente?")

      if (respuesta) {
        eliminarPaciente(id)
      }
    }
     
  return (
    <div className="mt-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700">
          NOMBRE: {""}
          <span className="font-normal">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700">
          PROPIETARIO: {""}
          <span className="font-normal">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700">
          EMAIL: {""}
          <span className="font-normal">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700">
          FECHA ALTA: {""}
          <span className="font-normal">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700">
          SINTOMAS: {""}
          <span className="font-normal">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg"
                onClick={() => setPaciente(paciente)}
            >
                Editar
            </button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg"
                onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>
      </div>
  )
}

export default Paciente
