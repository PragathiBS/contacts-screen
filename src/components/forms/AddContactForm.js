import React, { useState } from "react";

const AddContactForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.addContact(contact);
        setContact(initialFormState);
      }}
    >
      <div className="form-group">
        <label>Fullname</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          className="form-control"
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          className="form-control"
          type="text"
          name="company"
          value={contact.company}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          className="form-control"
          type="text"
          name="address"
          value={contact.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn btn-primary pull-right form-btn">Add</button>
      <button
        onClick={() => {
          props.handleModalClose();
        }}
        className="btn btn-primary pull-right form-btn cancel-btn"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddContactForm;
