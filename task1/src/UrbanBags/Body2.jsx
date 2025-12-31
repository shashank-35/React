import { Card } from "./Card";
import { Heading } from "./Heading";


import DATA from "../constant/data.json"
export function Body2() {
  // console.log("🚀 ~ DATA:", DATA)
  return (
    <div className="Body">
      <Heading />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "100px",
          marginTop: "20px",
        }}
      >
        {
          DATA.map((e,i) => {
            return <Card key={i} bagName={e} />
          })
        }

        {/* <Card />
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
