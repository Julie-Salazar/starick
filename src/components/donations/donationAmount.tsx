import React from "react";
import Image from 'next/image';
import BequestIcon7 from '~/images/donations/bequests/BequestIcon7.png'
import BequestIcon8 from '~/images/donations/bequests/BequestIcon8.png'


interface ItemProps {
    pos: boolean,
    amount: string,
    description: string;
}

const DonationAmount: React.FC<ItemProps> = ({pos, amount, description}) => {
        if (pos) {
            return (
                <div
                    className="grid auto-rows-max p-4 md:p-10 gap-4 md:gap-10 text-[--starick-brown] font-semibold text-xs md:text-xl lg:text-2xl">
                    <div className="grid grid-cols-2 place-items-center">
                        <div className="relative max-w-[60%] min-w-[160px]">
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/2 sm:text-xs md:text-xl lg:text-2xl xl:text-4xl text-[--starick-white] font-bold">
                                {amount}</p>
                            <Image src={BequestIcon7} alt='description'
                                   width="0"
                                   height="0"
                                   sizes="100vw"
                                   className="w-full h-auto min-w-[160px]"/>
                        </div>
                        <p className="m-10">
                            {description}
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="grid grid-cols-2 place-items-center">
                    <p className="m-10">
                        {description}
                    </p>
                    <div className="relative max-w-[60%] min-w-[160px]">
                        <p className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 sm:text-xs md:text-xl lg:text-2xl xl:text-4xl text-[--starick-white] font-bold">
                            {amount}</p>
                        <Image src={BequestIcon8} alt='description'
                               width="0"
                               height="0"
                               sizes="100vw"
                               className="w-full h-auto min-w-[160px]"/>
                    </div>
                </div>
            );
        }
    }
;
export default DonationAmount;