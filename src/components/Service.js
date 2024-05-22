import { BsShieldCheck } from "react-icons/bs"
import { FiGift } from "react-icons/fi"
import { RiCustomerService2Fill } from "react-icons/ri"
import { TfiShoppingCartFull } from "react-icons/tfi"

const data = [
    {
        title: "FAST AND FREE DELIVERY",
        id: 1,
        icon: <TfiShoppingCartFull />,
        desc: "Free delivery for all orders over $140",
    },
    {
        title: "24/7 CUSTOMER SUPPORT",
        id: 2,

        icon: <RiCustomerService2Fill />,
        desc: "Friendly 24/7 customer support",
    },
    {
        title: "MONEY BACK GUARANTEE",
        id: 3,

        icon: <BsShieldCheck />,
        desc: "Be return money within 30 days",
    },
    {
        title: "MEMBERS GIFTS",
        id: 4,

        icon: <FiGift />,
        desc: "Discounts coupons weekends",
    },
]

const Service = () => {
    return (
        <div className='bg-[#f7f5ee]'>
            <div className="container  grid gap-8  md:grid-cols-2 xl:grid-cols-4 py-10">
                {
                    data.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="text-[40px] text-primary">{item.icon}</div>
                            <div>
                                <h2 className=" text-lg font-semibold">{item.title}</h2>
                                <p className=" text-sm sm:text-[16px] text-gray-600">{item.desc}</p>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Service
