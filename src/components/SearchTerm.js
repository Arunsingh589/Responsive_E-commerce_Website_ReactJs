import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import items from './Data';
import Product from './Product';

const SearchTerm = ({ cart, setCart, likedItems, setLikedItems }) => {
    const { term } = useParams();
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const filteredData = () => {
            const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()))
            // console.log(data);
            setFilterData(data)
        }
        filteredData();
    }, [term]);
    return (
        <div>
            <div className="flex m-4 items-center mb-2">
                <Link
                    to={'/'}
                    className="text-blue-500 font-semibold"
                >
                    Back to Shopping   &#8594;
                </Link>
            </div>
            <Product cart={cart} setCart={setCart} items={filterData} likedItems={likedItems} setLikedItems={setLikedItems} />

        </div>
    )
}

export default SearchTerm
