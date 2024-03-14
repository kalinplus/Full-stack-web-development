/**
 *
 * @param {Array} persons persons objects contains its name and phonenumber
 * @param {function} setPersons state manager to set persons
 * @param {String} newName name of new person
 * @param {function} setNewNmae state manager to set name of new person
 * @param {String} newPhoneNumber phonenumber of new person
 * @param {function} setNewPhoneNumber state manager to set phonenumber of new person
 * @returns {jsx} form to input name and phone number, and to submit
 */
const Form = (props) => {
  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    props.setNewPhoneNumber(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const itemToAdd = {
      name: props.newName,
      phoneNumber: props.newPhoneNumber,
    };
    props.setNewName("");
    props.setNewPhoneNumber("");

    if (props.persons.some((person) => person.name === itemToAdd.name)) {
      alert(`${itemToAdd.name} is already added to phonebook`);
      return;
    }

    props.setPersons(props.persons.concat(itemToAdd));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={props.newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            value={props.newPhoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
