import { useState } from 'react';
import "./productPage.css"

export default function ProductPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  return (
    <div className="productPage">
      <h1>Search Results for: {query}</h1>
    </div>
  );
};