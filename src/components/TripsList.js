import SingleTrip from './SingleTrip'

const TripsList = ({ trips, onDelete }) => {

    return (
        <>
            {trips.length > 0 ? (

                <div className="grid grid-cols-4 gap-6 px-8 py-4">
                    {trips.map((trip) => (
                        <SingleTrip key={trip.id} trip={trip} onDelete={onDelete} />
                    ))}
                </div>
            ) : (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 font-bold">Empty List</div>
            )}
        </>
    )
}
export default TripsList