import React from 'react'
import '../Styles/Contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
     <main>
      <h1>Contact Us</h1>
      <form>

        <div>
          <label>Name</label>
          <input type="text" required placeholder='Abc' />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required placeholder='Abc.com' />
        </div>
        <div>
          <label>Message</label>
          <input type="text" required placeholder='Tell us about your Query' />
        </div>

        <button type='submit'>Send</button>

      </form>
     </main>
    </div>
  )
}

export default Contact
