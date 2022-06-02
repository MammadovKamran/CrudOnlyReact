import React, { useEffect, useState } from "react";
import { Form, FormGroup, Button } from "reactstrap";
import { nanoid } from "@reduxjs/toolkit";

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  const [products, setProducts] = useState("");

  const url = "http://localhost:3000/products";

  const handleSubmit = (e) => {
    const addProduct = { id: nanoid, name, count, seller, price };
    postProduct(addProduct);
    e.preventDefault();
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  //*!POST REQUEST *//

  const postProduct = async (products) => {
    setProducts((pre) => {
      let copy = [...pre];
      copy.push(products);
      return copy;
    });
    try {
      let request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  //*!GET REQUEST *//

  const getProducts = async () => {
    try {
      const request = await fetch(url);
      await request.json().then((response) => {
        if (response && response.length > 0) {
          setProducts(response);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  //*!PUT REQUEST *//
  const putRequest = async (product) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks PUT Request Example" }),
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
  };


  //*!DELETE REQUEST *//

  const deletePost = async () => {
    await fetch(url, { method: "DELETE" });
    setProducts({});
    alert("deleteed");
  };

  const selectProduct = (product) => {
    setName(product.name);
    setCount(product.count);
    setPrice(product.price);
    setSeller(product.seller);

    products.forEach((pro) => {
      if (pro.id === product.id) {
        pro.name = product.name;
        pro.count = product.count;
        pro.price = product.price;
        pro.seller = product.seller;
      }
    });
    setProducts(products);
    // setUpdateValue(product);
    // console.log(updateValue);
  };

  const addUI = () => {
    getProducts();
    setName("");
    setCount("");
    setPrice("");
    setSeller("");
  };

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

          <Form onSubmit={handleSubmit}>
            <FormGroup className="price_grid  my_grid">
              <div className="grid_layout py-2">
                <input type="text" name="name" id="name" placeholder="Product Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="grid_layout  py-2">
                <input type="number" name="quantity" id="quantity" placeholder="Quantity" min="1" max="1000" value={count} onChange={(e) => setCount(e.target.value)} className="form-control" />
              </div>

              {/* <!-- !GRID CONTENT --> */}

              {/* <!-- !layout --> */}
              <div className="grid_layout py-2">
                <input type=" text" name="seller" id="seller" className="form-control " placeholder="Seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
              </div>
              {/* <!-- !layout --> */}
              <div className="grid_layout  py-2">
                <input type="text" name="price" id="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
              </div>
            </FormGroup>
            {/*  <-- !Buttons --> */}
            <FormGroup className="w-100 d-flex justify-content-center py-2">
              <Button className="btn btn-success px-5" id="btn_add" type="submit">
                Create
              </Button>
            </FormGroup>
          </Form>
          <div className="w-100 d-flex justify-content-between py-2">
            <Button className="btn btn-primary px-5" id="btn_read" onClick={addUI}>
              Read
            </Button>
            <Button className="btn btn-warning px-5" id="btn_update" onClick={putRequest(products)}>
              Update
            </Button>
            <Button className="btn btn-danger px-5" id="btn_delete" onClick={deletePost}>
              Delete All
            </Button>
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

          <tbody className="w-100">
            {products.length > 0
              ? products.map((product) => {
                  return (
                    <tr className="w-100 d-flex justify-content-between" value={product} key={product.id} onClick={(e) => selectProduct(product)}>
                      <th scope="row"></th>
                      <td>{product.name}</td>
                      <td>{product.count}</td>
                      <td>{product.seller}</td>
                      <td>{product.price}</td>
                      <td>
                        <i className="fas fa-edit"></i>
                      </td>
                      <td>
                        <i className="far fa-trash-alt"></i>
                      </td>
                    </tr>
                  );
                })
              : alert("product")}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
