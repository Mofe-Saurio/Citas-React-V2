import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PacientList from "./components/PacientList";

function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const pacientsLS = JSON.parse(localStorage.getItem('pacients')) ?? [];

      setPacients(pacientsLS)
    }

    getLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients))
    
  }, [pacients])

  const deletePacient = (key) => {
    const updatePacients = pacients.filter(pacient => pacient.key !== key)
    setPacients(updatePacients)
  }

  return (
    <div className="container mx-auto mt-5  ">
      <Header />
      <div className="md:flex mt-12">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <PacientList pacients={pacients} setPacient={setPacient} deletePacient={deletePacient} />
      </div>
    </div>
  );
}

export default App;
