import { Heading, Img } from "./..";
import React from "react";


export default function ProductInfoCard({
    productImage = "img_h2_b1_jpg.png",
    productTitle = "Vitamin C",
    productDescription = "Vitamin C as ascorbic acid",
    seeMoreText = "see more",
    arrowIcon = "0",
    ...Headingprops
}) {
return (
    <div
        {... props}
        className={`${props.className} h-[266px] w-[50%] lg:h-auto md:w-full md:h-auto relative rounded-[14px]`}
    >
        <Img
            src={productImage}
            width={410}
            height={266}
            alt="Image"
            className="h-[266px] w-full flex-1 rounded-[14px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-5 mr-auto flex h-max flex-1 flex-col gap-[86px] p-4">
        <div className="mt-2 flex flex-col items-start gap-0.5">
        <Heading size="headingmd" as="h4" className="text-[26px] font-semibold tracking-[0.08px] text-blue_gray-800">
        {productTitle}
        </Heading>
        <Heading size="textmd" as="p" className="text-[20px] font-medium tracking-[0.08px] text-gray-600">
        {productDescription}
        </Heading>
        </div>
        <div className="flex items-center py-3.5">
        <div className="flex border-b border-solid border-indigo-900">
        <Heading
        size="headingxs"
        as="h6"
        className="text-[16px] font-semibold uppercase tracking-[0.08px] text-indigo-900"
        >
        {seeMoreText}
        </Heading>
        </div>
        <Heading
        as="h5"
        className="ml-1 font-inter text-[20px] font-black uppercase tracking-[0.08px] text-indigo-900"
        >
        {arrowIcon}
        </Heading>
        </div>
        </div>
    </div>
);
}