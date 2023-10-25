import React, {useReducer, useState} from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value:event.target.value,
    });
  }
  return (
    <div className="wrapper">
      <h1>
        Subscriber Form
      </h1>
      {submitting &&
       <div>Submitting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
          <p>First Name</p>
            <input name="firstName" onChange={handleChange} /> {/* Use name="firstName" */}
            <p>Last Name</p>
            <input name="lastName" onChange={handleChange}/> {/* Use name="lastName" */}
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
