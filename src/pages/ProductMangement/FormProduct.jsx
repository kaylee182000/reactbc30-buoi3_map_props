import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
    },
  };

  handleChange = (e) => {
    let { id, value } = e.target;
    let dataType = e.target.getAttribute("data-type");
    //Xu ly productInfo
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;
    //Xu ly loi
    let newError = { ...this.state.errors };
    //check truong hop rong
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = id + " khong duoc bo trong";
    } else {
      //loi dinh dang
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorMess = id + " phai la so";
        }
      }
    }
    newError[id] = errorMess;
    //setState
    this.setState(
      {
        productInfo: newValue,
        errors: newError,
      },
      () => {
        //console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //check truoc khi submit du lieu
    let valid = true;
    let { errors, productInfo } = this.state;
    //check error (tat ca error phai rong)
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }
    //check value(productInfo) tat ca value phai khac rong
    for (let key in productInfo) {
      if (productInfo[key].trim() === "") {
        errors[key] = key + " khong duoc bo trong";
        valid = false;
        //break;
      }
    }
    if (!valid) {
      this.setState({
        errors: errors,
      });
      alert("du lieu khong hop le");
      return;
    }

    //Hop le
    //alert("Submitted")
    this.props.createProduct(productInfo);
  };

  static getDerivedStateFromProps(newProps, currentState) {
    //Lay props.productEdit => gan vao state.productInfo => sau do giao dien lay ra tu state
    if (newProps.productEdit.id !== currentState.productInfo.id) {
      currentState.productInfo = newProps.productEdit;
      return currentState; //ham nay se tao ra this.state moi
    }
    return null;
  }

  render() {
    let { id, name, price, img, description, productType } =
      this.state.productInfo;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header">
          <div className="card-header bg-dark text-warning text-center">
            Product Info
          </div>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input
                value={id}
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.id}</p>
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                value={name}
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.name}</p>
            </div>
            <div className="form-group">
              <p>Price</p>
              <input
                value={price}
                data-type="number"
                className="form-control"
                id="price"
                name="price"
                type="text"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Img Link</p>
              <input
                value={img}
                className="form-control"
                id="img"
                name="img"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.img}</p>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select
                value={productType}
                name="productType"
                id="productType"
                className="form-control"
                onChange={this.handleChange}
              >
                <option>mobile</option>
                <option>tablet</option>
                <option>laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>Product Description</p>
              <textarea
                value={description}
                className="form-control"
                name="description"
                id="description"
                rows={3}
                onChange={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.errors.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button type="button" className="btn btn-primary mx-2" onClick={() => {
            this.props.updateProduct(this.state.productInfo)
          }}>Update</button>
        </div>
      </form>
    );
  }
}
