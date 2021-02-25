import React, { useState, useEffect } from "react";

const EditContactForm = (props) => {
  const [contact, setContact] = useState(props.currentContact);

  useEffect(() => {
    setContact(props.currentContact);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateContact(contact.id, contact);
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

      <button className="btn btn-primary pull-right form-btn">Modify</button>
      <button
        onClick={() => {
          props.handleModalClose();
          props.setEditing(false);
        }}
        className="btn btn-primary pull-right form-btn cancel-btn"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditContactForm;
