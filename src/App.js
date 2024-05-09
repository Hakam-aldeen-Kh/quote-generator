import "./App.css";
import React, { useState } from "react";
import Whatsapp from "./components/Whatsapp";
import Twitter from "./components/Twitter";
import Swal from "sweetalert2/dist/sweetalert2.js";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "copied successfully",
      background: "#ffffff",
    });
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <div>
            <Whatsapp
              url={"*" + quote.author + "*" + " once said: " + quote.content}
            />
            <Twitter url={url} title={quote.content}></Twitter>
          </div>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  );
};

export default App;
