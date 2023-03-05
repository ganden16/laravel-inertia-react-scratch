import { Head, usePage } from '@inertiajs/inertia-react'
import React, {useEffect} from 'react'
import {toast, Toaster} from 'react-hot-toast'

export default function Guest({children, title}) {
	const {flash} = usePage().props

	useEffect(() => {
		flash.type && toast[flash.type](flash.message)
	},[])
  return (
      <div className='min-vh-100 d-flex align-items-center justify-content-center'>
        <Head title={`${title} | Inertia`}/>
        <div className="col-md-4">
		  <Toaster position="top-right"/>
          {children}
        </div>
      </div>
  )
}
