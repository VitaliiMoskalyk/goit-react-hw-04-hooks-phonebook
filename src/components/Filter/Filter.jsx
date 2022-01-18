import propTypes from "prop-types";

const Filter = ({ searchValue, finder }) => {
  return (
    <label htmlFor={searchValue}>
      <input
        type="text"
        placeholder="Find contact"
        value={searchValue}
        onChange={finder}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  searchValue: propTypes.string.isRequired,
  finder: propTypes.func.isRequired,
};
export default Filter;
