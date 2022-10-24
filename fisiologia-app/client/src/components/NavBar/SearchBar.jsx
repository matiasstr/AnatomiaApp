import { useState } from "react";
function SearchBar() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      //aqui va el dispatch de la accion para filtrar
    }
  };
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default SearchBar;
