import { useEffect } from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { filter } from "../../Redux/Actions/Actions";
function SearchBar() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  useEffect(()=>{
    dispatch(filter(input))
  },[input])
  // const handleSubmit = (e) => {
  //   if (e.key === "Enter") {
  //     dispatch(filter(input))
  //   }
  // };
  return (
    <div className="form-control ml-4 mr-4">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered ml-4 mr-4"
        onChange={handleInputChange}
        // onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default SearchBar;
