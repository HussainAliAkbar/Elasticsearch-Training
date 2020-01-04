const data = require('./esData');
const axios = require('axios');


const execute = async () => {
  for (let i = 0; i < data.length; i++) {
    console.log('executing : ', i+1, data[i].name);
    await axios.put(`http://localhost:9200/products/laptop/${i+1}`, data[i])
  }
};

execute().then(() => console.log('done'));
