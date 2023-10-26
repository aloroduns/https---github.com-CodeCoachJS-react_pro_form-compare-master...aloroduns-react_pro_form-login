import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
            {/* Input field for the user's email using <input> with type="email." The field is named "email," and the value is controlled by the formData.email state. */}
            <p>Email</p>
            <input 
              name="email"
              type="email"
              value={formData.email || ''}
              onChange={handleChange}
            />
            <label className="checkbox-label"> {/* Add a class name for styling */}
            <p>Subscribe to Newsletter</p>
            <input
              name="subscribe"
              type="checkbox"
              checked={formData.subscribe || false}
              onChange={handleChange}
            />
            </label>
            {/*  a checkbox for subscribing to the newsletter, named "subscribe." The checkbox's 
            value is controlled by the formData.subscribe state. */}
            <p>Comment</p>
            <textarea
              name="comment"
              value={formData.comment || ''}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Write your comment here."
            />
          
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

