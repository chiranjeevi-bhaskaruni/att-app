import React, { useEffect, useState } from 'react'
import { Route, withRouter } from 'react-router';
import http from '../../axios-http'
import OrderDetails from './OrderDetails/OrderDetails';
import ViewDetails from './ViewDetails/ViewDetails';

const OrderStatus = (props) => {

    const [state, setstate] = useState({
        "id": 10,
        "orderId": 198772,
        "items": [
          {
            "id": 100000,
            "name": "Apple Iphone XR",
            "plan": "AT&T Unlimited Extra",
            "skuId": "sku1234",
            "skuAttributes": {
              "model": "Iphone XR",
              "manufacturer": "Apple",
              "color": "Yellow",
              "size": "64 GB"
            },
            "quantity": 1,
            "telephoneNumber": "409.406.3322",
            "status": "ordered",
            "complete": true,
            "estimatedShipDateRange": {
              "fromDate": "2020-09-06T13:39:52.774-05:00",
              "toDate": "2020-09-06T13:39:52.774-05:00"
            },
            "newEstimatedShipDateRange": {
              "fromDate": "2020-10-02T13:39:52.774-05:00",
              "toDate": "2020-10-02T13:39:52.774-05:00"
            },
            "userAcceptedDelay": true
          }
        ],
        "status": "delivered",
        "complete": true,
        "shipingAddress": {
          "street": "437 Lytton",
          "city": "Palo Alto",
          "state": "CA",
          "zip": "94301"
        },
        "shipments": [
          {
            "id": 1,
            "items": [
              100000
            ],
            "carrier": "USPS",
            "trackingNumber": "9400100000000000000000",
            "trackingUrl": "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
            "estimatedDeliveryDate": "2020-10-06T13:39:52.774-05:00",
            "shipDate": "2020-10-02T13:39:52.774-05:00"
          }
        ]
      });

    useEffect(() => {
        http.get('/orders.json')
            .then(res => {
                console.log(res.data);
            })
    }, []);

    function gotoOrderDetails() {
        props.history.push(`${props.match.path}/viewDetails`)
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10px auto',
            maxWidth: '600px',
            cursor: 'pointer'
        }} onClick={gotoOrderDetails}>
        {
            state.items.map(card => {
               return <OrderDetails key={card.id}
                name={card.name} 
                color={card.skuAttributes.color} 
                size={card.skuAttributes.size} 
                skuId={card.skuId} 
                plan={card.plan}
                toDate={card.shipDate}
                fromDate={card.estimatedDeliveryDate} 
                status={card.status}/>
            })
        }
        
        </div>
    )
}

export default withRouter(OrderStatus);
