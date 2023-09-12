import React from 'react';
import Menu from '../Partials/menu';

function Footer() {
    return (
        <footer>
            <div className="footer-con">
                <div className="footer-subcon">
                    <div className="categories">
                        <Menu
                            title="The Company"
                            menus={[
                                { label: "New Designs" },
                                { label: "Weekly Insights" },
                                { label: "Collaborations" },
                            ]}
                        />

                        <Menu
                            title="The Team"
                            menus={[
                                { label: "Meet the Team" },
                                { label: "Our Designers" },
                                { label: "The Principles" },
                            ]}
                        />

                        <Menu
                            title="Our Design"
                            menus={[
                                { label: "Intentional Research" },
                                { label: "Digital Solutions" },
                                { label: "Innovations" },
                            ]}
                        />

                        <Menu
                            title="Legal"
                            menus={[
                                { label: "Terms and Confitions" },
                                { label: "Privacy Policy" },
                                { label: "Copyright" },
                            ]}
                        />
                    </div>
                    <div>
                        <p>Copyright 2021 Fashion with Ethics All RIghts Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
