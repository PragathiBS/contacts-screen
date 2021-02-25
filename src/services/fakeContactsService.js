// Data
export const contactsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+116453736422",
    company: "Doodleblue Innovations",
    address: "US",
  },
  {
    id: 2,
    name: "Joe Johnson",
    email: "joe@gmail.com",
    phone: "+116453736411",
    company: "Doodleblue Innovations",
    address: "UK",
  },
  {
    id: 3,
    name: "Jack Craig",
    email: "jack@gmail.com",
    phone: "+116453736453",
    company: "Doodleblue Innovations",
    address: "US",
  },
];

export function getContactsFromArray() {
  return contactsData;
}

export function addContactToArray(contact) {
  contactsData.push(contact);
}

export function updateContactInArray(contact) {
  let index = contactsData.findIndex(
    (contactObj) => contactObj.id === contact.id
  );
  contactsData[index] = contact;
}

export function deleteContactFromArray(id) {
  let index = contactsData.findIndex((contactObj) => contactObj.id === id);
  contactsData.splice(index, 1);
}
