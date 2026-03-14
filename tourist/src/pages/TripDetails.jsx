import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaUniversity, FaQrcode, FaCheckCircle } from "react-icons/fa";

function TripDetails() {
  const [params] = useSearchParams();
  const destination = params.get("destination");
  const days = params.get("days");
  const persons = params.get("persons");
  const price = params.get("price");

  const [method, setMethod] = useState("upi");
  const [bank, setBank] = useState("");
  const [paid, setPaid] = useState(false);

  if (!destination || !days || !price) {
    return <h2 className="center">Trip details not available</h2>;
  }

  const handlePayment = () => {
    if (method === "netbanking" && !bank) {
      alert("Please select a bank");
      return;
    }
    setPaid(true);
  };

  return (
    <div className="payment-page">
      {!paid ? (
        <div className="payment-card animate-pop">

          {/* HEADER */}
          <h1 className="pay-title">💳 Complete Your Payment</h1>
          <h2 className="pay-sub">
            ✨ {destination} Travel Package {persons ? `for ${persons} Person${persons > 1 ? "s" : ""}` : ""}
          </h2>
          <p className="pay-info">{days} Days Trip</p>

          <h3 className="amount">Total Amount: ₹{Number(price).toLocaleString()}</h3>

          {/* PAYMENT METHOD SWITCH */}
          <div className="payment-tabs">
            <button
              className={method === "upi" ? "active" : ""}
              onClick={() => setMethod("upi")}
            >
              <FaQrcode /> UPI
            </button>

            <button
              className={method === "netbanking" ? "active" : ""}
              onClick={() => setMethod("netbanking")}
            >
              <FaUniversity /> Net Banking
            </button>
          </div>

          {/* PAYMENT CONTENT */}
          {method === "upi" && (
            <div className="upi-box fade-in">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=touristco@upi"
                alt="UPI QR"
              />
              <p>Scan with any UPI app</p>
            </div>
          )}

          {method === "netbanking" && (
            <div className="bank-box fade-in">
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                <option value="">Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
                <option>Canara Bank</option>
              </select>
            </div>
          )}

          {/* PAY BUTTON */}
          <button className="pay-btn" onClick={handlePayment}>
            Pay ₹{Number(price).toLocaleString()}
          </button>
        </div>
      ) : (
        /* SUCCESS */
        <div className="success-box animate-pop">
          <FaCheckCircle className="success-icon" />
          <h2>Payment Successful 🎉</h2>
          <p>Your trip to <strong>{destination}</strong> is confirmed!</p>
          <p>Have a wonderful journey 🌍✈</p>
        </div>
      )}
    </div>
  );
}

export default TripDetails;
