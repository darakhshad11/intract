import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="intract-guide">
                <div className="intro">
                    <h1>intract.</h1>
                    <p>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
                </div>
                <div className="sections">
                    <div className="column">
                        <h2>INTRACT</h2>
                        <ul>
                            <li><a href="#">Explore Quests</a></li>
                            <li><a href="#">Communities</a></li>
                            <li><a href="#">Alpha Hub</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>EARN</h2>
                        <ul>
                            <li><a href="#">Refer & Earn</a></li>
                            <li><a href="#">Leaderboard</a></li>
                            <li><a href="#">Achievements</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>ABOUT</h2>
                        <ul>
                            <li><a href="#">Product Roadmap</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Sign up Program</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>SUPPORT</h2>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Create your quest</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Community Guidelines</a></li>
                            <li><a href="#">Growth Community</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="disclaimer">
                <p>
                    Disclaimer: Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We
                    advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or
                    should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication
                    published by us shall not be attributable to us.
                </p>
            </div>
            <div className="created-by">
                CREATED BY INTRACT
            </div>
        </>
    )
}

export default Footer;
