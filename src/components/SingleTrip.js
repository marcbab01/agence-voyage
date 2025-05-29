import { FaTimes, FaEye } from "react-icons/fa"
import { Link } from 'react-router-dom'

const SingleTrip = ({ trip, onDelete }) => {

    return (
        <div className="bg-blue-200 p-2 my-2 px-4 cursor-pointer rounded">
            <h3 className="font-bold text-lg">{trip.name}
                <Link to={`/trip/${trip.id}`} className="mr-3 text-blue-900"><FaEye /></Link>
            </h3>
            <p>{trip.description}</p>
            <p>{trip.price}</p>
            <p>{trip.category}</p>
            <FaTimes
                className="text-red-600 pointer"
                onClick={() => onDelete(trip.id)}
            />
        </div>
    )
}
export default SingleTrip