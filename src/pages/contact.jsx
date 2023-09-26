import { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  cosnt handleInputChange


  return (
    <>
      <div className="pageHeaderBox">
        <h2 className="pageHeader">Contact Me &#128172;</h2>
      </div>
    </>
  );
}
