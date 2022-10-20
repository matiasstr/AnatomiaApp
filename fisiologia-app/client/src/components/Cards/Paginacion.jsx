function Paginacion({ pagina, setPagina, maximo }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(maximo); i++) {
    pages.push(i);
  }

  const previousPage = () => {
    setPagina(pagina - 1);
  };
  const nextPage = () => {
    setPagina(pagina + 1);
  };
  return (
    <div className="btn-group">
      <button
        className="btn"
        onClick={previousPage}
        disabled={pagina === 1 || pagina < 1}
      >
        «
      </button>
      <button className="btn">{pagina}</button>
      <button
        className="btn"
        disabled={pagina === maximo || pagina > maximo}
        onClick={nextPage}
      >
        »
      </button>
    </div>
  );
}

export default Paginacion;
