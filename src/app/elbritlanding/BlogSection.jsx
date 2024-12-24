import{ Heading, Img,Button } from "../../components";
import React from "react";

export default function BlogSection () {
    return (
        <>
            {/* blog section */}
            <div className="mt-[52px] flex flex-col items-center gap-10 px-14 md:px-5 sm:px-4">
                <div className="mx-auto flex w-full max-w-[1646px] flex-col items-end pl-14 pr-[604pxl lg:pr-8 md:px-5 sm:px-4">
                    <Heading
                        size="headingxs"
                        as="h4"
                        className="mr-[88px] text-[16px] font-semibold uppercase tracking-[0.08px] text-indigo-900 lg:text-[13px] md:mr-0"
                    >
                    Our Blog 
                    </Heading>
                    <Heading 
                        size="headinglg"
                        as="h5"
                        className="relative mt-[-2px] text-[48px] font-semibold capitalize tracking-[0.08px] text-teal-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                    >   
                    Latest news
                    </Heading>
                </div> 
                <div className="mx-auto flex w-full max-w-[1708px] items-center justify-center gap-[26px] md:flex-col">
                    <div className="flex w-[24%] flex-col gap-6 md:w-full">
                        <div className="flex items-start justify-center sm:flex-col">
                            <Button
                                shape="round"
                                className="relative z-[14] mt-5 min-w-[114px]! rounded-br-[18px]!rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4"
                            >
                            20 Apr
                            </Button>
                            <div className="relative ml-[-104px] flex-1 self-center rounded-[14px] sm:ml-0 sm:self-stretch">
                                <div className="relative h-[502px] content-center rounded-[14px] lg:h-auto md:h-auto">
                                    <Img
                                        src="img_blog1_450x580_jpg.png"
                                        width={388} height={502} alt="Blog1450x580"
                                        className="h-[502px] w-full flex-1 rounded-[14px] object-cover"
                                    />
                                    <div className="absolute right-[-1px] top-[14%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                        <Heading 
                                        as="h6" 
                                        className="text-[20px] font-bold tracking-[0.08px]text-white-a700 lg:text-[17px]">
                                        The Covid-19 Epidemic In 2022
                                        </Heading>
                                        <Heading as="h5"
                                            className="text-[20px] font-bold tracking-[0.08pxl text-white-a700 lg:text-[17px]">
                                            Is Back
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2.5 md:ml-0">
                                <div className="flex items-start justify-center sm:flex-col">
                                    <Button
                                        shape=" round"
                                        className="relative z-[15] mt-5 min-w-[114px] !rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4">
                                        20 Apr
                                    </Button>
                                    <div className="relative ml-[-104px] flex-1 self-center rounded-[14px] sm:ml-0 sm:self-stretch">
                                        <div className="relative h-[226px] content-center rounded-[14px] lg:h-auto md:h-auto">
                                            < Img
                                            src="img_blog2_450x580_jpg.png"
                                            width={398} 
                                            height={226} alt="Blog2450x580"
                                            className="h-[226px] w-full flex-1 rounded-[14px] object-cover"
                                            />
                                            <div className="absolute right-[-1px] top-[31%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0"></div>
                                                <Heading 
                                                as="h5"
                                                className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]" 
                                                >
                                                The Covid-19 Epidemic In 2023
                                                </Heading>
                                                <Heading as="h5"
                                                    className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]" >
                                                    Is Back
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                <div className="flex flex-1 items-center gap-[22px] md:flex-col md:self-stretch">
                    <div className="flex w-full flex-col gap-4">
                        <div className="flex items-start justify-center sm:flex-col">
                            <Button
                                shape="round" className="relative z-[16] mt-5 min-w-[114px] !rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm: DX-4"
                            >
                            20 Apr 
                            </Button>
                            <Img
                                src="img blog1 450x580 jpg 234x388.png"
                                height={234} alt="Blog1450x580"
                                className="h-[234px] w-full flex-1 rounded-[14px] object-cover"
                            />
                            <div className="absolute right-[-1px] top-[29%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                <Heading as="h5"
                                    className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]"
                                >
                                The Covid-19 Epidemic In 2022
                                </Heading>
                                <Heading as="h5"
                                    className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                    Is Back
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="relative ml-2.5 h-[502px] content-center rounded-[14px] lg:h-auto md:ml-0 md:h-auto">
                        <Img
                            src="img_blog2_450x580_jpg_502x388.png"
                            width={388} height={502} alt="Blog2450x580"
                            className="h-[502px] w-full flex-1 rounded-[14px] object-cover"
                        />
                        <div className="absolute right-[-1.63px] top-[15%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                            <Heading as="h5" className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                The Covid-19 Epidemic In 2023
                            </Heading>
                            <Heading as="h5" className="text-[20px] font-bold tracking-[0.08pxl text-white-a700 lg:text-[17px]">
                                Is Back
                            </Heading>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-5">
                        <div className="ml-1 flex items-start justify-center md:ml-0 sm: flex-col">
                            <Button
                                shape="round"
                                className="relative z-[17] mt-6 min-w-[114px] !rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4"
                            >
                            20 Apr
                            </Button>
                            <div className="relative ml-[-104px] flex-1 self-center rounded-[14px] sm:ml-0 sm:self-stretch">
                                <div className="relative h-[502px] content-center rounded-[14px] lg:h-auto md:h-auto">
                                    <img
                                    src="img_blog1_450x580_jpg_502x390.png"
                                    width={390} height={502} alt="Blog1450x580"
                                    className="h-[502px] w-full flex-1 rounded-[14px] object-cover"
                                    />
                                    <div className="relative ml-[-102px] h-[502px] flex-1 content-center self-center rounded-[14px] lg:h-auto md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                                        <div className="absolute right-px top-[14%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                            <Heading
                                            as="h5"
                                            className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                            The Covid-19 Epidemic In 2022
                                            </Heading>
                                            <Heading as="h5"
                                            className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                            Is Back
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-1.5 md:mr=0">
                                    <div className="flex items-start justify-center sm:flex-col">
                                        <Button
                                        shape="round"
                                        className="relative z-[18] mt-5 min-w-[114px] !rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4">
                                        20 Apr
                                        </Button>
                                        <div className="relative ml-[-104px] flex-1 self-center rounded-[14px] sm:ml-0 sm:self-stretch"> 
                                            <div className="relative h-[226px] content-center rounded-[14px] lg:h-auto md:h-auto">
                                                <Img
                                                src="img_blog2_450x580_jpg_226x390.png"
                                                width={390} height={226} alt="Blog2450x580"
                                                className="h-[226px] w-full flex-1 rounded-[14px] object-cover"
                                                />
                                                <div className="absolute right-px top-[31%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                                    <Heading as="h5"
                                                        className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                                        The Covid-19 Epidemic In 2023
                                                    </Heading> 
                                                    <Heading as="h5"
                                                    className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                                    Is Back
                                                    </Heading>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-7">
                            <div className="ml-2 md:ml-0">
                                <div className="flex items-start justify-center sm: flex-col">
                                    <Button
                                    shape="round"
                                    className="relative z-[19] mt-5 min-w-[114px] ! rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4">
                                    20 Apr
                                    </ Button>
                                    <div className="relative ml-[-104px] flex-1 self-center rounded-[14px] sm:ml-0 sm:self-stretch">
                                        <div className="relative h-[234px] content-center rounded-[14px] lg:h-auto md:h-auto">
                                            <Img
                                            src="img_blog1_450x580_jpg_234x388.png"
                                            width={388} height={234} alt="Blog1450x580"
                                            className="h-[234px] w-full flex-1 rounded-[14px] object-cover"
                                            />
                                            <div className="absolute right-[-1px] top-[29%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                                <Heading as="h5"
                                                        className="text-[20px] font-bold tracking-[0.08pxl text-white-a700 lg:text-[17px]">
                                                        The Covid-19 Epidemic In 2022
                                                </Heading>
                                                <Heading as="h5"
                                                    className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                                    Is Back
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start justify-center sm:flex-col">
                                <Button
                                shape="round"
                                className=" relative z-20 mt-8 min-w-[114px] !rounded-br-[18px] !rounded-tr-[18px] px-7 font-medium tracking-[0.08px] sm:px-4">
                                17 Mar
                                </Button>
                                <div className="relative ml-[-100px] h-[500px] flex-1 content-center self-center rounded-[14pxl lg:h-auto md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                                    <Img
                                        src="img_blog2_450x580_jpg_500x388.png"
                                        width={388} height={500} alt="Blog2450x580"
                                        className="h-[500px] w-full flex-1 rounded-[14px] object-cover"
                                    />
                                    <div className="absolute right-[-1px] top-[14%] my-auto ml-11 mr-auto flex flex-1 flex-col items-start lg:ml-0 md:ml-0">
                                        <Heading as="h5" className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                            Hac hendrerit mus nons semper
                                        </Heading>
                                        <Heading as="h5" className="text-[20px] font-bold tracking-[0.08px] text-white-a700 lg:text-[17px]">
                                            suspendisse
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
