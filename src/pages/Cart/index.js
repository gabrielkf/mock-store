import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTOS</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzenUkKnzmLVnubL7kHsuSxz9GJgEJL8dkBR69asJlwVie_mKud32IfdlKiDk9hXyL8U6t1Z7yFFTCrFaAiZHKRtni0iRtdX6bDBPH8e0&usqp=CAE"
                alt="Shoe"
              />
            </td>
            <td className="products">
              <strong>Tênis doidãããão</strong>
              <span>R$ 314,22</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={21} />
                </button>
                <input readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={21} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 312,22</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={21} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1234,56</strong>
        </Total>
      </footer>
    </Container>
  );
}
