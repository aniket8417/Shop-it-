import React, { useState } from 'react';
import shopData from './shopData';
import { Link } from 'react-router-dom';


const BrowseShops = () => {

    const [shopArray, setShopArray] = useState(shopData);

    const displayShops = () => {
        return shopArray.map((shop, index) => {
            return <div className="col-md-3 mt-5">
            <div className="card">
                <img
                    className="card-img-top my-img"
                    src={shop.image}
                    alt=""
                />
                <div className="card-body">
                    <p className="fw-bold">{shop.category}</p>
                    <h3>{shop.name}</h3>
                    <p className="text-muted">{shop.address}</p>
                </div>
                <div className="card-footer">
                    <Link to={'/browseitems/'+index} className='btn btn-primary' > <i class="fa-solid fa-shop"></i>Shop</Link>
                </div>
            </div>
        </div>
        } )
    }

    return <div className='browse-bg'>
        <header className="bg-danger text-white " >
        
         <div className="container py-5">
                <h1 className="text-center display-3 fw-bold page-title">
                    Shopit
                </h1>
                <h4 className="text-center sub-title">
                    Shop at Home.
                </h4>
                <div className="input-group w-75 mt-5 m-auto search-input">
                    <input
                        placeholder="Search Here ..."
                        type="text"
                        className="form-control"
                    />
                    <button className="btn btn-primary">
                        {" "}
                        <i className="fa-solid fa-magnifying-glass" /> Search
                    </button>
                </div>
            </div>
        </header>
        <div className="container">
            <div className="row">
                    {displayShops()}
            </div>
        </div>
        <footer className="bg-danger text-white mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        <h4>My Company</h4>
                        <p>
                           Here you can find all the shops near you.
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <a href="" className="text-white d-block my-2 no-underline">
                            Link 1
                        </a>
                        <a href="" className="text-white d-block my-2">
                             Link 2
                        </a>
                        <a href="" className="text-white d-block my-2">
                             Link 3
                        </a>
                        <a href="" className="text-white d-block my-2">
                            Link 4
                        </a>
                    </div>
                    <div className="col-sm-2">
                        <a href="" className="text-white d-block my-2">
                            Link 5
                        </a>
                        <a href="" className="text-white d-block my-2">
                            Link 6
                        </a>
                        <a href="" className="text-white d-block my-2">
                            Link 7
                        </a>
                        <a href="" className="text-white d-block my-2">
                            Link 8
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <h5>Reach us out</h5>
                        <h6 className="mb-3">
                            <i className="fa-brands fa-facebook" />
                            <a href="" className="text-white">
                                Facebook
                            </a>
                        </h6>
                        <h6 className="mb-3">
                            <i className="fa-brands fa-facebook" />
                            <a href="" className="text-white">
                                Instagram
                            </a>
                        </h6>
                        <h6 className="mb-3">
                            <i className="fa-brands fa-facebook" />
                            <a href="" className="text-white">
                                Youtube
                            </a>
                        </h6>
                        <h6 className="mb-3">
                            <i className="fa-brands fa-facebook" />
                            <a href="" className="text-white">
                                Linkedin
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <hr />
                <h4>© My Website 2024</h4>
            </div>
        </footer>
    </div>



    return (
        <div>BrowseShops</div>
    )
}

export default BrowseShops