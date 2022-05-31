import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div>
      <div className="container container_padding bg-white">
        <h1 className="bg-light text-center py-3 mb-0">
          <i className="fas fa-plug"></i>
          Electronic Store
        </h1>
        <div className="form-container">
          {/* <!-- !ID CONTENT --> */}
          <div className="form-group py-2">
            <input type="text" name="id" id="id" className="form-control" disabled />
          </div>
          {/* <!-- !PRODUCT NAME --> */}
          <div className="price_grid py-2">
            <div className="grid_layout">
              <input type="text" name="name" id="name" placeholder="Product Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid_layout">
              <input type="number" name="quantity" id="quantity" placeholder="Quantity" min="1" max="1000" value={count} onChange={(e) => setCount(e.target.value)} className="form-control" />
            </div>
          </div>

          {/* <!-- !GRID CONTENT --> */}
          <div className="my_grid py-2">
            {/* <!-- !layout --> */}
            <div className="grid_layout">
              <input type=" text" name="seller" id="seller" className="form-control" placeholder="Seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
            </div>
            {/* <!-- !layout --> */}
            <div className="grid_layout">
              <input type="text" name="price" id="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            </div>
          </div>
          {/*  <-- !buttons --> */}
          <div className="w-100 d-flex justify-content-between py-2">
            <button className="btn btn-success px-5" id="btn_add">
              Create
            </button>
            <button className="btn btn-primary px-5" id="btn_read">
              Read
            </button>
            <button className="btn btn-warning px-5" id="btn_update" disabled>
              Update
            </button>
            <button className="btn btn-danger px-5" id="btn_delete">
              Delete All
            </button>
          </div>
        </div>
        <table className="table table-striped table-hover" id="store">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="t_body">
            {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>12</td>
          <td>
            <i className="fas fa-edit"></i>
          </td>
          <td>
            <i className="far fa-trash-alt"></i>
          </td>
        </tr>  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
