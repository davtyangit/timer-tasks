import './AddItem.css'

export const AddItem = ({ addItem, values, setValues }) => {

    return (
        <div className='add-item'>
            <input
                className='add-input'
                placeholder='type...'
                type="text"
                value={values}
                onChange={event => setValues(event.target.value)} />
            {
                values ? <button className='btn add-btn' onClick={addItem}>Add</button> : <button className='btn closed-btn' disabled onClick={addItem}>Add task</button>
            }
        </div>
    )
}