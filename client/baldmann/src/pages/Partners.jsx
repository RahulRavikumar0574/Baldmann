import React from 'react';

import './Partners.css';
import udl from './UDL_logo.png';
import kvm from './kvm_logo.jpg';

const Partners = () => {
    return (
        <>
            <div className="main-partners">
                <h1>Our Partners</h1>
                <div className='logos'>
                    <a href="https://www.linkedin.com/company/upsidedownlabs/" target="_blank" rel="noopener noreferrer">
                        <img src={udl} alt="UDlabs" className="udl-logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/kvm-medtech/" target="_blank" rel="noopener noreferrer">
                        <img src={kvm} alt="KVMmedtech" className="kvm-logo" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Partners;
