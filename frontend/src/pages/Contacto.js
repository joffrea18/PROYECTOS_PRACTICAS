import React, { useState, useEffect } from "react";

function Contacto() {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    companyName: "",
    businessActivity: "",
    contactPerson: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
  });

  // Cargar datos desde sessionStorage al montar el componente
  useEffect(() => {
    const savedData = sessionStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Convertir el string en un objeto
    }
  }, []);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem("contactForm", JSON.stringify(updatedData)); // Guardar en sessionStorage
      return updatedData;
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convertimos el objeto formData a JSON
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);
      window.location.href = "/firewall";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };


  return (
    <div className="form">
      <h1>Contacto</h1>
      <form>
        <div className="form-row">
          <label>Nombre de la Empresa</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Ingresa el nombre de la empresa"
            autoComplete="off"
            
          />
        </div>

        <div className="form-row">
          <label>Actividad Comercial</label>
          <input
            type="text"
            name="businessActivity"
            value={formData.businessActivity}
            onChange={handleInputChange}
            placeholder="Ingresa la actividad comercial"
            
          />
        </div>

        <div className="form-row">
          <label>Persona que aporta la información</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            placeholder="Ingresa el nombre del contacto"
           
          />
        </div>

        <div className="form-row">
          <label>Correo de Contacto</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ingresa el correo electrónico"
            
          />
        </div>

        <div className="form-row">
          <label>Teléfono de Contacto</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Ingresa el número de teléfono"
          />
        </div>

        <div className="form-row">
          <label>Departamento</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Ingresa el departamento"
          />
        </div>

        <div className="form-row">
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <label>Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button" 
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Ir al Firewall
        </button>
      </form>
    </div>
  );
}

export default Contacto;
