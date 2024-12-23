import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Open during staffed hours",
            "Free Wi-Fi",
            "1 complimentary fitness assessment (annually)"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "24/7 access",
            "Group fitness classes",
            "Free Wi-Fi",
            "Monthly progress tracking reports",
            "1 guest pass per month",
            "Access to beginner workshops"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "24/7 access",
            "Group fitness classes",
            "Free Wi-Fi",
            "Personal trainer sessions (2 per month)",
            "Access to sauna and pool",
            "Unlimited guest passes",
            "Access to advanced workshops",
            "Complimentary protein shakes (2 per month)",
            "Dedicated locker"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 119.99,
          "features": [
            "All Premium Plan features",
            "Unlimited personal trainer sessions",
            "Dietary consultations",
            "Priority access to new facilities",
            "Exclusive members-only events",
            "Customized workout and nutrition plans",
            "Access to private training areas",
            "Complimentary gym merchandise",
            "Monthly body composition analysis",
            "VIP parking spot"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className="text-5xl">Best prices in the town</h2>
           <div className="m-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;