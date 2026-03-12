function SupportModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>24/7 Customer Support</h2>
        <p>We are always here to help you</p>

        <ul>
          <li>📞 Call: +91 98765 43210</li>
          <li>📧 Email: support@touristco.com</li>
          <li>💬 WhatsApp: +91 98765 43210</li>
        </ul>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default SupportModal
