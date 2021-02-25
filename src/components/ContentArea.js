import React, { useState, Fragment } from "react";
import AddContactForm from "./forms/AddContactForm";
import EditContactForm from "./forms/EditContactForm";
import ContactTable from "./tables/ContactTable";
import AddEditContactModal from "./modals/AddEditContactModal";
import { Button, Container } from "react-bootstrap";
import {
  getContactsFromArray,
  updateContactInArray,
  addContactToArray,
  deleteContactFromArray,
} from "../services/fakeContactsService";
import ContactCard from "./ContactCard";
import SearchBar from "./SearchBar";

const ContentArea = () => {
  let matchedContacts;
  const initialFormState = {
    id: null,
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  };

  // Setting state
  const [inputVal, setInputVal] = useState("");

  const [contacts, setContacts] = useState(getContactsFromArray());
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const [showCard, setShowCard] = useState("none");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setInputVal(event.target.value);
    setShowCard("none");
    matchedContacts = getContactsFromArray().filter((contact) => {
      return (
        contact.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        contact.email
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contact.company.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setContacts(matchedContacts);
  };

  // CRUD operations
  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    addContactToArray(contact);
    setContacts(getContactsFromArray());
    handleClose();
  };

  const deleteContact = (id) => {
    setEditing(false);
    deleteContactFromArray(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
    setShowCard("none");
  };

  const updateContact = (id, updatedContact) => {
    setEditing(false);
    updateContactInArray(updatedContact);
    setContacts(getContactsFromArray());
    setCurrentContact({
      id: updatedContact.id,
      name: updatedContact.name,
      email: updatedContact.email,
      phone: updatedContact.phone,
      company: updatedContact.company,
      address: updatedContact.address,
    });
    handleClose();
  };

  const editRow = (contact) => {
    setEditing(true);

    setCurrentContact({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      address: contact.address,
    });
  };

  return (
    <Container>
      <h2>Contacts</h2>
      <br />
      <SearchBar searchData={inputVal} onInputSearchData={handleChange}>
        <Button className="ml-3 mb-1" variant="primary" onClick={handleShow}>
          Add New Contact
        </Button>
      </SearchBar>
      {editing ? (
        <Fragment>
          <AddEditContactModal
            modalHeading="Edit Contact"
            showState={show}
            handleModalShow={handleShow}
            handleModalClose={() => {
              handleClose();
              setEditing(false);
            }}
          >
            <EditContactForm
              editing={editing}
              setEditing={setEditing}
              currentContact={currentContact}
              updateContact={updateContact}
              handleModalClose={handleClose}
            />
          </AddEditContactModal>
        </Fragment>
      ) : (
        <Fragment>
          <AddEditContactModal
            modalHeading="Add New Contact"
            showState={show}
            handleModalShow={handleShow}
            handleModalClose={handleClose}
            onSave={addContact}
          >
            <AddContactForm
              addContact={addContact}
              handleModalClose={handleClose}
            />
          </AddEditContactModal>
        </Fragment>
      )}
      <br />
      <br />
      <div className="row">
        <div className="col-md-8">
          <small className="text-muted">
            <span style={{ color: "red" }}>*</span>
            <span style={{ color: "blue" }}>
              Click on individual names to open the contact card
            </span>
          </small>
          <ContactTable
            contacts={contacts}
            handleEdit={handleShow}
            editRow={editRow}
            deleteContact={deleteContact}
            handleShowCard={setShowCard}
            handleRowClick={(contact) => {
              setCurrentContact({
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                company: contact.company,
                address: contact.address,
              });
            }}
          />
        </div>
        <div className="col-md-4">
          <ContactCard contact={currentContact} showCard={showCard} />
        </div>
      </div>
    </Container>
  );
};

export default ContentArea;
