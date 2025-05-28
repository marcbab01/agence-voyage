import Header from './components/Header'
import NavBar from './components/NavBar'
import TripsList from './components/TripsList'
import { useState, useEffect } from 'react'
import AddTrip from './components/AddTrip'

function App() {
  const [trips, setTrips] = useState([
    {
      "id": 1,
      "name": "Vacances de rêve à Paris",
      "description": "Visitez la Tour Eiffel ainsi que le Louvres dans la cité de l'amour.",
      "price": 1200,
      "category": "Culture"
    },
    {
      "id": 2,
      "name": "Vacances de rêve à Londres",
      "description": "Visitez le Royaume qui conquéri le monde pour ses épices pour ne jamais les utiliser.",
      "price": 1500,
      "category": "Culture"
    },
    {
      "id": 3,
      "name": "Vacances de rêve à Boca Raton",
      "description": "Soleil, sable et océan de rêve",
      "price": 2000,
      "category": "Plage"
    },
    {
      "id": 4,
      "name": "Vacances de rêve à Montréal",
      "description": "Visitez la plus grande chaîne de montagnes oranges qui perdure à l'année longue",
      "price": 5000,
      "category": "Aventure"
    }
  ])

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
      <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 rounded-lg">
        <Header />
        <AddTrip onAdd={addTrip} />
      </div>
      <TripsList trips={trips} onDelete={deleteTrip} />
    </div>
  );
}

export default App;