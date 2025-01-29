import { useState } from "react";
import "./support.css";

export default function Support() {
  const [selected, setSelected] = useState({ title: "", content: "" });

  const handleContentChange = (title, content) => {
    setSelected({ title, content });
  };

  const data = {
    "Can't Log in": "Make sure you’re using the correct email and password. If you’ve forgotten your password, reset it here. Still having trouble? Contact support for assistance.",
    "Payment issues": "Check if your payment method is up to date and has sufficient funds. For declined transactions, contact your bank or view our payment troubleshooting guide.",
    "Account Locked": "Your account may be locked for security reasons. Reset your password or contact support to regain access.",
    "Slow Website Performance": "Clear your browser cache or app data. Make sure you’re using the latest version of the app or browser. If the issue persists, check our system status page for updates.",
    "Subscription Not Working": "Ensure your subscription is active and payment is successful. You can check this under your account settings. If everything looks fine, reach out to us.",
    "Missing Orders or Deliveries": "Double-check your order details and tracking number. If your order is delayed or missing, contact the delivery provider or report an issue.",
    "Unable to Install Software/App": "Ensure your device meets the minimum system requirements. Restart your device and try again. If the problem persists, refer to our installation guide.",
    "Refund Request Issues": "Make sure your purchase is eligible for a refund based on our policy. You can submit a refund request here.",
    "Forgot Username or Email": "Try all email addresses you might have used. If you're still unsure, contact support, and we’ll help recover your account.",
    "App Crashing or Freezing": "Restart the app and update it to the latest version. Clear the app cache or reinstall if needed. For further troubleshooting, check this guide.",
    "Error Messages": "Note down the error code or message. Check our error message troubleshooting page for a list of fixes.",
    "Can't Cancel Subscription": "Visit your account settings to manage subscriptions. If you’re unable to cancel, contact us before your next billing date.",
    "Two-Factor Authentication Issues": "Ensure you have access to your authentication app or backup codes. If you're locked out, reset 2FA settings or contact support.",
    "Email Not Received": "Check your spam or junk folder. Make sure your email address is correct and that your mailbox isn’t full. Request a resend if needed.",
    "Account Hacked": "Reset your password immediately and enable two-factor authentication. Review recent activity in your account and report suspicious behavior to our security team.",
  };

  return (
    <div className="support">
      <div className="sideBar">
        <ul className="elements">
          {Object.keys(data).map((key) => (
            <li key={key}>
              <a
                href="#"
                onClick={() => handleContentChange(key, data[key])}
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="main">
        <h1>{selected.title || "Welcome to Support"}</h1>
        <p>{selected.content || "Select a topic from the sidebar to see more details."}</p>
      </div>
    </div>
  );
}
