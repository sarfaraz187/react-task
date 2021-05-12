import React from "react";
import react, { useState } from "react";

const Forum = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("FormValues on Submit ", formValues);
    event.preventDefault();
    setShowDetails(true);
  };

  console.log("form Value after change : ", formValues);
  return (
    <React.Fragment>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={(event) => handleChange(event)}
        />
        <br></br>
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formValues.email}
          onChange={(event) => handleChange(event)}
        />
        <br></br>
        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={(event) => handleChange(event)}
        />
        <br></br>
        <label for="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formValues.address}
          onChange={(event) => handleChange(event)}
        />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h3>
          <b>Contact Details :</b>
        </h3>
        {showDetails && (
          <div id="contactDetails">
            <p>Name : {formValues.name}</p>
            <p>Email : {formValues.email}</p>
            <p>Phone : {formValues.phone}</p>
            <p>Address : {formValues.address}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Forum;
