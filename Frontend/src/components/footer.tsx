const Footer = () => {
    return (
        <footer className="w-full bg-[#FFFDF2] py-16 px-6 border-t-4 border-black/10">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Wrapper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Column 1 */}
                    <div>
                        <h2 className="text-2xl font-extrabold text-black">
                            Campus<span className="text-black/70">Sell</span>
                        </h2>
                        <p className="text-black/70 mt-3 max-w-xs">
                            Buy, sell, and connect with students on your campus.
                        </p>
                    </div>

                    {/* Column 2 — Links */}
                    <div className="flex flex-col space-y-4 items-start">
                        {[
                            { name: "About", link: "/about" },
                            { name: "Contact", link: "/contact" },
                            { name: "Terms", link: "/terms" },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="inline-block leading-tight uppercase text-sm lg:text-base font-semibold text-black/80 hover:text-black transition-colors duration-200
                                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Column 3 — Social */}
                    <div className="flex flex-col space-y-3">
                        <p className="uppercase text-sm lg:text-base font-semibold text-black/80">
                            Follow Us
                        </p>
                        <div className="flex gap-4 text-black/70">
                            <i className="ri-instagram-line text-3xl hover:text-black transition"></i>
                            <i className="ri-twitter-line text-3xl hover:text-black transition"></i>
                            <i className="ri-facebook-circle-line text-3xl hover:text-black transition"></i>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <p className="text-center text-black/50 mt-12">
                    ©CampusSell
                </p>

            </div>
        </footer>
    );
};

export default Footer;