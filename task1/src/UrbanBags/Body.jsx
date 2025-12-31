import { Card } from "./Card";
import { Heading } from "./Heading";

export function Body() {
  let totalProduct = 8;
  let products = [
    "bag1",
    "bag2",
    "bag3",
    "bag4",
    "bag5",
    "bag6",
    "bag7",
    "bag8",
    "bag9",
    "bag10"
  ];
  return (
    <div className="Body">
      <Heading />

      <h1>Product count is {products.length}</h1>
      <h1>
        Product count is {totalProduct > 9 ? "hight quantity" : "low quantity"}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((e,i) => {
          return <Card key={i} bagName={e}  />;
        })}
        {/* 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}



