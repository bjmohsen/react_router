import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Import any other Bootstrap components you need
import "bootstrap/dist/css/bootstrap.min.css"; // Import the Bootstrap CSS

const Aboutcard = ({ titre, description, image, note }) => {
  const { id } = useParams();

  return (
    <div className="container mt-3">
      <Card>
        <Card.Body>
          <Card.Title>{titre}</Card.Title>
          <Card.Text>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <img src={image} alt="image" className="img-fluid" />
            <p>
              <strong>Note:</strong> {note}
            </p>
          </Card.Text>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Aboutcard;
