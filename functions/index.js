const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HSMmQGyS6WEA0mbzPW62xsN5ibpUsfZwuKu1ghZtqkY3TIOoFsyFq8WBhgyfuxFE7cGguVntTuKz2FCDQL0VINJ00pK6gnqVj')

//App Config
const app = express()



//Middlewares
app.use(cors({ origin: true }))
app.use(express.jason())




//API routes
app.get('/', (request, response) => response.status(200).send('Hey! There'))
app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Requst Receivedfor the amaount >>>>', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,//subunits of currency
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})




//Listen command
exports.api = functions.https.onRequest(app)

