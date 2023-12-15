import {useState} from "react";

function useFiltre (film){
const [filtre,setFiltre] =useState({name:'',rate:0})

 const filtreFilm = film.filter ((f)=>{
 const {name,rate}=filtre
 console.log(f.titre);
 return ( 
    f.titre.toLowerCase().includes(name.toLowerCase())&&
    f.note >= rate 

 )
 }) 
   return  {filtre ,setFiltre,filtreFilm}
}


export default useFiltre;