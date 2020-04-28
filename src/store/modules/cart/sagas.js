/*
Redux reducers must be pure functions, e.g. syncronous.
Redux Saga implements middleware functions, to perform
async operations
*/
import {
  call,
  put,
  all,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import {
  addToCartSuccess,
  updateAmountSuccess,
} from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  //* '*' in "function*" is the "generator" functionality - for now, means function is async

  const productInCart = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);
  const available = stock.data.amount;
  const inCart = productInCart && productInCart.amount;

  if (inCart + 1 > available) {
    toast.error('Estoque insuficiente');
    return;
  }

  if (productInCart) {
    const amount = productInCart.amount + 1;
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);
    //* 'yield' has the same effect as 'await'

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    //* put() dispatches an action
    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const available = stock.data.amount;

  if (amount > available) {
    toast.error('Estoque insuficiente');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
