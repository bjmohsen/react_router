import React from 'react';
import Fil from "./Filmcard";
const Filmlist =({film})=>{
    
return (
    <div>
    {film.map((Filmcard)=>
    <Fil{...Filmcard}/>)}
    </div>
    
);
};

export default Filmlist;