import Filmlist from "./Filmlist";
import { useState } from "react";
import useFiltre from "./Filtre";
import useAdd from "./Addfilm"
import {Routes,Route } from "react-router-dom";
import Aboutcard from "./Aboutcard";
function App() {
  
  const [film,setfilm]=useState (
    [
        {
            titre : 'Fight Club',
            image : 'https://media.senscritique.com/media/000012359351/0/fight_club.jpg',
            description :'Insomniaque désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la vacuité de son existence son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être Lors dun voyage daffaires il fait la connaissance de Tyler Durden une sorte de gourou anarchiste et philosophe Ensemble ils fondent le Fight Club' ,
            note : 5 ,
            id :1
        },
        {
            titre : 'Interstellar',
            image : 'https://media.senscritique.com/media/000018762465/300/interstellar.jpg',
            description :'Alors que la vie sur Terre touche à sa fin, un groupe dexplorateurs sattelle à la mission la plus importante de lhistoire de lhumanité' ,
            note :6,
            id :2
        },
        {
            titre : 'Le Seigneur des Anneaux - Le Retour du roi',
            image : 'https://media.senscritique.com/media/000007087660/300/le_seigneur_des_anneaux_le_retour_du_roi.jpg',
            description :' La bataille pour la Terre du Milieu a commencé. Frodon et Sam, guidés par Gollum, poursuivent leur... ' ,
            note :2
        }
    ]
  
)
const {add, handleChange, addFilm} = useAdd (film)
const {filtre ,setFiltre,filtreFilm}=useFiltre (film)
  return (
    <div>
      <div>

        <input placeholder="filtre by name" type ='text' value={filtre.name}
        onChange={(e)=>setFiltre({...filtre , name:e.target.value})} ></input>



        <input placeholder="filtre by rate" type ='number' value={filtre.rate}
        onChange={(e)=>setFiltre({...filtre , rate:e.target.value})}></input>
        
      </div>
      

      <Routes>
       
        <Route path="/" element={<Filmlist film={filtreFilm}/>} />
        <Route path="/About/:id" element={<Aboutcard />} />
        
        </Routes>
      
  
     
      <addFilm film={addFilm}/>

     <div>
      title:<input placeholder="titre" type='text' name='titre' value={add.titre} onChange={handleChange}></input>
      description:<input placeholder="description" type='text' name='description' value={add.description} onChange={handleChange}></input>
      posterURL:<input placeholder="posterURL" type='text' name='posterURL' value={add.posterURL} onChange={handleChange} ></input>
      note:<input placeholder="note" type='numbre' name='note' value={add.note} onChange={handleChange} ></input>
      <button onClick={addFilm}>add</button>
     </div>
    </div>
  );
}

export default App;
