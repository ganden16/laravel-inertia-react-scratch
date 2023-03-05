import {useForm} from '@inertiajs/inertia-react'
import React, {useEffect} from 'react'
import FormUser from './FormUser'

export default function EditUser({close, user}) {

	const currentState = {
		name: user.name,
		email: user.email,
		username: user.username,
		location: user.location,
	}
	const {data, setData, put, reset, errors} = useForm(currentState)

	const onSubmit = (e) => {
		e.preventDefault()
		// post('users', data)
		// setData(currentState)

		put(route('users.update', user.id), {data, onSuccess: () => {
			reset(), close()
		}})
	}

	useEffect(() => {
		setData({
			...data, 
			name: user.name,
			email: user.email,
			username: user.username,
			location: user.location,
		})
	}, [user])

  return (
		<div className="card">
		<div className="card-header">Edit Users</div>
		<div className="card-body">
			<form onSubmit={onSubmit}>
				<FormUser data={data} setData={setData} errors={errors} textSubmit={"Update"}/>
			</form>
		</div>
	</div>
  )
}
