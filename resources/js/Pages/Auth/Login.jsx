import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Login({errors}) {

	const {data, setData, post} = useForm({
		email: 'tbarton@example.org', password: 'password', remember: false,
	})

	const changeHandler = (e) => {
		setData({
			...data,
			[e.target.id]: e.target.value
			// [e.target.name]: e.target.value ini juga bisa
		})
	}

	const changeHandlerCheck = (e) => {
		setData({
			...data,
			[e.target.id]: e.target.checked
		})
	}

	const submitHandler = (e) => {
		e.preventDefault()
		post('/login', data)
	}

	// const[values, setValues] = useState({
	// 	email: '', password: '', remember: false,
	// })

	// const changeHandler = (e) => {
	// 	setValues({
	// 		...values,
	// 		[e.target.id]: e.target.value
	// 		// [e.target.name]: e.target.value ini juga bisa
	// 	})
	// }
	// const changeHandlerCheck = (e) => {
	// 	setData({
	// 		...data,
	// 		[e.target.id]: e.target.checked
	// 	})
	// }

	// const submitHandler = (e) => {
	// 	e.preventDefault()
	// 	Inertia.post('/login', values)
	// }

	
  return (
      <>
         <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
				<form onSubmit={submitHandler}>
					<div className="mb-3">
						<label htmlFor="email"className='form-label'>Email</label>
						<input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control" />
						{errors.email && (<div className='text-danger mt-1'>{errors.email}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="password"className='form-label'>Password</label>
						<input value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control" />
						{errors.password && (<div className='text-danger mt-1'>{errors.password}</div>)}
					</div>
					<div className="form-check mb-3">
						<input value={data.remember} onChange={changeHandlerCheck} type="checkbox" className='form-check-input me-2' name="remember" id="remember" />
						<label className='form-check-label' htmlFor="remember">Remember Me</label>
					</div>
					<button type="submit" className='btn btn-primary'>Login</button>
				</form>
          </div>
			 <div className="card-footer">
            <span className='text-muted'>Doesn't have account? </span> {' '}
				<Link className='link-dark text-decoration-none fw-bold' href={route('register')}>Register</Link>
          </div>
         </div>
      </>
  )
}

Login.layout = (page) => <Guest children={page} title='Login'/>
