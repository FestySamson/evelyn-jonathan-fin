import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import CheckIcon from './Checkbox'
import './form.css'

export default function Form() {

    const [fromName, setFromName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setIsSending(true);
    
        const serviceID = 'service_i1tgqsc';
        const templateID = 'template_qnbbgft';
        const userID = 'P0V1bzHs-P77b57Up'; // Replace with your emailjs user ID
    
        emailjs.send(serviceID, templateID, {
          from_name: fromName,
          last_Name:lastName,
          email_id: email,
          message: message,
        }, userID)
          .then(() => {
            setIsSending(false);
            setIsSent(true);
    
            // Reset the form after successful submission
            setFromName('');
            setEmail('');
            setLastName('');
            setMessage('');
          })
          .catch((error) => {
            setIsSending(false);
            setIsSent(false);
            console.error('Error sending email:', error);
          });
      };

  return (
    <>
        <div className="form-control" id='contact-me'>
            <h2>Contact Me</h2>
                {isSent && <div className='sent'>Message sent successfully! <span><CheckIcon/></span></div>}
                <form action="" onSubmit={handleSubmit}>
                    <div className='input'>
                        <input type="text" name="" id="from_name" value={fromName} placeholder='First Name' onChange={(e) => setFromName(e.target.value)} />
                    </div>
                    <div className='input'>
                        <input type="text" name="" id="last_name" value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='input'>
                        <input type="email" name="" value={email} id="email_id" placeholder='Email Address'  onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <textarea name="" id="message" value={message} cols="30" rows="10" placeholder='Your Message'  onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='input'>
                        <button type="submit" id="button" disabled={isSending}>
                            {isSending ? 'Sending Message...' : isSent ? 'Message Sent' : 'Send Message'}
                        </button>
                    </div>
                    
                </form>
            </div>
    </>
  )
}
