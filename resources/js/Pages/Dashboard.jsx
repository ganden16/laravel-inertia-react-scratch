import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import App from '../Layouts/App'

export default function Dashboard() {
  return (
      <>
         <div className="container">
          <div className="card">
            <div className="card-header">
              Dashboard
            </div>
            <div className="card-body">
              Your Body
            </div>
          </div>
         </div>
      </>
  )
}

Dashboard.layout = (page) => <App children={page} title='Dashboard'/>
// Dashboard.layout = (page) => <App {...{children:page, title:"Dashboard"}}/>