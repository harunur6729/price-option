import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-sky-100 rounded-md p- flex flex-col text-black text-center">
      <h2>
        <span className="text-7xl">{price}$</span>
        <span>/month</span>
      </h2>
      <h4 className="text-4xl">{name}</h4>
      <h1 className="text-3xl font-bold underline text-left">Features:</h1>

     
      <div className="text-left flex-grow ml-4 pl-2">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-12 bg-green-500 px-4 py-2 font-bold text-3xl rounded-full hover:bg-green-900">Buy Now</button>
      
    </div>
  );
};

export default PriceOption;
