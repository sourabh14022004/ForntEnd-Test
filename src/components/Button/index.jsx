import React from "react";
import PropTypes from "prop-types";
const shapes = { round: "rounded-tr-[18px] rounded-br-[18px]",

};
const variants = {
    fill: {
    teal_900: "bg-teal-900 text-white-a700" , indigo_900: "bg-indigo-900 text-white-a700",
    },
};
const sizes = {
    sm: "h-[56px] px-[34px] text-[16px]",
    xs: "h-[36px] px-7 text-[16px]",
};
const Button = ({
    children,
    className = "",
    leftIcon, 
    rightIcon, 
    shape,
    variant = "fill",
    size = "xs",
    color = "indigo_900",
    ...restProps
    }) => {
        return ( 
        <button
            className={`${className} flex flex-row items-center justify-center sm:px-4 text-center cursor-pointer whitespace-nowrap text-white-a700 uppercase text-[16px] Lg:text-[13px] ${shape && shapes [shapel]} ${size && sizes[sizel]} ${variant && variants[variant]?.[color]}`}
            {... restProps}
        >
        {!!filleftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
        </button>
        );
    }
Button.propTypes = {
    className: PropTypes.string, 
    children: PropTypes. node, 
    leftIcon: PropTypes.node, 
    rightIcon: PropTypes.node, 
    shape: PropTypes.one0f( ["round"]),
    size: PropTypes.one0f (["'sm", "xs"]),
    variant: PropTypes.one0f (["fill"]),
    color: PropTypes. oneof ( ["teal_900","indigo_900"]),
    };
export { Button };