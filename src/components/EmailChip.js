import { useState } from 'react';

const EmailChip = () => {
	const [value, setValue] = useState('');
	const [email, setEmail] = useState([]);
	const [error, setError] = useState('');

	const onKeyDownHandler = (e) => {
		if (['Enter', 'Tab', ','].includes(e.key)) {
			e.preventDefault();
			let emailId = value.trim();
			if (emailId &&(isValid(emailId))) {
				setEmail([...email, emailId]);
				setValue('');
			}
		}
	};
	const removeEmail = (emailToRemove) => {
		const finalEmail = email.filter((e) => e !== emailToRemove);
		setEmail(finalEmail);
	};
  const isValid = (email)=>{
    let error = null;
      if(isInList(email)){
        error=`${email} has been already added`
      }
      if(!isEmail(email)){
        error =`${email} is not valid email`
      }
      if(error){
        setError(error);
        return false;
      }
      return true;
  }
  const isInList = (emailId)=>{
    return email.includes(emailId)
  }
  const isEmail = (emailId)=>{
    return /[\w\d\.-]+@[\w\d\.-]+.[\w\d\.-]+/.test(emailId)
  }

  const handlePaste = evt => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !isInList(email));

      setEmail([...email,toBeAdded])
    }
  };
	return (
		<main className='wrapper'>
			{email.map((e) => (
				<div key={e} className='tag-item'>
					{e} <button className='button' onClick={() => removeEmail(e)}>&times;</button>
				</div>
			))}
			<input
        type="text"
        className='input'
				placeholder='Enter email or paste email and hit enter key'
				onChange={(e) => setValue(e.target.value)}
				value={value}
				onKeyDown={onKeyDownHandler}
        onPaste={handlePaste}
			/>
      {error && <p className='error'>{error}</p>}
		</main>
	);
};

export default EmailChip;
