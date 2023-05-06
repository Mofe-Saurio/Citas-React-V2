const Pacient = ({ pacient, setPacient, deletePacient }) => {
  const { name, propietario, email, date, sintomas, key } = pacient;

  const handleDelete = () => {
    const resp = confirm('Deseas eliminar este paciente?')

    if (resp) deletePacient(key)
  }


  return (
    <div className="bg-indigo-300 shadow-md rounded-lg py-5 px-5 mx-3 mb-3">
      <p className="font-bold mb-3 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-end mt-10 gap-2">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
          onClick={() => setPacient(pacient)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white rounded-md"
          onClick={handleDelete}
        >
          Elimiar
        </button>
      </div>
    </div>
  );
};

export default Pacient;
