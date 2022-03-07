import React, { useState } from 'react';
import data from '../db/data';
import { Link } from "react-router-dom";

const Header = () => {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])
    const handleOnSubmit = (e) => {
        e.preventDefault();
        let items = data.filter(item => {
            return item.category.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        })
        setItems(items)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Search" />
                <hr />
                <div>
                    {items.map(item => {

                        return <li key={item.id}>
                            <Link to={`/post-service-request/${item.category}/?steps=0`}>{item.category}</Link>
                        </li>
                    })}
                </div>

            </form>
        </div>
    );
};

export default Header;