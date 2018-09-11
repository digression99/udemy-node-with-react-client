import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn" onClick={() => {
                console.log('clicked.');
            }}>
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i
                        className="large material-icons"
                        style={{ fontSize : '30px' }}
                    >add_box</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;