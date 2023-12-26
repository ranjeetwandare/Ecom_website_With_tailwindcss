import { LiaShippingFastSolid,LiaMoneyBillWaveSolid,LiaGiftSolid,} from "react-icons/lia" ;

import{ BiSolidPhoneCall } from "react-icons/bi";
import FeatureCard from "./FeatureCard"


const data =[
    {title: "Free Shipping",
    icon: <LiaShippingFastSolid/>
    },
    {title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid/>
},
{   
    title:"Free Curbside Pickup",
    icon:<LiaGiftSolid/>,  
},
{
    title:"24/7 Customer Support",
    icon:<BiSolidPhoneCall/>
},
];

const FeutureSection = () => {
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map(el => <FeatureCard key={el.title} title={el.title} icon={el.icon}/>)}
        </div>
    </div>
  )
}

export default FeutureSection