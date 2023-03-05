import React from 'react'

export default function FormUser({errors, textSubmit, data, setData}) {
	const onChange = (e) => setData({...data, [e.target.id]: e.target.value})

  return (
	 <>
		<div className="mb-2">
			<label htmlFor="email" className="form-label">Email</label>
			<input value={data.email} onChange={onChange} type="text" name="email" id="email" className="form-control" />
			{errors && <div className='text-danger mt-2'>{errors.email}</div>}
		</div>
			<div className="mb-2">
				<label htmlFor="username" className="form-label">Username</label>
				<input value={data.username} onChange={onChange} type="text" name="username" id="username" className="form-control" />
				{errors && <div className='text-danger mt-2'>{errors.username}</div>}
			</div>
			<div className="mb-2">
				<label htmlFor="location" className="form-label">Location</label>
				<input value={data.location} onChange={onChange} type="text" name="location" id="location" className="form-control" />
				{errors && <div className='text-danger mt-2'>{errors.location}</div>}
			</div>
			<div className="mb-2">
				<label htmlFor="name" className="form-label">Name</label>
				<input value={data.name} onChange={onChange} type="text" name="name" id="name" className="form-control" />
				{errors && <div className='text-danger mt-2'>{errors.name}</div>}
			</div>
			<button type="submit" className='btn btn-primary'>{textSubmit}</button>
	 </>
  )
}
