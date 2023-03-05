import React from 'react';
import App from '../Layouts/App';

export default function Home(props) {
    return (
        <>
           <div className="container">
            <div className="card">
                <div className="card-body">
						Your new Inertia App
                </div>
            </div>
           </div>
        </>
    );
}
Home.layout = (page) => <App children={page} title='Home'/>
