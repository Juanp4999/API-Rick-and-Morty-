import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./card.css";

export const FirstComponent = ({ populateUsers }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let data = await response.json();
      populateUsers(data.results);
    };
    fetchUsers();
  }, [populateUsers]);

  return null;
};

FirstComponent.propTypes = {
  populateUsers: PropTypes.func.isRequired,
};

export const ToggleComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroEspecie, setFiltroEspecie] = useState(""); 

  const populateUsers = (data) => {
    setUsuarios(data);
  };

  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.species.toLowerCase().includes(filtroEspecie.toLowerCase()) ||
      usuario.name.toLowerCase().includes(filtroEspecie.toLowerCase()) ||
      usuario.gender.toLowerCase().includes(filtroEspecie.toLowerCase()) 
  );

  return (
    <div>
      <FirstComponent populateUsers={populateUsers} />
      <h1>Personajes</h1>

      <input
        type="text"
        placeholder="Filtrar por especie, nombre o género"
        value={filtroEspecie}
        onChange={(e) => setFiltroEspecie(e.target.value)} // Un solo campo de búsqueda
      />

      <div id="usuarios" className="user-container">
        {usuariosFiltrados.map((usuario) => (
          <div key={usuario.id} className="card">
            <div className="descripcion">
              <h3>{usuario.name}</h3>
              <p>{usuario.species}</p>
              <p>{usuario.status}</p>
              <p>{usuario.gender}</p>
            </div>
            <img
              src={usuario.image}
              alt={usuario.name}
              className="character-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
