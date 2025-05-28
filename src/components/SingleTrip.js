import { FaTimes } from "react-icons/fa"

const SingleTrip = ({ trip, onDelete }) => {

    return (
        <div className="bg-blue-200 p-2 my-2 px-4 cursor-pointer rounded">
            <h3 className="font-bold text-lg">{trip.name}

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