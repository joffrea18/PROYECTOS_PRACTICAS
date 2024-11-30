use MICROSYSCOM;

CREATE table usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    empresa VARCHAR(100),
    telefono VARCHAR(100)
);

INSERT INTO usuarios (empresa, telefono) VALUES
('Microsyscom', '911228334');

