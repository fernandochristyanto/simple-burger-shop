import React from 'react'

import classes from '../Cart.module.css';
import { Card, CardBody } from '../../../../../components/card';
import Button from '../../../../../components/button/Button';

declare interface ICheckoutPanelProps {
  shoppingCart?: any[]
  totalPrice?: number
}

const CheckoutPanel = (props: ICheckoutPanelProps) => {
  return (
    <div className={classes.CheckoutPanel}>
      <div className={classes.SidePanel}>
        <div className={classes.OrderSummary}>
          <Card borderless>
            <CardBody>
              Order Summary
                <div>
                {props.shoppingCart?.map((item, index) => (
                  <div className={classes.OrderSummaryItem} key={index}>
                    <div>${item.burger.price} x {item.quantity}</div>
                    <div>${item.itemPrice}</div>
                  </div>
                ))}
                <div className={classes.OrderSummaryItem}>
                  <div>${props.totalPrice}</div>
                </div>
                <Button variant="primary" width="100%">
                  Checkout ({props.shoppingCart?.reduce((quantity, item) => quantity + item.quantity, 0)})
                  </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPanel;
