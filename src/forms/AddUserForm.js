import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', lang: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.lang) {
					alert('please fill all details');
					return;
				}

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" test-id="name" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" test-id="username" name="username" value={user.username} onChange={handleInputChange} />
			<label>Language</label>
			<select test-id="lang" name="lang" onChange={handleInputChange} value={user.lang}>
				  <option value="select">Select</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
				  <option value="Javascript">Javascript</option>
               </select>
			<button>Add new user </button>
		</form>
	)
}

export default AddUserForm
