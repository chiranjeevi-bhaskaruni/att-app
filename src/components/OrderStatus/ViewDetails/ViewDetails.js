import React, {useContext} from 'react'
import { Card } from 'react-bootstrap'
import Moment from 'react-moment';
import MyContext from '../../../Context';
import Progress from '../OrderDetails/Progress/Progress';

const ViewDetails = () => {
    const {MyData} = useContext(MyContext);
    const {shipingAddress} = MyData;
    console.log("View Details", MyData, shipingAddress);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10px auto',
            maxWidth: '600px'
        }}>
        <Card>
            <Card.Body>
            <strong> Get Excited! </strong>
            <p className="text-muted my-3">Fun stuff is headed your way.</p>
            <Progress type={MyData.status}/>
            <p className="my-3"><strong>Items shipped: {MyData.items.length}</strong></p>
            <Card.Text>USPS Tracking:</Card.Text>
            <p style={{color: 'blue'}} >xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p><strong>Estimated delivery date: 
            <Moment format="MMM DD YYYY">{MyData.shipments.estimatedDeliveryDate}</Moment></strong></p>
            <p className="text-muted">
            <strong>Address:</strong> 
            {shipingAddress.street} {shipingAddress.city} 
            {shipingAddress.state} {shipingAddress.zip}
            </p>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ViewDetails
