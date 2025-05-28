import PropTypes from 'prop-types'

const Button = ({ color = 'steelblue', text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className={`btn ${color}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: 'btn-blue',
    onClick: PropTypes.func.isRequired
}

export default Button