import React from 'react';

export default function RestaurantSearchBar( {searchTerm, onSearchChange } ) {
    return (
        <div className="restaurant-page-form">
            <form className="cuisine-form">
                <label>
                    <input
                        className="cuisine-input"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="What cuisine are you in the mood for?"
                        />
                </label>
            </form>
        </div>
)};