import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
   <div >
    <p className='text-center text-4xl font-serif font-bold mb-5'>Send Us A Message</p>
     <form onSubmit={handleSubmit}>
      <label>
       
        <input className="input input-ghost w-full max-w-xs mb-2" placeholder='name' type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input className="input input-ghost w-full max-w-xs mb-2" placeholder='email' type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder='message' name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button className='btn btn-outline-primary w-1/3 mt-2' type="submit">Submit</button>
    </form>
   </div>
  );
};

export default ContactForm;
