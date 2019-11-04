import React, { Component } from "react";
import "./../../App.css";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import {
  actAddProductRequest,
  actFetchProductRequest,
  actUpdateProductRequest,
} from "../../redux/actions";
class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkStatus: false,
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkStatus: itemEditing.status,
      });
    }
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = e => {
    e.preventDefault();
    var { history } = this.props;
    var { id, txtName, txtPrice, chkStatus } = this.state;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkStatus,
    };
    if (id) {
      this.props.onUpdate(product);
      history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.goBack();
      // history.push("/");
    }
  };
  render() {
    var { txtName, txtPrice, chkStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <legend>Action product:</legend>

          <div className="form-group">
            <label>Product's Name:</label>
            <input
              type="text"
              name="txtName"
              value={txtName}
              onChange={e => this.onChange(e)}
              className="form-control"
              placeholder="Enter product'name"
            />
          </div>
          <div className="form-group">
            <label>Product's Price:</label>
            <input
              type="number"
              name="txtPrice"
              value={txtPrice}
              onChange={e => this.onChange(e)}
              className="form-control"
              placeholder="Enter product'price"
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="chkStatus"
                value={chkStatus}
                checked={chkStatus}
                onChange={e => this.onChange(e)}
              />
              Active
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: id => {
      dispatch(actFetchProductRequest(id));
    },
    onUpdate: product => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductAction);
