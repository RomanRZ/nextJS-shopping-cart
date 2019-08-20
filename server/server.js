const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
import axios from 'axios';

app.listen(port);

app.use(cors());

app.get('/orders', (req,res) => {
    axios.post('http://192.168.88.72:8081/api/orders', {
        "user": {
            "firstname": req.body.name,
            "lastname": req.body.surname,
            "email": req.body.email,
            "phone": req.body.phone,
            "userAgent": req.body.userAgent
          },
          "cart": [
            {
              "productId": 70,
              "price": 5,
              "count": 50
            }
          ]
    }).then(response => {
        
    })
})