import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as apiServices from '../../services/apiServices';
import PetCard from './PetCard/PetCard';

const Dashboard = () => {
    let [pets, setPets] = useState([]);

    useEffect(() => {
        apiServices.getPets()
            .then(result => {
                setPets(result)
            });
    }, [])

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>

            </nav>

            <ul className="other-pets-list">
                {
                    pets.length > 0
                        ? pets.map(p => <PetCard key={p._id} pet={p} />)
                            : <p className="no-pets">No pets in database!</p>
                }
            </ul>

        </section>

    );
}

export default Dashboard;