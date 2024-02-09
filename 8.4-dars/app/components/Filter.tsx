const page = () => {
  return (
    <div>
      <label>
        <select name="clothes" id="clothes">
          <option value="All">All</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Shoes">Shoes</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </label>
    </div>
  );
};

export default page;
