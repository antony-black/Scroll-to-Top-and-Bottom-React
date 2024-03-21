import React, { useRef } from "react";
import useFetch from "./components/useFetch";
import Button from "./components/Button";
import List from "./components/List";
import "./index.scss";

export default function App() {
  const { data, pending, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      {pending ? <div>...loading</div> : null}
      {errorMsg ? <div>{errorMsg}</div> : null}
      <h1 className="title">Scroll to Top and Bottom</h1>
      <h3>This is the top</h3>
      <Button onClick={handleToBottom}>Scroll to Bottom</Button>
      {data?.products?.length ? <List data={data} /> : null}
      <h3 ref={bottomRef}>This is the bottom</h3>
      <Button onClick={handleToTop}>Scroll to Top</Button>
    </div>
  );
}
