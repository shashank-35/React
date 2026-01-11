export function Cart(props) {
  console.log("🚀 ~ Card ~ props:", props);
  const product = props.name || {};
  return (
    <div className="Card">
      <div className="cardBody">
        <div className="cardImg">
          <img src={product.image} alt="bag img" />
        </div>
        <div className="cardText">Title:{product.title}</div>
        <div className="cardText">category:{product.category}</div>

        <div className="cardPrice">Price:{product.price}</div>

        {/* <div>description:{product.description}</div> */}
        <div>
            rating :{product.rating?.rate}
        </div>
      </div>
    </div>
  );
}
