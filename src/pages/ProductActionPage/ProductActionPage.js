import React, { Component } from "react";
import ProductAction from "../../components/ProductAction/ProductAction";

class ProductActionPage extends Component {
  render() {
    var { history, match } = this.props;
    return <ProductAction history={history} match={match}></ProductAction>;
  }
}

export default ProductActionPage;
