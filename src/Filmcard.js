import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';

const Filmcard =({titre,id}) =>{
  
      return (
        <div>
        <Card>
          <Card.Body>
            <p><h1>titre</h1>  : <Link to={`/About/${id}`}>{titre}</Link> </p>
          </Card.Body>
        </Card>

            

        </div>
      );
    }


export default Filmcard;