import "./navbar.css"

function Loader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", height:'86vh' }}>
      <span class="loader"></span>
      <h4>Cargando...</h4>
    </div>
  );
}

export default Loader;