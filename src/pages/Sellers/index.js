import React, { Component } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { MdFace } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
// import { connect } from 'react-redux';

import api from '../../services/api';

import { SellersList } from './styles';

export default class Sellers extends Component {
  state = {
    sellers: [],
  };

  async componentDidMount() {
    const response = await api.get('sellers');

    this.setState({
      sellers: response.data,
    });
  }

  render() {
    const { sellers } = this.state;

    return (
      <SellersList>
        {sellers.map(seller => (
          <li key={seller.id}>
            <div>
              {/* icon instead of picture */}
              <FaUserTie size={40} />
              <strong>{seller.name}</strong>
            </div>
            <span>
              <p>Especialidades:</p>
              <ul>
                {seller.expertises.map(expertise => (
                  <li key={expertise}>{expertise}</li>
                ))}
              </ul>
            </span>

            <button type="button">
              <div>
                <MdFace size={20} />
                <GoPrimitiveDot size={12} />
              </div>
              <span>PRECISO DE AJUDA</span>
            </button>
          </li>
        ))}
      </SellersList>
    );
  }
}
