import { Text, Heading, Img } from "*/..";
import React from "react";

export default function VitaminInfoRow({
    vitaminTitle = "Vitamins",
    vitaminDescription = "&lt;&gt; Increased Vitamins and&lt;br /&gt;minerals in your diet&lt;/&gt;",
    ...props
}) {
return (
<div {... props} className={`${props.className} flex items-center self-stretch flex-1 `}>
<div className="flex w-full items-center gap-5">
< Img
src="img_frame_8363_png-png"
width={74}
height={74}
alt="Vitaminimage"
className="h-[74px] w-[26%] object-contain"
/>
<div className="flex flex-1 flex-col items-start gap-1">
<Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-teal-900">
{vitaminTitle}
</Heading>
<Text size="textxs" as="p" className="font-roboto text-[14px] font-normal leading-5 text-gray-600">
{vitaminDescription}
</Text>
</div>
</div>
</div>
);
}   