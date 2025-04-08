import React, { useState } from "react";
import Fruit from "../components/Fruit";

function Home() {
    const [searchItem, setSearchItem] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const items = ['Apple', 'Orange', 'Grape', 'Watermelon', 'Strawberry', 'Pineapple', 'Papaya', 'Orange', 'Mango', 'Kiwi', 'Blueberry', 'Banana', 
                   'Currant', 'Fig', 'Gooseberry', 'Date', 'Olive', 'Tangerine', 'Apricot', 'Boysenberry', 'Ackee', 'Durian'];

    const handleClick = (e) => {
        e.preventDefault();
        const result = items.filter(item => 
            item.toLowerCase().startsWith(searchItem.toLowerCase())
        );
        setFilteredItems(result);
    };

    return (
        <>
            <div className="home">
                <form onSubmit={handleClick} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search for a Fruit...." 
                        className="search-input"
                        onChange={(e) => setSearchItem(e.target.value)}
                    /> 
                    <button type="submit" className="submit-btn">Search</button>
                </form>
            </div>
            <div className="display">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <Fruit key={index} fruit={item} />
                    ))
                ) : (
                    <p>No fruits found matching your search criteria.</p>
                )}
            </div>
        </>
    );
}

export default Home;