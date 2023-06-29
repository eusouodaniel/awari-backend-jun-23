const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

exports.showProducts = function() {
  const products = [{
    name: 'iPhone 14',
    price: 9500,
    category: 'Smartphones'
  },{
    name: 'Samsung S23',
    price: 6500,
    category: 'Smartphones'
  },{
    name: 'monitor',
    price: 3000,
    category: 'Monitores',
  }];
  return products;
}
  
exports.getCategories = async function () {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    return data.filter((category) => category === 'Smartphones');
  } catch (error) {
    console.error(error.message);
    return;
  }
}
  