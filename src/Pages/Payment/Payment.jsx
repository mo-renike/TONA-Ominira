import React from "react";
import { SubHeading } from "../../Components/Typography/Typography";
import "./Payment.scss";
const Payment = () => {
    return (
        <div className="payment">
            <div className="payment__img">

            </div>
            <div className="payment__text">
                <SubHeading title="To proceed with your consultation process, click here for payment." />
                <div className="payment__text_btns">
                    <a href="https://paystack.com/pay/tonabridals">Bridals</a> <br />
                    <a href="https://paystack.com/pay/tonaoccasion">Non Bridals</a>
                </div>
            </div>
        </div>
    );
};

export default Payment;
