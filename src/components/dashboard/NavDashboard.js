import React from "react";

export const NavDashboard = () => {
    return (
        <nav className='dashboard__nav'>
            <div className='dashboard__user'>
                <i className="far fa-user"></i>
                <span> USER</span>
            </div>
            <div>
                <button
                    className='btn'
                >
                    <span>SALIR </span>
                    <i className="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </nav>
    );
};
