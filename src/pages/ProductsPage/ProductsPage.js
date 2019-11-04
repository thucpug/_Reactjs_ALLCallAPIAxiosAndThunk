import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/Products/Products";
import ProductItem from "../../components/Products/ProductItem";
import { connect } from "react-redux";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "./../../redux/actions/index";
class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onRemove = id => {
    this.props.onDeleteProducts(id);
  };
  render() {
    var { productis } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-lg btn-info">
          <Link to="/product/add">Add Products</Link>
        </button>
        <Products>{this.showProducts(productis)}</Products>
      </div>
    );
  }
  showProducts = productis => {
    var result = null;
    if (productis.length > 1) {
      result = productis.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onRemove={this.onRemove}
          ></ProductItem>
        );
      });
    }

    return result;
  };
}
const mapStateToProps = state => {
  return {
    productis: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProducts: id => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
