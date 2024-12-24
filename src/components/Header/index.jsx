import { Img } from "./.."; 
import React from "react";

export default function Header ({ ... props }) {
return (
    <header {...props} className={`${props.className} self-stretch ml-4 mr-[62px] md:mx-0 bg-white-a700` }>
        <div className="flex w-full flex-col items-center">
            <div className="relative z-[1] flex justify-center self-stretch bg-white-a700 px-14 md:px-5 sm:px-4">
                <div className="container-xs mt-2.5 flex pl-[78px] pr-14 1g:pl-8 md:px-5 sm: px-4">
                    <Img src="img_image.png" width={312} height={60} alt="Image" className="h-[60px] w-[22%] object-contain" />
                </div>
            </div>
            <div className="container-xs relative mt-[-60px] flex self-stretch pl-[78px] pr-14 lg:px-5 md:px-5">
                <Img src="img_image.png" width={312} height={60} alt="Image" className="h-[60px] w-[22%] object-contain" />
            </div>
        </div>
    </header>
);
}