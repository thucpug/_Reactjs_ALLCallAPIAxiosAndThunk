import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  onRemove = id => {
    if (confirm("Do you remove product ?")) {//eslint-disable-line
      this.props.onRemove(id);
    }
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Active" : "Not";
    var statusClassLable = product.status ? "success" : "danger";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClassLable}`}>
            {statusName}
          </span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-success mr-10"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn btn-danger"
            onClick={() => {
              this.onRemove(product.id);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
