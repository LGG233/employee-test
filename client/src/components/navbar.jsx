import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Employee or Independent Contractor: The Test{" "}</h3>
            </a>
            <div>
                <button className="btn btn-sm"
                // onClick={function () {
                //     window.location.replace("/clientTable");
                // }}
                >
                    New Employee{" "}
                </button>
                <button className="btn btn-sm"
                // onClick={function () {
                //     window.location.replace("/Client");
                // }}
                >
                    Resume Analysis{" "}
                </button>
                <button className="btn btn-sm"
                // onClick={function () {
                //     window.location.replace("/Client");
                // }}
                >
                    View Past Results{" "}
                </button>
                <button className="btn btn-sm"
                // onClick={function () {
                //     window.location.replace("/Client");
                // }}
                >
                    See All Employees{" "}
                </button>
            </div >
        </nav>);
}

export default NavBar;