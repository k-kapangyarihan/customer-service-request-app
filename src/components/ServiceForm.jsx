import { useState } from 'react';

export default function ServiceForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    serviceType: '',
    priorityLevel: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const err = {};

    if (!form.name.trim()) {
      err.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      err.name = 'Name must be at least 2 characters';
    }

    if (!form.email) {
      err.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = 'Email address is invalid';
    }

    if (!form.serviceType) {
      err.serviceType = 'Please select a service type';
    }

    if (!form.priorityLevel) {
      err.priorityLevel = 'Please select a priority';
    }

    if (!form.description.trim()) {
      err.description = 'Description is required';
    } else if (form.description.trim().length < 10) {
      err.description = 'Description must be at least 10 characters';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        serviceType: '',
        priorityLevel: '',
        description: '',
      });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit} noValidate>
      <label
        className='successMessage'
        style={{ display: submitted ? 'block' : 'none' }}
      >
        Request successfully submitted!
      </label>

      <div>
        <div className='label-row'>
          <label>Name:</label>
          {errors.name && <span className='error-text'>{errors.name}</span>}
        </div>
        <input
          id='name'
          name='name'
          type='text'
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className='label-row'>
          <label>Email:</label>
          {errors.email && <span className='error-text'>{errors.email}</span>}
        </div>
        <input
          id='email'
          name='email'
          type='email'
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className='label-row'>
          <label>Service Type:</label>
          {errors.serviceType && (
            <span className='error-text'>{errors.serviceType}</span>
          )}
        </div>
        <select
          id='serviceType'
          name='serviceType'
          value={form.serviceType}
          onChange={handleChange}
        >
          <option value='' disabled>
            Select a service type
          </option>
          <option value='technical'>Technical</option>
          <option value='billing'>Billing</option>
          <option value='general'>General</option>
          <option value='complaint'>Complaint</option>
        </select>
      </div>

      <div>
        <div className='label-row'>
          <label>Priority Level:</label>
          {errors.priorityLevel && (
            <span className='error-text'>{errors.priorityLevel}</span>
          )}
        </div>
        <select
          id='priorityLevel'
          name='priorityLevel'
          value={form.priorityLevel}
          onChange={handleChange}
        >
          <option value='' disabled>
            Select priority
          </option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
          <option value='urgent'>Urgent</option>
        </select>
      </div>

      <div>
        <div className='label-row'>
          <label>Description:</label>
          {errors.description && (
            <span className='error-text'>{errors.description}</span>
          )}
        </div>
        <textarea
          id='description'
          name='description'
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <button className='btn' type='submit'>
        Submit
      </button>
    </form>
  );
}
