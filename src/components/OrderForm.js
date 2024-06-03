import React from "react";
import './Order.css';
function OrderForm() {
    return (
        <div className="form-container">
            <h2>Order TechWave VR</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                     <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" />
                </div>
                <div className="form-group">
                     <input type="submit" value="Submit" />
                    </div>
                 </form>
        </div>
    )
}

export default OrderForm;