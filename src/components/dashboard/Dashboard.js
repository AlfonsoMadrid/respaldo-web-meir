import React from 'react';
import { Acordeon } from './Acordeon';
import { NavDashboard } from './NavDashboard';

export const Dashboard = () => {
    return (
        <div className='dashboard__container'>
            <NavDashboard />
            <Acordeon />
        </div>
    )
}
