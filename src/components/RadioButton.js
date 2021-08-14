function RadioButton({value, name, label}) {
  return (
    // <input type="radio" id="age1" name="age" value="30">
    // <label for="age1">0 - 30</label><br></br>

    <label className="checkbox">
      <input aria-checked="true" type="radio" name={name} value={value} />
      {label}
    </label>
  )
}

export default RadioButton
