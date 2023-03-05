import {useForm} from '@inertiajs/inertia-react'
import React from 'react'
import FormUser from './FormUser'

export default function CreateUser({close}) {

	const currentState = {
		name: '',
		email: '',
		username: '',
		location: '',
		password: ''
	}
	const {data, setData, post, reset, errors} = useForm(currentState)

	const onSubmit = (e) => {
		e.preventDefault()
		// post('users', data)
		// setData(currentState)

		post(route('users.store'), {data, onSuccess: () => {
			reset(), close()
		}})
	}

  return (
		<div className="card">
			<div className="card-header">Edit Users</div>
			<div className="card-body">
				<form onSubmit={onSubmit}>
					<FormUser setData={setData} data={data} errors={errors} textSubmit={"Create"}/>
				</form>
			</div>
		</div>
  )
}
