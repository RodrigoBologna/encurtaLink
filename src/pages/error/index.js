import "../error/error.css"
import { Link } from "react-router-dom"

export default function Error(){
    return(
        <div className="container">
          <img src="notfound.png" alt="error"></img>
          <h1>Página não encontrada</h1>
         <Link to="/">
         Voltar para Home</Link>
        </div>
    )
}