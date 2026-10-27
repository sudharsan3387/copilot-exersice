const express = require("express");
const app = express();

const orders = [
  { id: 1, customerId: 101, total: 250, status: "Pending" },
  { id: 2, customerId: 101, total: 500, status: "Shipped" },
  { id: 3, customerId: 202, total: 120, status: "Delivered" },
  { id: 4, customerId: 101, total: 340, status: "Completed" }
];

app.get("/orders/customer/:customerId", (req, res) => {
  const { customerId } = req.params;

  const customerOrders = orders.filter(
    (order) => String(order.customerId) === String(customerId)
  );

  if (!customerOrders.length) {
    return res.status(404).json({
      message: "No orders found for this customerId",
      customerId
    });
  }

  return res.status(200).json({
    customerId,
    orders: customerOrders
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
