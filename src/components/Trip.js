import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Trip = ({ setShowAddTrip }) => {
    const { id } = useParams();
    const [trip, setTrip] = useState([])
    useEffect(() => {
        setShowAddTrip(false)
        const fetchTrip = async () => {
            try {
                const response = await fetch(`http://localhost:5000/tasks/${id}`);
                const data = await response.json();
                setTrip(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTrip();
    }, [setShowAddTrip, id]);
    //const task = tasks.find(item => item.id === id)
    return (
        <>
            <div className="bg-blue-200 p-2 my-2 px-4 cursor-pointer rounded">
                <h3 className="flex items-center justify-between font-bold text-lg">
                    {trip.name}
                </h3>
                <p><strong>Id: </strong>{trip.id}</p>
                <p><strong>Description:</strong> {trip.description}</p>
            </div>
            <Link to="/" className="text-blue-700 hover:underline">Go back</Link>
        </>
    )
}
export default Trip