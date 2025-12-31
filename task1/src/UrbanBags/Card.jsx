import img from "../assets/FitpackPro_2_90ed9363-024c-42c0-b95e-9e1eca7578a8.webp";
export function Card(props) {
  console.log("🚀 ~ Card ~ props:", props);
  return (
    <div className="Card">
      <div className="cardBody">
        <div className="cardImg">
          <img src={props.bagName.image} alt="bag img" />
        </div>
        <div className="cardText">Title:{props.bagName.title}</div>
        <div className="cardText">category:{props.bagName.category}</div>

        <div className="cardPrice">Price:{props.bagName.price}</div>

        {/* <div>description:{props.bagName.description}</div> */}
        <div>
            rating :{props.bagName.rating.rate}
        </div>
      </div>
    </div>
  );
}
