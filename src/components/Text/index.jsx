import React from "react";
const sizes = {
textxs: "text-[14px] font-normal",
texts: "text-[16px] font-normal lg: text-[13px]",
};
const Text = ({ children, className = "", as, size = "texts" , ...restProps }) => {
const Component = as || "p";
return (
    <Component className={`text-blue_gray-100 font-jost ${className} ${sizes[size]} `} {... restProps}>
    {children}
    </Component>
);
}
export { Text };