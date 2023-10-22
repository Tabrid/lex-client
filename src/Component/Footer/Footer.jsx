const Footer = () => {
    return (
        <div
            id="FooterRoot"
            className="bg-[#1d344a] flex flex-col justify-end gap-10 w-full pt-10 px-4"
        >
            <div className="flex flex-row gap-48 items-start ml-8 mr-32">
                <img src="" id="LinkPng" className="mt-px mr-1" />
                <div className="flex flex-col gap-3 w-16 shrink-0 items-start mt-1 mr-1">
                    <div
                        id="HeadingProduct"
                        className="text-sm font-['Segoe_UI'] tracking-[0.35] leading-[20px] uppercase text-[#f9fafb]"
                    >
                        Product
                    </div>
                    <div className="flex flex-col justify-between gap-1 w-16 items-start">
                        <div
                            id="ItemLinkFeatures"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Features
                        </div>
                        <div
                            id="ItemLinkIntegrations"
                            className="text-xs font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Integrations
                        </div>
                        <div
                            id="ItemLinkPricing"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Pricing
                        </div>
                        <div
                            id="ItemLinkFAQ"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            FAQ
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-24 shrink-0 items-start">
                    <div
                        id="HeadingCompany"
                        className="text-sm font-['Segoe_UI'] tracking-[0.35] leading-[20px] uppercase text-[#f9fafb]"
                    >
                        Company
                    </div>
                    <div className="flex flex-col gap-1 w-24 items-start">
                        <div
                            id="ItemLinkPrivacy"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Privacy
                        </div>
                        <div className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]">
                            Terms of Service
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mr-2 gap-3 w-24 shrink-0 items-start">
                    <div
                        id="HeadingDevelopers"
                        className="text-sm font-['Segoe_UI'] leading-[20px] uppercase text-[#f9fafb]"
                    >
                        Developers
                    </div>
                    <div className="flex flex-col justify-between gap-1 w-20 items-start">
                        <div
                            id="ItemLinkPublicAPI"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Public API
                        </div>
                        <div className="text-xs font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]">
                            Documentation
                        </div>
                        <div
                            id="ItemLinkGuides"
                            className="text-sm font-['Segoe_UI'] leading-[20px] text-[#f3f4f6]"
                        >
                            Guides
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <div className="text-sm font-['Segoe_UI'] leading-[20px] uppercase text-[#f9fafb] mr-1">
                        Social media
                    </div>
                    <div className="flex flex-row justify-between ml-1 w-24 items-start">
                        <img
                            src="https://file.rendit.io/n/Me7TBjz37lmz6RqgZIvw.svg"
                            className="w-5 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/kSQ3QuD0hcFNf0oZPWk4.svg"
                            className="w-5 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/3qEH9XTDUC4nEenKqVC4.svg"
                            className="w-5 shrink-0"
                        />
                    </div>
                </div>
            </div>
            <div
                id="Divpy"
                className="border-solid border-[#e5e7eb] flex flex-col justify-center h-16 shrink-0 items-center border-t border-b-0 border-x-0"
            >
                <div className="text-center text-sm font-['Segoe_UI'] leading-[20px] text-white">
                    © LEX has All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;