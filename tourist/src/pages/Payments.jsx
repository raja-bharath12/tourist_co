import { useLocation } from "react-router-dom";

function Payment() {
  const query = new URLSearchParams(useLocation().search);
  const place = query.get("place");
  const amount = query.get("amount");

  return (
    <div className="page">
      <h1>Payment Page</h1>
      <p>Destination: {place}</p>
      <p>Amount: ₹{amount}</p>
    </div>
  );
}

export default Payment;
