import React, { useContext } from 'react';
import qr from '../../assets/images/A_Minha_Galeria.png';
import { Chart } from 'react-google-charts';

import './styles.css';
import Partner from '../Partner';
import Navigate from '../Navigate';
import PartnerContext from '../../Context/PartnerContext';

const vendasDiarias = [
  ['Vendas', 'Vendas por dia'],
  ['Água', 110],
  ['Suco', 55],
  ['Refrigerante', 32],
];

const vendasSemanais = [
  ['Vendas', 'Vendas Semanais'],
  ['Água', 898],
  ['Suco', 299],
  ['Refrigerante', 341],
];

const vendasMensais = [
  ['Vendas', 'Vendas por dia'],
  ['Água', 2145],
  ['Suco', 1345],
  ['Refrigerante', 1589],
];

const chartComponent = (data, title) => (
  <Chart
    width={'500px'}
    height={'300px'}
    chartType='PieChart'
    loader={<div>Carregando gráfico</div>}
    data={data}
    options={{
      title,
      backgroundColor: 'transparent',
    }}
  />
);

const BuyId = () => {
  const { partnerInfo } = useContext(PartnerContext);
  return (partnerInfo !== null && 
    <div className='id-page'>
      {Partner(partnerInfo)}
      <div className='id-container'>
      <h2>ID DE COMPRAS</h2>
        <div className='circle'>
          <h1>{partnerInfo.buyId}</h1>
        </div>
      <Navigate />
      <img className='qrCode' src={qr} alt='qr-code' />
      </div>
      <div className='graphic-container'>
        {chartComponent(vendasDiarias, 'Vendas Diárias')}
        {chartComponent(vendasSemanais, 'Vendas Semanais')}
        {chartComponent(vendasMensais, 'Vendas Mensais')}
      </div>
    </div>
  )
};

export default BuyId;
