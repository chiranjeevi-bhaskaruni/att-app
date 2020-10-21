import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import classes from "./OrderDetails.module.css";
import Progress from "./Progress/Progress";

const OrderDetails = ({ name, color, size, skuId, plan, toDate, fromDate, status }) => {
  return (
    <Card className={classes.Card}>
      <div className="mb-4">
        <Card.Img
          variant="top"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036826/100px180"
          style={{ width: "16rem" }}
        />
      </div>
      <div className={classes.Details}>
        <Progress type={status} />
        <div>
        <Card.Body className={classes.CardBody}>
          <Card.Title>{name}</Card.Title>

          <Card.Text className={classes.TextMuted}>
            {color} {size}
          </Card.Text>
          <Card.Text className={classes.TextMuted}>{skuId}</Card.Text>
          <Card.Text className={classes.TextMuted}>{plan}</Card.Text>
          <Card.Text className={classes.TextMuted}>
            Expected to ship:
            <Moment format="MMM DD">{toDate}</Moment> -
            <Moment format="MMM DD YYYY">{fromDate}</Moment>
          </Card.Text>
        </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default OrderDetails;
