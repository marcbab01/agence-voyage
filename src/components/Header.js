import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title = 'Nos Forfaits' }) => {
    const onClick = () => {
        console.log('click component');
    };

    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2x1">{title}</h1>
            <Button color='bg-green-800' text='Add' onClick={onClick} />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;