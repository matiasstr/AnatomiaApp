import {useSelector} from "react-redux"
import Card from "../Card/Card"
function Cards() {
    let allInfo = useSelector(state => state.contenido)
    console.log(allInfo);
  return (
    <div>{allInfo.map(e => {
        return(
            <Card key={e.key} nombre/>
        )
    })}</div>
  )
}

export default Cards