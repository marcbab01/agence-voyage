import Header from './components/Header'
import NavBar from './components/NavBar'
import TripsList from './components/TripsList'
import { useState, useEffect } from 'react'
import AddTrip from './components/AddTrip'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [trips, setTrips] = useState([])

  const deleteTrip = async (id) => {
    await fetch(`http://localhost:5000/trips/${id}`, {
      method: 'DELETE',
    })
    setTrips(trips.filter((trip) => trip.id !== id))
  }

  const addTrip = async (trip) => {
    const res = await fetch('http://localhost:5000/trips', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(trip)
    })
    const newTrip = await res.json()

    setTrips([...trips, newTrip])
  }

  const [showAddTrip, setShowAddTrip] = useState(false)

  useEffect(() => {
    const getTrips = async () => {
      const tripsFromServer = await fetchTrips('http://localhost:5000/trips')
      setTrips(tripsFromServer)
    }
    getTrips()
  }, [])

  const fetchTrips = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 rounded-lg">
          <Header />
          <AddTrip onAdd={addTrip} />
        </div>
        {/* <TripsList trips={trips} onDelete={deleteTrip} /> */}
        <Routes>
          <Route path='/tripslist' element={<TripsList Trips trips={trips} onDelete={deleteTrip} />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;