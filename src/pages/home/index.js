import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import LinkItem from "../../components/LinkItem";
import Menu from '../../components/Menu'

import api from "../../services/api"
import {saveLinks} from '../../services/storeLinks'

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState('');
    const [showModal, setShowModal] = useState(false);

    async function gerarLink(){
       try{
        const response = await api.post('/shorten', {
            long_url: link
        })
        
        setData(response.data);
        setShowModal(true);
        saveLinks('@encurta links', response.data)
        setLink('');

       }catch{
        alert("Erro")
        setLink("");
       }
       
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>EncurtaLink</h1>
                <p>Cole seu link para encurtar</p>
            </div>
            <div className="input-area">
                <div>
                <FiLink size={24} color="#FFF"/>
                <input type="text" placeholder="Cole seu link aqui..."
                value={link}
                onChange={(e) => setLink(e.target.value)}/>
                </div>
                <button onClick={gerarLink}>Gerar Link</button>
            </div>

           {showModal && (
               <LinkItem
               closeModal={() => setShowModal(false)}
               content={data}
               />
           )}

            <Menu/>

        </div>

        
    )
}