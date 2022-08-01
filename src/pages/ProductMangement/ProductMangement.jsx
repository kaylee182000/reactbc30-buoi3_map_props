import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

export default class ProductMangement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: "1000",
        description: "nice",
        img: "https://picsum.photos/200/200",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: "2000",
        description: "nice",
        img: "https://picsum.photos/200/200",
        productType: "mobile",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
  };
  //CRUD: creat reset update delete
  //Muon thay doi state nao thi viet ham setState o vi tri do
  //Them
  createProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    //this.setState
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  //Xoa
  delProduct = (idClick) => {
    //xu ly mang => setState
    //console.log(idClick)
    let arrProductUpdate = this.state.arrProduct;
    //tim ra vi tri id can xoa
    // let indexDel = arrProductUpdate.findIndex((p) => p.id === idClick);
    // if (indexDel !== -1) {
    //   arrProductUpdate.splice(indexDel, 1);
    // }

    arrProductUpdate = arrProductUpdate.filter((p) => p.id !== idClick);
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  //Cap nhat
  editProduct =(prodEdit) => {
    this.setState({
      productEdit: prodEdit
    })
  }
  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <FormProduct productEdit={this.state.productEdit} createProduct={this.createProduct} />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct = {this.editProduct}
        />
      </div>
    );
  }
}
