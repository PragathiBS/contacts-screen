import React from "react";

const ContactTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Basic Info</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            <tr key={contact.id}>
              <td
                onClick={() => {
                  props.handleRowClick(contact);
                  props.handleShowCard("");
                }}
              >
                <button
                  type="button"
                  className="btn btn-circle"
                  style={{
                    backgroundColor:
                      "#" + Math.floor(Math.random() * 16777215).toString(16),
                    marginRight: "10px",
                    width: "45px",
                    height: "45px",
                    borderRadius: "100%",
                    marginBottom: "10%",
                  }}
                >
                  <b style={{ color: "white", fontSize: "15px" }}>
                    {contact.name.split(" ").length >= 2
                      ? contact.name.split(" ")[0][0].toUpperCase() +
                        contact.name.split(" ")[1][0].toUpperCase()
                      : contact.name.split(" ")[0][0].toUpperCase()}
                  </b>
                </button>
                <span style={{ display: "inline-block", height: "20px" }}>
                  <a href="javascript:void(0)">
                    <b>{contact.name}</b>
                  </a>
                  <small id="emailHelp" className="form-text text-muted">
                    {contact.email}
                  </small>
                </span>
              </td>
              <td>{contact.company}</td>
              <td>
                <button
                  className="btn btn-primary table-btn"
                  onClick={() => {
                    props.handleEdit();
                    props.editRow(contact);
                    props.handleShowCard("none");
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger table-btn"
                  onClick={() => {
                    props.deleteContact(contact.id);
                    props.handleShowCard("none");
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No contacts</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ContactTable;
