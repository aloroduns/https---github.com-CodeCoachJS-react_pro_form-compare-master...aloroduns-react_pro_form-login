import React, { useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = React.useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName } = formData; // Extract firstName and lastName from formData
    // Display an alert with the user's full name
    alert(`Hi, my name is ${firstName} ${lastName}`);
    setSubmitting(true);
  
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1>Subscriber Form</h1>
      {submitting && <div>Submitting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
            />
            <p>Last Name</p>
            <input
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
            />
            {/* Rest of the form fields */}
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;