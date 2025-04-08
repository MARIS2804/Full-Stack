import React, { useState } from 'react';

function Card() {
    const images = [
        { id: 1, url: "https://tse4.mm.bing.net/th/id/OIP.gabnTIrb9_VUBujEuAZp1QHaEK?w=307&h=180&c=7&r=0&o=5&pid=1.7" ,name:"mad"},
        { id: 2, url: "https://tse4.mm.bing.net/th/id/OIP.eXgQmfE-CylXyGs2qusWTAHaFT?w=275&h=197&c=7&r=0&o=5&pid=1.7", name:"tuty"},
        { id: 3, url: "https://tse1.mm.bing.net/th/id/OIP.xpRcoaSSfJytVEZJeG_5ZwHaLG?w=115&h=180&c=7&r=0&o=5&pid=1.7",name:"mon" }
    ];

    const [count, setCount] = useState(0);

    function handlePrev() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleNext() {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    }

    console.log("Current count:", count);
    console.log("Current image URL:", images[count]?.url);

    return (
        <div className="image-card">
            {images[count] ? (
                <img src={images[count].url} alt={images[count].name} />
            ) : (
                <p>No image available</p>
            )}
            <br></br>
            <button id="prev" onClick={handlePrev}>Previous</button>
            <button id="next" onClick={handleNext}>Next</button>
        </div>
    );
}

export default Card;