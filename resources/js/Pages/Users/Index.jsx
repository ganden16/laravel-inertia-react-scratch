import App from '../../Layouts/App'
import React, {useState} from 'react'
import Pagination from '../../Components/Pagination'
import Dialog from '../../Components/Dialog'
import useDialog from '../../Hooks/useDialog'
import CreateUser from '../../Components/CreateUser'
import {Inertia} from '@inertiajs/inertia'
import EditUser from '../../Components/EditUser'

export default function Index(props) {
	const {data: users, links, from} = props.users
	const {canAddUser} = props
	const [state, setState] = useState({})

	const [modalAdd, openModalAdd, closeModalAdd ] = useDialog()
	const [modalEdit, openModalEdit, closeModalEdit] = useDialog()
	const [modalDestroy, openModalDestroy, closeModalDestroy] = useDialog()

	const editHandler = (user) => {
		setState(user)
		openModalEdit()
	}
	const destroyHandler = (user) => {
		setState(user)
		openModalDestroy()
	}

	const destroyUser = () => {
		Inertia.delete(route('users.destroy', state.id),{
			onSuccess: () => closeModalDestroy()
		})
	}
  return (
	 <div className='container'>
		<Dialog  size='md' trigger={modalAdd} title={"Create New User"} >
			<CreateUser close={closeModalAdd}/>
		</Dialog>
		<Dialog trigger={modalDestroy} title={`Delete User: ${state.name}`} >
			<p>Yakin?</p>
			<button onClick={destroyUser} type="submit" className='btn btn-danger'>Delete</button>
		</Dialog>
		<Dialog trigger={modalEdit} title={"Edit User"} >
			<EditUser close={closeModalEdit} user={state}/>
		</Dialog>

		{canAddUser ? 
		<button onClick={openModalAdd} className="btn btn-primary">Add</button>
		:
		<p className='text-danger'>Kamu Tidak Diizinkan Menambah Pengguna</p>
		}
		<div className="card mt-3">
			<div className="card-header">User</div>
				<div className="card-body">
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Location</th>
								<th className='text-end'>Action</th>
							</tr>
						</thead>
						<tbody>
						{users.map((user, index) => (
							<tr key={user.id}>
								<td>{from + index}</td>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.location}</td>
								<td>
									<div className="dropdown text-end">
										<button className="btn p-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /></svg>
										</button>
										<ul className="dropdown-menu">
											<li><button className="dropdown-item" onClick={() => editHandler(user) }>Edit</button></li>
											<li><button className="dropdown-item" onClick={() => destroyHandler(user) }>Delete</button></li>
										</ul>
									</div>
								</td>
							</tr>
						))}
						</tbody>
					</table>
					<Pagination links={links}/>
				</div>
		</div>
	 </div>
  )
}

Index.layout = (page) => <App children={page} title="users"/>
