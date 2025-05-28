import Header from './components/Header'
import NavBar from './components/NavBar'
import TripsList from './components/TripsList'
import { useState, useEffect } from 'react'
import AddTrip from './components/AddTrip'

function App() {
  const [trips, setTrips] = useState([])

  const deleteTrip = async (id) => {
    // await fetch(`http://localhost:5000/trips/${id}`, {
    //   method: 'DELETE',
    // })
    setTrips(trips.filter((trip) => trip.id !== id))
  }

  const addTrip = (trip) => {
    const lastId = trips.length > 0 ? trips[trips.length - 1].id : 0
    const id = lastId + 1
    const newTrip = { id, ...trip }
    setTrips([...trips, newTrip])
  }

  const [showAddTrip, setShowAddTrip] = useState(false)

  // useEffect(() => {
  //   const getTrips = async () => {
  //     const tripsFromServer = await fetchTrips('http://localhost:5000/trips')
  //     setTrips(tripsFromServer)
  //   }
  //   getTrips()
  // }, [])

  const fetchTrips = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  return (
    <div className="font-sans min-h-screen">
      <NavBar />
      <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 max-w-screen-md rounded-lg">
        <Header />
        <AddTrip onAdd={addTrip} />
        <TripsList trips={trips} onDelete={deleteTrip} />
      </div>
    </div>
  );
}

export default App;