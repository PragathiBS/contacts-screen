import React from "react";
import { Card } from "react-bootstrap";

function ContactCard({ contact, showCard }) {
  return (
    <Card
      style={{
        width: "19rem",
        display: showCard,
        backgroundColor: "rgb(239, 239, 239)",
      }}
    >
      <Card.Body>
        {!showCard && (
          <center>
            <button
              type="button"
              className="btn btn-circle"
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
                width: "60px",
                height: "60px",
                borderRadius: "100%",
                marginBottom: "4%",
              }}
            >
              <b style={{ color: "white", fontSize: "25px" }}>
                {contact.name.split(" ").length >= 2
                  ? contact.name.split(" ")[0][0].toUpperCase() +
                    contact.name.split(" ")[1][0].toUpperCase()
                  : contact.name.split(" ")[0][0].toUpperCase()}
              </b>
            </button>
          </center>
        )}
        <Card.Title className="text-center">{contact.name}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">
          Fullname: {contact.name}
        </Card.Subtitle> */}
        <br />
        <p>Fullname: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Company: {contact.company}</p>
        <p>Address: {contact.address}</p>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
