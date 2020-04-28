import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';
import * as cartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.arrayOf({
      amount: PropTypes.number,
    }).isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');

    //* avoids unecessary repetition of format function inside render()
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    const { addToCartRequest, amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => {
                addToCartRequest(product.id);
              }}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || '0'}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, []),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

//* connect(mapStateToProps, mapActionsToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
