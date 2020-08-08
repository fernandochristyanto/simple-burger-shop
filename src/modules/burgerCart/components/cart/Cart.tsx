import React from 'react'

import classes from './Cart.module.css';
import { Card, CardBody } from '../../../../components/card';
import Burger from '../../../../components/burger/Burger';

const Cart = () => {
  return (
    <div className={classes.CartWrapper}>
      <div className={classes.Cart}>
        <Card>
          <CardBody>
            <div style={{ display: 'flex' }}> {/* CART BODY */}
              <div style={{ height: '100%', width: '100px' }}>
                <Burger
                  ingredients="CSM"
                  width="100px"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div>Cheese</div>
                  <div>Cheese</div>
                  <div>Cheese</div>
                  <div>Cheese</div>
                </div>
                <div>
                  <div>$12.70</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex' }}> {/* CART FOOTER */}
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.CheckoutPanel}>
        <Card>
          <CardBody>
            Ini CheckoutPanel
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart;
