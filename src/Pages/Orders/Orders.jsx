import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import Order from "../../Components/Order/Order";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector(state => state.reducer);
  const { orders, setOrders } = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders py-[20px] px-[80px]">
      <h1 className=" mx-[30px] my-[0]">Your Orders</h1>
      <div className="orders-order">
        {orders &&
          orders.map((order, index) => <Order order={order} key={index} />)}
      </div>
    </div>
  );
};

export default Orders;
