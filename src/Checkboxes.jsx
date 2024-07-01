const Checkboxes = (props) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      props.timeRef.current = [...props.timeRef.current, event.target.value];
    } else {
      props.timeRef.current = props.timeRef.current.filter(
        (item) => item !== event.target.value
      );
    }
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleChange}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            onChange={handleChange}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={handleChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            onChange={handleChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
};

export default Checkboxes;
