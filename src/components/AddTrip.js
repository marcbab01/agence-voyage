import { useState } from 'react'

const AddTrip = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('SVP ajoutez un nom pour le forfait')
            return
        }
        onAdd({ name, description, price, category })
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Forfait</label>
                <input
                    type='text'
                    placeholder="Ajouter un forfait"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input
                    type='text'
                    placeholder="Ajouter une description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                    type='text'
                    placeholder="Ajouter un prix"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <input
                    type='text'
                    placeholder="Ajouter une catégorie"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-gray btn-block mt-4" value="Save trip" />
        </form>
    )
}

export default AddTrip