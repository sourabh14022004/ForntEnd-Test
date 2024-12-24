import { Heading, Img } from "•/..";
import React from "react";

export default function ProductInfoCard1({
    productImage = "img_bn2_3_jpg.png",
    productTitle = "Magnesium",
    productDescription = "&lt;&gt;Boost energy and support &lt;br /&gt;muscle function&lt;/&gt;",
    seeMoreText
    = "see more",
    arrowicon = "0",
    ...props
})  {
return (
    <div
    {... props}
    className={`${props. className} h-[266px] w-[32%] lg:h-auto md:w-full md:h-auto relative rounded- [14px]`}
    >
    < Img
    src={productImage}
    width={410}
    height={266}
    alt=" Image"
    className="h-[266px] w-full flex-1 rounded- [14px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[88px]">
    <div className="mt-3 flex flex-col items-start gap-0.5">
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
    { seeMoreText}
    </Heading>
    </div>
    <Heading
    as="h5"
    className="ml-1 font-inter text-[20px] font-black uppercase tracking-[0.08px] text-indigo-900"
    >
    { arrowicon  }
    </Heading>
    </div>
    </ div>
    </div>
);
}