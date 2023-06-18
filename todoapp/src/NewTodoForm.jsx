import { useState } from "react"

export function NewTodoForm(props) {

    props.onSubmit
    const [newItem, setnewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        props.onSubmit(newItem)

        setnewItem("")

    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Add New Item</label>
                <input
                    value={newItem}
                    onChange={e => setnewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>

            <button className="btn">Add Item</button>
        </form>
    )
}