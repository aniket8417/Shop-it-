import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageOrder = () => {

    const [ManageOrderList, setManageOrderList] = useState([]);

    const [selectedManageOrder, setSelectedManageOrder] = useState(null);

    const fetchManageOrderData = async () => {
        const res = await fetch('http://localhost:5000/order/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setManageOrderList(data);
    };

    const deleteManageOrderData = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/manageorder/delete/' + id, {
            method: 'DELETE'
        });

        console.log(res.status);
        if (res.status === 200) {
            fetchManageOrderData();
            enqueueSnackbar('User Deleted', {
                variant: 'info',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }
    }

    useEffect(() => {
        fetchManageOrderData();
    }, [])



    return (
        <div>
          {viewModal()}
            <div className='container'>

                <h2 className='text-center'>Manage Order</h2>
                <hr />

                <table className='table table-dark'>

                    <thead>
                        <tr>
                            <th>items</th>
                            <th>user</th>
                            <th>shopName</th>
                            <th>creadetAt</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => (
                                <tr>
                                    <td>
                                        <img height={50} src={"http://localhost:5000/"+user.avatar} alt="" />
                                    </td>
                                    <td>{user.items}</td>
                                    <td>{user.user}</td>
                                    <td>{user.shopName}</td>
                                    <td>{user.creadetAt}</td>
                                    <td>
                                        <Link to={'/updateuser/'+user._id} className='btn btn-primary rounded-pill'>
                                            <i class="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteUserData(user._id) }} className='btn btn-danger rounded-pill'>
                                            <i class="fa-solid fa-trash"></i>&nbsp;Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                        onClick={() => {setSelectedUser(user)}}
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            View User
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>
 

        </div>
    )
}

export default ManageOrder