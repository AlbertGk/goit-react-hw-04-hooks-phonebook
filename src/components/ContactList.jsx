export const ContactList = ({ contacts, filter, deletionHandler }) => {
  return (
    <ul>
      {{ filter } === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => deletionHandler(contact.id)}>
                Delete
              </button>
            </li>
          ))
        : contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  onClick={() => deletionHandler(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
    </ul>
  );
};
