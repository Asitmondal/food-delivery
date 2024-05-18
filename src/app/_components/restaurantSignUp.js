const RestaurantSignUp = () => {
  return (
    <>
      <h3>SignUp</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Location"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Add Name"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Contact No."
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};
export default RestaurantSignUp;
