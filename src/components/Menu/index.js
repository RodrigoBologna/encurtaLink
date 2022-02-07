import '../Menu/menu.css'
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className='menu'>
            <Link to="/links">
            <span>Meus Links</span>
            </Link>
        </div>
    )
}