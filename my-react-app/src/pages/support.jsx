import { useState, useRef, useEffect } from "react";
import "./support.css";

export default function Support() {
  const [selected, setSelected] = useState({ title: "", content: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);

{/*--------------------------------------ISSUES--------------------------------------*/}
  const data = {
    Account: [
      {issue: "Can't Log in",solution: "If you're unable to log in, double-check that you're entering the correct email address and password. Make sure that Caps Lock is not on, and try resetting your password if needed. If you're still having issues, clear your browser’s cache and cookies, and try logging in again. For further assistance, contact customer support and we’ll help you regain access to your account."},
      {issue: "Forgot Username or Email",solution: "If you've forgotten your username or email address, try checking your previous email accounts for any registration emails. If you're still unsure, contact our support team and provide any possible details you remember. We can help recover your account and assist in retrieving your username or email."},
      {issue: "Account Locked",solution: "If your account is locked, it may be due to suspicious activity or security concerns. To regain access, try resetting your password. If you're unable to unlock your account, reach out to customer support for assistance. They will help you verify your identity and secure your account as soon as possible."}
    ],
    Billing: [
      {issue: "Payment issues",solution: "If you're encountering payment issues, first ensure that your payment details are up-to-date and that your payment method has sufficient funds. Check if there are any issues with your bank or payment provider. If a payment is declined, contact your bank to resolve the issue. Additionally, you can visit our payment troubleshooting guide for step-by-step instructions on how to fix common payment problems."},
      {issue: "Subscription Not Working",solution: "If your subscription is not working, ensure that your subscription is active and that your payment has been successfully processed. You can verify the status of your subscription in your account settings. If everything appears correct but the issue continues, please reach out to our support team for further assistance."},
      {issue: "Refund Request Issues",solution: "If you're having trouble submitting a refund request, make sure that your purchase is eligible according to our refund policy. You can review the conditions under which refunds are granted on our website. If you're still uncertain or need further help, reach out to our support team and they’ll guide you through the refund process."}
    ],
    Technical: [
      {issue: "Slow Website Performance",solution: "If you're experiencing slow website performance, try clearing your browser's cache and app data. Make sure you're using the latest version of your browser or app, as outdated versions can affect performance. If the issue persists, check our system status page to see if there are any ongoing issues affecting website speed."},
      {issue: "Unable to Install Software/App",solution: "If you're unable to install our software or app, ensure that your device meets the minimum system requirements. Restart your device and try again, as some issues may be resolved by a simple reboot. If installation fails, consult our installation guide for additional troubleshooting tips or contact support for further assistance."},
      {issue: "App Crashing or Freezing",solution: "If the app is crashing or freezing, try restarting your app and ensure you have the latest version installed. Sometimes clearing the app’s cache or reinstalling it can fix persistent issues. If the problem continues, refer to our troubleshooting guide or contact support for more advanced troubleshooting options."},
      {issue: "Error Messages",solution: "If you encounter an error message, note down the error code and message displayed. Check our error message troubleshooting page for a list of common errors and their solutions. If you're unable to resolve the issue using the guide, contact support and provide the error details so we can assist you more efficiently."}
    ],
    Security: [
      {issue: "Two-Factor Authentication Issues",solution: "If you're experiencing issues with two-factor authentication (2FA), ensure that you have access to the authentication app or backup codes. If you've lost access to the authentication method, you may need to reset your 2FA settings. If you’re unable to do this on your own, contact customer support, and we'll assist you in recovering access to your account."},
      {issue: "Account Hacked",solution: "If you suspect that your account has been hacked, reset your password immediately to secure your account. Enable two-factor authentication (2FA) for extra protection. Review any recent account activity for signs of unauthorized access, and report suspicious behavior to our security team. We will investigate and help you regain control of your account."}
    ],
    Orders: [
      {issue: "Missing Orders or Deliveries",solution: "In case your order is missing or delayed, first confirm the details of your order, including the tracking number. Check with the delivery provider for updates. If the delivery is significantly delayed or missing, report the issue to our customer support team and they will assist in resolving the matter with the provider."}
    ],
    Email: [
      {issue: "Email Not Received",solution: "If you're not receiving your emails, check your spam or junk folder, as the email may have been filtered incorrectly. Verify that your email address is correct and that your mailbox isn't full. If you still haven't received the email, try requesting a resend. If the issue persists, contact support and we'll investigate further."}
    ],
    Subscriptions: [
      {issue: "Can't Cancel Subscription",solution: "If you're having trouble canceling your subscription, first make sure you're signed into the correct account. Go to your account settings and find the subscription management section. If you’re still unable to cancel, contact our support team as soon as possible to prevent further charges, especially before your next billing cycle."}
    ]
  };

{/*--------------------------------------FILTERING--------------------------------------*/}
  const filteredData = Object.keys(data).reduce((info, category) => {
    const filteredTopics = data[category].filter((item) =>
      item.issue.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredTopics.length > 0) {
      info[category] = filteredTopics;
    }
    return info;
  }, {});

  const handleContentChange = (issue, solution) => {
    setSelected({ title: issue, content: solution });
    setShowContactForm(false);
  };

  const handleBack = () => {
    setSelected({ title: "", content: "" });
    setShowContactForm(false);
  };
{/*--------------------------------------SEARCH-BAR-JS--------------------------------------*/}
const handleInputChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    searchInputRef.current?.blur();
  }
};

const handleClearSearch = () => {
  setSearchQuery("");
  searchInputRef.current?.focus();
};

useEffect(() => {
  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setIsSearchFocused(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

return (
  <div className="support">
    <div className={`supportSearchBox ${isSearchFocused ? "clicked" : ""}`} onClick={() => setIsSearchFocused(true)} ref={searchBoxRef}>
      <input ref={searchInputRef} className="supportSearchBar" placeholder="Search for solution..." value={searchQuery} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => setIsSearchFocused(true)}/>
      {searchQuery && (<i className="fa-solid fa-x" onClick={handleClearSearch}/>)}
    </div>
{/*--------------------------------------SIDE-BAR-HTML--------------------------------------*/}
    <div className="supportContent">
      <div className="supportSideBar">
      {Object.keys(filteredData).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul className="supportSideElements">
            {filteredData[category].map((item, index) => (
            <li className="supportSideElement" key={index}>
              <a href="#" onClick={() => handleContentChange(item.issue, item.solution)}>
                {item.issue}
              </a>
            </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
{/*--------------------------------------MAIN-HTML--------------------------------------*/}
        <div className="supportMain">
          {selected.title && (
            <button className="backButton" onClick={handleBack}>
              Back to Support
            </button>
          )}
          <h1>{selected.title || "Welcome to Support"}</h1>
          <p>{selected.content || "Select a topic from the sidebar to see more details."}</p>

          {!selected.title && (
            <button className="contactButton" onClick={() => setShowContactForm(true)}>
              Contact Support
            </button>
          )}
          {showContactForm && (
            <div className="contactForm">
              <h2>Contact Support</h2>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}