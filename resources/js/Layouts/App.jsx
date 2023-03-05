import { Head, usePage } from '@inertiajs/inertia-react'
import React, {useEffect} from 'react'
import {toast, Toaster} from 'react-hot-toast'
import Navbar from '../Components/Navbar'

export default function App({children, title}) {
	const {flash} = usePage().props

	useEffect(() => {
		flash.type && toast[flash.type](flash.message)
	})

	return (
      <div>
        <Head title={title}/>
         <Navbar/>
         <div className="pt-5">
				<Toaster position="top-right"/>
          {children}
         </div>
      </div>
  )
}
