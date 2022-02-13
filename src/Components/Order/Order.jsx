import React from "react";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className=" p-[40px] my-[20px] border-2 border-solid border-gray-500 bg-white relative">
      <h2>Order</h2>
      <p>{moment.unix(order.reducer.created).format("MMMM DD YYYY, h:mma")}</p>
      <p className="order-id absolute top-[40px] right-[20px]">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={value => (
          <>
            <h3 className="order-total font-[500] text-center">
              Order Total: {value}
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
    </div>
  );
};

export default Order;
