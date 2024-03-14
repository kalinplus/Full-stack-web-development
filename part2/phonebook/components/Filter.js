/**
 * @param {String} filterShown The filter used to show items whose name contains it
 * @param {function} setFilterShown set state of filterShown
 * @returns {jsx} The filter input bar
 */
const Filter = ({ filterShown, setFilterShown }) => {
  const handleFilterChange = (event) => {
    setFilterShown(event.target.value);
  };

  return (
    <div>
      filter shown with{" "}
      <input value={filterShown} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
