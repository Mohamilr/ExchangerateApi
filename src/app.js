const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/rates', async (req, res) => {
    const { base, currency } = req.query;

    if(!base || !currency) {
        return res.status(400).json({
            status: 'error',
            message: 'base and currency query values are required'
        })
    }

    try {
        const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`);

        return res.status(200).json({
            results: {
                base: response.data.base,
                date: response.data.date,
                rates: response.data.rates
            }
        })
      
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'server error'
        })
    }
});


app.use('*', (req, res) => {
    return res.status(404).json({
        status: 'error',
        message: 'route not found'
    })
})

module.exports = app;