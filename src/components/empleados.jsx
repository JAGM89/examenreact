import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import ModalEmpleado from "./modalEmpleado";

const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Cargar empleados desde la API al iniciar
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setEmpleados(response.data))
      .catch(error => console.error("Error al obtener empleados:", error));
  }, []);

  // Validar y agregar empleado
  const agregarEmpleado = async () => {
    if (!nombre || !dni || !direccion || !email) {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    const nuevoEmpleado = { nombre, dni, direccion, email };

    try {
      const response = await axios.post(API_URL, nuevoEmpleado);
      setEmpleados([...empleados, response.data]);
      setShowModal(false);
      setNombre(""); setDni(""); setDireccion(""); setEmail("");

      Swal.fire("Éxito", "Empleado guardado correctamente", "success");
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el empleado", "error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Listado de Empleados</h2>

      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        <FaPlus /> Agregar Empleado
      </button>

      <ul className="list-group">
        {empleados.map(empleado => (
          <li key={empleado.id} className="list-group-item">
            <strong>{empleado.nombre}</strong> - {empleado.dni} - {empleado.direccion} - {empleado.email}
          </li>
        ))}
      </ul>

      {/* Modal para agregar empleados */}
      <ModalEmpleado
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={agregarEmpleado}
        nombre={nombre} setNombre={setNombre}
        dni={dni} setDni={setDni}
        direccion={direccion} setDireccion={setDireccion}
        email={email} setEmail={setEmail}
      />
    </div>
  );
}

export default Empleados;
