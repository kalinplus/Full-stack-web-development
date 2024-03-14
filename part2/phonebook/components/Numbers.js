/**
 *
 * @param {Array} persons persons objects contains names and phone numbers
 * @param {String} filterShown string to filter phone nubmer items
 * @returns {jsx} all persons in phonebook
 */
const Numbers = (props) => {
  return props.persons
    .filter((person) =>
      person.name.toLowerCase().includes(props.filterShown.toLowerCase())
    )
    .map((person) => (
      <PhonebookItem
        key={person.name}
        name={person.name}
        phoneNumber={person.phoneNumber}
      />
    ));
};

const PhonebookItem = ({ name, phoneNubmer }) => {
  return (
    <p>
      {name} {phoneNubmer}
    </p>
  );
};

export default Numbers;
