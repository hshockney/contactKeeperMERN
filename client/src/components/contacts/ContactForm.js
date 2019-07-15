import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContexts';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

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
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'Personal'
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='primary'>Add Contact</h2>
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
      Persoanl{' '}
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
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
