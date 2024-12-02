import React, { useState, useEffect } from "react";

function Firewall() {
  const [inputValue, setInputValue] = useState(""); // Estado para manejar el valor del input

  // Cargar el valor desde Session Storage cuando el componente se monta
  useEffect(() => {
    const storedValue = sessionStorage.getItem("contactInput"); // Obtener el valor de 'contactInput'
    if (storedValue) {
      setInputValue(storedValue); // Actualizar el estado si el valor existe
    }
  }, []);

  // Manejar cambios en el input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Actualizar el estado
    sessionStorage.setItem("contactInput", value); // Guardar el valor nuevamente en Session Storage
  };

  return (
    <div className="firewall">
      <h1>Firewall</h1>
      <input
        type="text"
        value={inputValue} // Mostrar el valor obtenido de Session Storage
        onChange={handleInputChange} // Actualizar estado y Session Storage al escribir
      />
    </div>
  );
}

export default Firewall;
