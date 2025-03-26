import React from "react";
import Entrada from "./entrada";
import { FaSave } from "react-icons/fa";

function ModalEmpleado({ show, onClose, onSave, nombre, setNombre, dni, setDni, direccion, setDireccion, email, setEmail }) {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <Entrada label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese nombre" />
            <Entrada label="DNI" type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="Ingrese DNI" />
            <Entrada label="Dirección" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Ingrese dirección" />
            <Entrada label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese email" />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button className="btn btn-success" onClick={onSave}>
              <FaSave /> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEmpleado;
