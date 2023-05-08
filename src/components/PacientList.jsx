import Pacient from "./Pacient";

const PacientList = ({ pacients, setPacient, deletePacient }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 m-5">
      {pacients && pacients.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-teal-600">Listado pacientes</h2>
          <p className="mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          <div className="md:h-screen overflow-y-auto">
            {pacients.map((pacient) => (
              <Pacient key={pacient.key} pacient={pacient} setPacient={setPacient} deletePacient={deletePacient}/>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar.</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PacientList;
