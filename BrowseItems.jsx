import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import shopData from './shopData';

const BrowseItems = () => {

    const { index } = useParams();

    const [selShop, setSelShop] = useState(shopData[index]);

    const [cartItems, setCartItems] = useState([]);

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const addItemToCart = (item) => {
        console.log(cartItems);
        if (cartItems.find((cartItm) => { return cartItm.name === item.name })) {
            let temp = cartItems;
            for (let i = 0; i < temp.length; i++) {
                if (item.name === cartItems[i].name) {
                    temp[i].qty++;
                    break
                }
            }
            setCartItems([...temp]);
            return;
        }
        setCartItems([
            ...cartItems,
            { name: item.name, price: item.price, image: item.image, qty: 1 }
        ])
    }

    const getItemQty = (itemName) => {
        const selItem = cartItems.find((cartItm) => { return cartItm.name === itemName });
        if (selItem) return selItem.qty;
        return 0;
    }

    const removeItemFromCart = (item) => {
        if (cartItems.find((cartItm) => { return cartItm.name === item.name })) {
            let temp = cartItems;
            for (let i = 0; i < temp.length; i++) {
                if (item.name === cartItems[i].name) {
                    if (temp[i].qty === 1) {
                        const temp2 = cartItems;
                        temp2.splice(i, 1);
                        break;
                    } else {
                        temp[i].qty--;
                        break;
                    }
                }
            }
            setCartItems([...temp]);
            return;
        }
    }

    const checkoutCard = () => {
        return <div className="card mt-4">
            <div className="card-header">
                <h5>Checkout</h5>
            </div>
            <div className="card-body">
                <label htmlFor="">Address</label>
                <textarea className='form-control' rows={10}></textarea>

                <button className='btn btn-primary mt-4' onClick={saveOrder}>Place Order</button>
            </div>
        </div>
    }

    const saveOrder = async () => {
        const res = await fetch('http://localhost:5000/order/add', {
            method: 'POST',
            body: JSON.stringify({
                items: cartItems,
                user: currentUser._id,
                shopName: selShop.name,
                createdAt: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);

    }

const displayItems = () => {
    return selShop.items.map((item) => {
        return <div className='col-md-3 mb-3'>
            <div className="card">
                <img className='prod-img card-img-top' src={item.image} alt="" />
                <div className="card-body">
                    <h4>{item.name}</h4>
                    <h3>Rs.{item.price}</h3>

                    <button className='btn btn-warning' onClick={e => addItemToCart(item)}><i class="fa-solid fa-cart-plus">  </i> Add to Cart</button>
                    <button className='btn btn-danger ms-2' onClick={e => removeItemFromCart(item)}><i class="fa-solid fa-trash">  </i></button>

                    {getItemQty(item.name) !== 0 ? (<p>In Cart : {getItemQty(item.name)} </p>) : ''}
                </div>
            </div>
        </div>
    })
}

const displayCart = () => {
    return cartItems.map(item => (
        <li className='list-group-item d-flex justify-content-between'>
            <h6>{item.name}</h6>
            <p>{item.qty}</p>
        </li>
    ))
}

const calculatePrice = () => {
    let sum = 0;
    for (let prod of cartItems) {
        sum += (prod.price * prod.qty);
    }

    return sum;
}

return (
    <div>
        <div className="container">
            <header className='py-5'>
                <div className="row">
                    <div className="col-md-4">
                        <img className='w-100' src={selShop.image} alt="" />
                    </div>
                    <div className="col-md-8">

                        <h2>{selShop.name}</h2>
                        <p>{selShop.address}</p>
                    </div>
                </div>
            </header>
            <section>
                <div className="row">
                    <div className="col-md-9">

                        <h4 className='text'>Browse Shop Items</h4>
                        <div className="row">
                            {displayItems()}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Order Details</h4>
                                <hr />
                                <ul className='list-group'>
                                    {displayCart()}
                                </ul>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h4>Order Total : </h4>
                                    <h3>{calculatePrice()}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {checkoutCard()}
            </section>

        </div>
    </div>
)
}

export default BrowseItems;