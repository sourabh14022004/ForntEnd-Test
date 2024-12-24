import { Text, Img, Heading } from "'./..";
import React from "react";
export default function Footer({ ...props }) {
return (
    <footer {...props} className={`${props.className} flex justify-center items-center p-8 sm:p-4 bg-teal-900`}> 
        <div className="mx-auto mb-3.5 flex w-full max-w-[1448px] flex-col gap-[54px] sm:gap-[27px]">
            <div className="flex gap-[54px] md:flex-col">
                <div className="flex w-[32%] items-start gap-[45px] rounded-[14px] bg-cyan-900 px-[50px] py-4 md:w-full md:px-5 sm:px-4">
                    < Img
                        src="img_settings.svg"
                        width={60}
                        height={60} alt="Phonenumberimag"
                        className="h-[60px] w-[20%] object-contain"
                    />
                    <div className="flex flex-col items-start self-center">
                        <Heading
                            size="textmd"
                            as="p"
                            className="text-[20px] font-normal tracking-[0.08px] text-white-a700 lg:text-[17px]">
                            Phone Number
                        </Heading>
                        <Heading size="textmd"
                            as="p"
                            className="text-[20px] font-medium tracking-[0.08px] text-white-a700 lg:text-[17px]">
                            +974 31181843
                        </Heading>
                    </div>
                </ div>
                <div className="flex w-[32%] items-start justify-between gap-5 rounded-[14px] bg-cyan-900 px-[50px] py-4 md:w-full md:px-5 sm:px-4">
                    <Img
                        src="img_lock.svg" width={60} height={60} alt="Lock" className="h-[60px] w-[18%] object-contain" 
                    />
                    <div className="mr-3 flex flex-col items-start self-center lg:mr-0 md:mr-0">
                        <Heading size="textmd"
                            as="p"
                            className="text-[20px] font-normal tracking-[0.08px] text-white-a700 lg:text-[17px]">   
                            Email Address
                        </Heading>
                        <Heading 
                            size="textmd"
                            as="p"
                            className="text-[20px] font-medium tracking-[0.08px] text-white-a700 lg:text-[17px]">       
                            Elbrithcqhr@gmail.com
                        </Heading>
                    </div>
                </div>
                <div className="flex w-[34%] items-start justify-between gap-5 rounded-[14px] bg-cyan-900 px-12 py-4 md:w-full md:px-5 sm:px-4">
                    <Img
                        src="img_linkedin.svg"
                        width={60}
                        height={60} 
                        alt="Linkedin"
                        className="h-[60px] w-[16%] object-contain"
                    />
                    <div className="flex flex-col items-start self-center">
                        <Heading
                            size="textmd"
                            as="p"
                            className="text-[20px] font-normal tracking-[0.08px] text-white-a700 lg:text-[17px]"
                        >
                        Office Location
                        </Heading>
                        <Heading
                            size="textmd"
                            as="p"
                            className="ml-1 text-[20px] font-medium tracking-[0.08px] text-white-a700 lg:text-[17px] md:ml-Q"
                        >
                        Ambassador Street, Zone 61,
                        </Heading>
                    </div>
                </div>
            </div>
            <div className="ml-5 flex w-[62%] items-center justify-between gap-5 lg:w-full md:ml-0 md:w-full md: flex-col">
                <Img
                    src="img_footer_logo.png"
                    width={312} height={64} alt="Footerlogo"
                    className="h-[64px] w-[312px] self-end object-contain"
                />
                <Text as="p"
                    className="w-[46%] text-[16px] font-normal leading-[26px] tracking-[0.08px] text-white-a700 lg:w-[46%] lg:text-[13px] md:w-full"
                    >
                    Your health, physical and emotional well-being is important to us. We are always by your side and have made
                    it even easier for you to find the necessary vitamins.
                </Text>
            </div>
            <div className="flex items-center gap-[9px] sm:flex-col">
                <Img
                src="img_linkedin_white_a700.png"
                width={16}
                height={12}
                alt="Linkedin"
                className="h-[12px] self-end object-cover sm:w-full"
                />
                <Text as="p" className="text-[16px] font-normal tracking-[0.08px] text-white-a700 lg:text-[13px]">
                    Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
                </Text>
            </div>
        </div>
    </footer>
    );
}   