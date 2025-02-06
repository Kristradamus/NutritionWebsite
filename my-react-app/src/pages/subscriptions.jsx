import { useState } from 'react'
import "./subscriptions.css"

const newBenefits = {
  "Access to Basic Nutrition Guides": "Simple, easy-to-follow meal plans and basic nutritional tips.",
  "Weekly Tips": "Email with basic nutritional advice to improve general health and wellness.",
  "Basic Recipies": "Access to a selection of healthy recipes to get started on your nutrition journey.",
  "Limited Access to Communities": "Access to the community page and different servers, but with limited features.",
  "1 Free Consultation (15 minutes)": "A one-time introductory consultation to understand your needs."
};
const midBenefits = {
  "Personalized Meal Plans":"Tailored meal plans to fit your goals.",
  "Weekly Check-ins":"Regular check-ins to track progress, and small adjustments to meal plans as needed.",
  "Exclusive Recipes & Meal Prep Tips":"Access to an expanded library of recipes and meal prep guides.",
  "Access to Challenges/Programs":"Participate in monthly nutrition challenges or follow along with specialized programs.",
  "Access to Expert Webinars":"Monthly webinars or live sessions on advanced nutrition topics.",
  "Discount on Supplements/Products":"Exclusive discounts on health-related products like supplements, equipment and more.",
}
const proBenefits = {
  "Fully Customized Nutrition Plans":"Detailed, completely personalized plans tailored to your specific needs by professionals.",
  "1-on-1 Coaching (Weekly)":"Personalized, direct coaching with a certified nutritionist or health coach to optimize your diet and goals.",
  "Advanced Meal Tracking Tools":"Access to advanced tracking tools and apps to log meals, monitor nutrients, and make data-driven adjustments.",
  "Priority Support":"VIP customer service with priority responses to all your queries and concerns.",
  "Exclusive Pro Content":"Access to exclusive articles, videos, and courses about advanced nutrition strategies.",
  "Private 1-on-1 Consultations (Monthly)":"Regular in-depth consultations to ensure you're on the right track with your nutrition plan.",
  "Complete Access to the Community:":"VIP membership in a specialized community or forum for high-level discussions, Q&A, and support from other pros.",
  "Additional Discounts":"Higher discounts on products or services like consultations, supplements and more.",
  "Bonus: Personalized Fitness Plan":"Access to a fitness plan in addition to nutrition, creating a holistic approach to your goals.",
}
export default function Subscriptions() {
  return (
    <div className="subscriptions">
      <div className="subMonthYear">
        
      </div>
      <div className="subCategories">
{/*----------------------------------NEW------------------------------------*/}
      <div className="subNew">
        <div className="subNewTop">
        <h1>New</h1>
        <div className="subPrice">
        <h1>5.99$</h1>
        <div className="subSidePrice">
        <h5 className="subUser">per user</h5>
        <h5 className="subTime">per month</h5>
        </div>
        </div>
        <div className="subButtons">
          <button className="subNewTryFree">Try Free</button>
          <button className="subNewBuyNow">Buy Now <i class="fa-solid fa-location-arrow"></i></button>
        </div>
        </div>
        <div className="subNewBottom">
          <ul className="subNewUl">
            {Object.entries(newBenefits).map(([benefit, description], index) => (
              <li key = {index}>
                <i class="fa-solid fa-check"></i><strong>{benefit}:</strong>{description}
              </li>
            ))}
          </ul>
        </div>
      </div>
{/*----------------------------------MID------------------------------------*/}
      <div className="subMid">
        <div className="subMidTop">
        <h1>Intermediate</h1>  
        <div className="subPrice">
        <h1>15.99$</h1>
        <div className="subSidePrice">
        <h5 className="subUser">per user</h5>
        <h5 className="subTime">per month</h5>
        </div>
        </div>
        <div className="subButtons">
          <button className="subMidTryFree">Try Free</button>
          <button className="subMidBuyNow">Buy Now <i class="fa-solid fa-location-arrow"></i></button>
        </div>
        </div>
        <div className="subMidBottom">
          <ul className="subMidUl">
            {Object.entries(midBenefits).map(([benefit, description], index) => (
              <li key={index}>
                <i class="fa-solid fa-check"></i><strong>{benefit}:</strong>{description}
              </li>
            ))}
          </ul>
        </div>
      </div>
{/*----------------------------------PRO------------------------------------*/}
      <div className="subPro">
        <div className="subProTop">
        <h1>Profesional</h1>
        <div className="subPrice">
        <h1>25.99$</h1>
        <div className="subSidePrice">
        <h5 className="subUser">per user</h5>
        <h5 className="subTime">per month</h5>
        </div>
        </div>
        <div className="subButtons">
          <button className="subProTryFree">Try Free</button>
          <button className="subProBuyNow">Buy Now <i class="fa-solid fa-location-arrow"></i></button>
        </div>
        </div>
        <div className="subProBottom">
          <ul className="subProUl">
            {Object.entries(proBenefits).map(([benefit, description], index) => (
              <li key = {index}>
                 <i class="fa-solid fa-check"></i><strong>{benefit}:</strong>{description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
