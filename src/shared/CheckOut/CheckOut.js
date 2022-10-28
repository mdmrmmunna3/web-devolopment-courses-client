import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const chekOut = useLoaderData()
    console.log(chekOut)
    const { name, img , desciption} = chekOut;
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card mb-3" style={{ maxWidth: '576px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text"><>Description : {
                                desciption?.length > 150 ?
                                    <>{desciption.slice(0, 150) + '...'}  </>
                                    :
                                    desciption
                            }</></p>
                            <Link to='/course'><p className="card-text"><small className="text-muted">go back</small></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;