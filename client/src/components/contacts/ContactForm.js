import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContexts';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'Personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Personal'
  });
  const { name, email, phone, type } = contact;

  const onChange = event =>
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });

  const onSubmit = event => {
    event.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
      />
      <input
        type='text'
        name='phone'
        value={phone}
        onChange={onChange}
        placeholder='Phone'
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='Personal'
        checked={type === 'Personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='Professional'
        checked={type === 'Professional'}
        onChange={onChange}
      />
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
