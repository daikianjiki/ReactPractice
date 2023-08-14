import { ChangeEvent } from 'react'
import './FilterProduct.css'

export default function FilterProduct(props: any) {
    function onFilterValueChanged(event:ChangeEvent<HTMLSelectElement>) {
        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="filter-area">
            <select name="isAvailable" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    )
}