import {useState} from "react";
function useAdd (film){
    const f={
        titre:'',
        description:'',
        posterURL:'',
        note : ''
    };
    const [add, setAdd] = useState(f);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
      };
      
      const addFilm = (e) => {
      if (e.value===''){
        alert('remplire le champ');
      } else 
        {e.preventDefault();
        film.push(add);
        setAdd(f);}
      };
      return  {add, setAdd, handleChange, addFilm}
}
export default useAdd;