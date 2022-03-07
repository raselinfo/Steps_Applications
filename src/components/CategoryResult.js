import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import data from '../db/data';
import CategoryDetails from './CategoryDetails';
const CategoryResult = () => {
    const { subcategory } = useParams()
    const [searchParams, setSearchParams] = useSearchParams(1);
    const [filterdData, setFilterdData] = useState({})
    const [filterdItem, setFilterdItem] = useState({})
    const [steps, setSteps] = useState(Number(searchParams.get("steps")))
    let history = useNavigate()
    // setSearchParams(steps+1)
    useEffect(() => {
        let filter = data.filter(item => {
            return item.category.toLocaleLowerCase() === subcategory.toLocaleLowerCase()
        })[0]
        setFilterdData(filter)
    }, [filterdData])
    useEffect(() => {
        if (!filterdData.steps || filterdData.steps.length < steps) {
            let filter = filterdData.steps ? filterdData.steps[0] : {}
            setFilterdItem(filter)
        }else{
            let filter = filterdData.steps ? filterdData.steps[steps - 1] : {}
            setFilterdItem(filter)
        }

    }, [steps, filterdData])
    const updateQuery = () => {
        if (steps === 0) {
            setSteps(1)
        }
        history(`/post-service-request/${subcategory}/?steps=${steps}`)
    }
    useEffect(() => {
        updateQuery()
    }, [steps])
    const stpesUpdate = (e) => {
        if (e.target.name === "increment") {

            if (filterdData.steps.length > steps) {
                setSteps(steps + 1)
            }
        }
        if (e.target.name === "decrement") {
            if (steps !== 1) {
                setSteps(steps - 1)
            }
        }
    }
    return (
        <div>
            <h1>{filterdData.category}</h1>
            <CategoryDetails filterdData={filterdItem} />
            <button name="decrement" onClick={(e) => stpesUpdate(e)}>-</button>
            <button name="increment" onClick={(e) => stpesUpdate(e)}>+</button>
        </div>
    );
};

export default CategoryResult;