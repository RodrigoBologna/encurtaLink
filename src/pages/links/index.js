import "./links.css"
import { useEffect, useState } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { getLinks, deleteLink } from "../../services/storeLinks";
import { Link } from "react-router-dom";
import LinkItem from "../../components/LinkItem";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    async function getMyLinks(){
      const result =  await getLinks("@encurta links");

      if(result.length === 0){
        alert('Lista vazia');
      }

      setMyLinks(result);


    }

    getMyLinks();
  }, [])


  function openLink(link){
    setData(link);
    setShowModal(true);

  }

  function deleteLinks(id){
    const result = deleteLink(myLinks, id);

    if(result.length ===0){
      alert('Todos os links deletados')
    }
    setMyLinks(result);
  }



  return (
    <div className="container-links">
      <div className="topo">
        <Link to='/'>
        <FiArrowLeft size={80} color="#FFF"/>
        </Link>
        <h1>Meus Links</h1>
      </div>



      {myLinks.map(link => (
        <div key={link.id} className="links-area">
          <button className="link" onClick={() => openLink(link)}>
            <FiLink size={15} color="#FFF" />
            {link.long_url}
          </button>
          <button className="trash" onClick={() => deleteLinks(link.id)}>
            <FiTrash size={20} color="#FF5454" />
          </button>
         

        </div>
      ))}
      

      {showModal && (
               <LinkItem
               closeModal={() => setShowModal(false)}
               content={data}
               />
           )}



    </div>
  )
}