export const calculateProfite = (order) => {
  if (order.orderItem?.buyPrice && order.orderItem?.sellPrice) {
    return order.orderItem?.sellPrice - order.orderItem?.buyPrice;
  }
  return "-";
};
