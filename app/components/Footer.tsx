"use client";

import { FaEnvelope, FaFacebook, FaInstagram, FaLocationPin, FaPhone, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IdentityContext } from "../identity-provider";
import { useContext } from "react";

interface iFooterItems {
    label: string;
    link: string;
    icons: () => JSX.Element;
}
const Footer = () => {
    const channelName = useContext(IdentityContext);

    const followUsItems: Array<iFooterItems> = [
        {
            label: "Facebook",
            link: "https://www.facebook.com/nextapp.id",
            icons: () => <FaFacebook />,
        },
        {
            label: "Instagram",
            link: "https://www.instagram.com/nextapp.id",
            icons: () => <FaInstagram />,
        },
        {
            label: "Tiktok",
            link: "https://www.tiktok.com/nextapp.id",
            icons: () => <FaTiktok />,
        },
        {
            label: "Twitter",
            link: "https://www.twitter.com/nextapp.id",
            icons: () => <FaTwitter />,
        },
        {
            label: "Youtube",
            link: "https://www.youtube.com/nextapp.id",
            icons: () => <FaYoutube />,
        },
    ];

    const contactUsItems: Array<iFooterItems> = [
        {
            label: "Email to user@mail.com",
            link: "mailto: user@mail.com",
            icons: () => <FaEnvelope />,
        },
        {
            label: "Call 082143215678",
            link: "tel: 082143215678",
            icons: () => <FaPhone />,
        },
    ];

    return (
        <footer>
            <div className="footer-top mx-auto px-6 py-6 xl:px-2 bg-secondary block sm:hidden rounded-t-xl">
                <h3 className="text-center mb-6 text-black font-bold">{channelName}</h3>

                {/* section follow us */}
                <section>
                    <h4>Follow Us</h4>
                    <div className="flex justify-start gap-6 text-2xl">
                        {followUsItems.map((item, index) => (
                            <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                                {item.icons()}
                            </a>
                        ))}
                    </div>
                </section>

                {/* section contact us */}
                <section>
                    <h4>Contact Us</h4>
                    {contactUsItems.map((item, index) => (
                        <a href={item.link} className="flex items-center justify-start gap-3 mb-2" target="_blank" rel="noreferrer" key={index}>
                            <span className="text-white">{item.icons()}</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </section>

                {/* section address */}
                <section>
                    <h4>Address</h4>
                    <div className="flex items-center justify-start gap-3 mb-2">
                        <FaLocationPin className="text-white" />
                        <span>Jakarta, Indonesia</span>
                    </div>
                </section>
            </div>

            <div className="footer-bootom mx-auto px-6 xl:px-2 bg-third text-center text-white py-4">
                <span>Copyright @{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
            </div>
        </footer>
    );
};

export default Footer;
