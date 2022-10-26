import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSummaryCard = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h1>this is </h1>
        </div>
    );
};

export default CourseSummaryCard;