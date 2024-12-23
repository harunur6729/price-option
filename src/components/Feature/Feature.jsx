import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Feature = ({feature}) => {
    return (
        <div className="flex items-center">
            <IoCheckmarkCircleSharp className="text-2xl text-green-500"/>
           <p className="text-2xl">{feature}</p>
        </div>
    );
};

export default Feature;