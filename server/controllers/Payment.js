const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/add', async (req, res) => {
  const url = "https://developers.flouci.com/api/generate_payment";
  const pay = {
    "app_token": "10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b",
    "app_secret": "6fa7ddaf-baef-4d11-bbaf-7c1ee6b7e626",
    "amount": req.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "http://localhost:3000/client/cart/success",
    "fail_link": "http://localhost:3000/client/cart/fail",
    "developer_tracking_id": "13360cca-3c0b-451f-b4c0-427d9bdd035d"
  };
  try {
    const result = await axios.post(url, pay);
    res.send(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/api/verify/:id', async (req, res) => {
  try {
    const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'apppublic': '10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b',
          'appsecret': '6fa7ddaf-baef-4d11-bbaf-7c1ee6b7e626'
        }
      });
    res.send(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
