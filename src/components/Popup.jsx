import React from 'react';
import './Popup.css';
import logo from '../logo/intract_text.svg';
import bitcoin from '../logo/2ac5eb3d7d3c4d6dbe5b3bcfe51d28fd.png';
import Linea from '../logo/linea.webp';
import Solana from '../logo/6325c064d0cc4a6ea76ec38c0edd642a.png';
import base from '../logo/base-logo2.svg';
import blast from '../logo/blast.png';
import atom from '../logo/b38877fae64f42a49f3cb2df752f68e8.png';
import op from '../logo/8fa7ed6be3a049f2b129c4e9ca3d41b6.webp';
import polygon from '../logo/3cde17744ce9491a9dce0a7434d20c85.png';
import zora from '../logo/zora.png';
import mode from '../logo/mode.jpeg';
import zksyn from '../logo/zksync3.png';
import BNB from '../logo/0588e08e99ff46ac9dfcc4d35cb6e3fa.png';
import twopolygon from '../logo/7ed3f0445cf34603bd4884af5b51acec.png';
import abtrib from '../logo/5e025a633d7b4558bf6c59e18db71012.png';
import scroll from '../logo/scroll.jpeg';

const Popup = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <div className="popup-title">All Ecosystems</div>
                <div className="popup-images">
                <div className='row'>
                                    <img className="popup-image" src={Linea} alt="intract logo" />
                                    <img className="popup-image" src={bitcoin} alt="intract logo" />
                                    <img className="popup-image" src={blast} alt="intract logo" />
                                    <img className="popup-image" src={atom} alt="intract logo" />
                                    <img className="popup-image" src={op} alt="intract logo" />
                                </div>
                                {/* <div className='row'>
                                    <img className="popup-image" src={polygon} alt="intract logo" />
                                    <img className="popup-image" src={zora} alt="intract logo" />
                                    <img className="popup-image" src={mode} alt="intract logo" />
                                    <img className="popup-image" src={base} alt="intract logo" />
                                    <img className="popup-image" src={zksyn} alt="intract logo" />
                                </div>
                                <div className='row'>
                                    <img className="popup-image" src={Solana} alt="intract logo" />
                                    <img className="popup-image" src={BNB} alt="intract logo" />
                                    <img className="popup-image" src={twopolygon} alt="intract logo" />
                                    <img className="popup-image" src={abtrib} alt="intract logo" />
                                    <img className="popup-image" src={scroll} alt="intract logo" />
                                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Popup;
