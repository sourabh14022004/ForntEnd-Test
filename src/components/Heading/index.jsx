import React from "react";
const sizes = {
    textmd: "text-[20px] font-medium lg:text-[17px]",
    textlg: "text-[26px] font-medium lg:text-[22px) md:text-[24px] sm:text-[22px]" ,
    textxl: "text-[34px] font-medium lg:text-[28px] md:text-[32px] sm:text-[30px]",
    headingxs: "text-[16px] font-semibold lg:text-[13px]",
    headings: "text-[20px] font-bold lg:text-[17px]",
    headingmd: "text-[26px] font-semibold lg:text-[22px] md:text-[24px] sm:text-[22px]",
    headinglg: "text-[48px] font-semibold lg:text-[40px] md:text-[44px] sm:text-[38px]",
    headingxl: "text-[155px] font-bold lg: text-[155px] md:text-[48px]",
};
const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
    const Component = as || "h6";
    return (
        <Component className={' text-white-a700 font-jost ${className} ${sizes[sizel}'} {...restProps}>
            {children}
        </Component>
    );
};
export { Heading };