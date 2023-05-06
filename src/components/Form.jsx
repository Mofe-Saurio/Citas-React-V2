import { useState, useEffect } from "react";
import Error from "./error";

const Form = ({ pacients, setPacients, pacient, setPacient }) => {
  const [name, setName] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacient).length > 0) {
      setName(pacient.name);
      setPropietario(pacient.propietario);
      setEmail(pacient.email);
      setDate(pacient.date);
      setSintomas(pacient.sintomas);
    }
  }, [pacient]);

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, propietario, email, date, sintomas].includes("")) {
      console.log("Hay al menos 1 campo vacio.");
      setError(true);
      return;
    }

    setError(false);

    // Pacient Object
    const pacientObj = {
      name,
      propietario,
      email,
      date,
      sintomas,
    };

    // Editando o generando nuevo registro
    if (pacient.key) {
      pacientObj.key = pacient.key;

      const updatePacient = pacients.map((pacientState) =>
        pacientState.key === pacient.key ? pacientObj : pacientState
      );

      setPacients(updatePacient);
      setPacient({})
    } else {
      (pacientObj.key = idGenerator()), setPacients([...pacients, pacientObj]);
    }

    // Reset form
    setName("");
    setPropietario("");
    setEmail("");
    setDate("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 mb-7 text-center">
        Anade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-indigo-300 shadow-md rounded-lg py-10 px-5 mx-3"
        onSubmit={handleSubmit}
      >
        {error && <Error message="Todos los mensajes son obligatorios." />}
        <div className="mb-5">
          <label htmlFor="mascota" className="block uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="w-full border-1 p-2 mt-2 placeholder-gray-400 rounded-md focus-visible:outline-indigo-300"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block uppercase font-bold">
            Nombre propietario
          </label>
          <input
            id="propietario"
            className="w-full border-1 p-2 mt-2 placeholder-gray-400 rounded-md focus-visible:outline-indigo-300"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-1 p-2 mt-2 placeholder-gray-400 rounded-md focus-visible:outline-indigo-300"
            placeholder="Email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="w-full border-1 p-2 mt-2 placeholder-gray-400 rounded-md focus-visible:outline-indigo-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full border-1 p-2 mt-2 placeholder-gray-400 rounded-md focus-visible:outline-indigo-300"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-600 text-white uppercase font-bold p-3 hover:bg-indigo-800 cursor-pointer transition-all"
          value={pacient.key ? "Editar paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
