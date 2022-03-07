import React from 'react';

const CategoryDetails = ({ filterdData }) => {
    return (
        <>
            {filterdData?.id && <div className='category__details'>
                <div>
                    <div key={filterdData.id}>
                        <h1>{filterdData.title}</h1>
                        <p>{filterdData.body}</p>
                    </div>
                </div>
            </div>}
        </>

    );
};

export default CategoryDetails;