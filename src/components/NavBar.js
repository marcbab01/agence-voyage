import PropTypes from 'prop-types';

const NavBar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-4 flex space-x-4">
                <a href="/">AgenceVoyage</a>
                <a href="/tripslist">Forfaits</a>
                <a href="about">À Propos</a>
            </div>
        </nav>
    );
};

export default NavBar;