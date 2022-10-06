import React from 'react';

export default function AddressForm({ handleAddressSubmit, onAddressChange, addressChange}){
    return (
        <form className="address-area" onSubmit={handleAddressSubmit}>
            <input 
            type="text"
            className="address-input"
            value={addressChange}
            onChange={(e) => onAddressChange(e.target.value)}
            placeholder="Enter Address..."
            />
            <button className="confirm-button" type="submit">confirm</button>
        </form>
    )
}