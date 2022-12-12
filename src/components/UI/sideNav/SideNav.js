import { useState } from 'react';
import './SideNav.css';
const SideNav = props => {
    const [sNav, setsNav] = useState("");
    const setShowNav = () => {
        if (sNav === "show") setsNav("");
        else setsNav("show");
        console.log(sNav);
    }
    return <>
        <div className="col-md-3 col-xl-2 bd-sidebar st-color">
            <form role="search" className="bd-search d-flex align-items-center">

                <button className="btn bd-search-docs-toggle d-md-none p-0 ml-3 st-color" type="button" data-toggle="collapse" data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation" onClick={setShowNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                </button>
            </form>


            <div className={"collapse d-md-block " + sNav} id="bd-docs-nav">
                <div className='w-100'>
                    <div className="row sidebar-header" style={{ maxHeight: '100px', maxWidth: '230px' }}>
                        <div className="col-4 user-pic">
                            <div className="rounded-circle border" style={{ width: '100%', paddingBottom: '100%' }}></div>
                        </div>
                        <div className="col-8 p-0 pl-2 user-info d-flex align-items-center">
                            <div className='row m-auto'>
                                <span className="user-name">Ashish Kumar
                                </span>
                                <span className="user-role">Admin</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='st-color mt-0' />


                <nav className="bd-links" aria-label="Main navigation">
                    <div className="bd-toc-item">
                        <a className="bd-toc-link" href="/docs/4.6/getting-started/introduction/">
                            Dashboard
                        </a>
                    </div>
                    <div className="bd-toc-item active">
                        <a className="bd-toc-link" href="/docs/4.6/getting-started/introduction/">
                            Leads
                        </a>
                    </div>
                    <div className="bd-toc-item">
                        <a className="bd-toc-link" href="/docs/4.6/getting-started/introduction/">
                            Schedule Meeting
                        </a>
                    </div>
                    <div className="bd-toc-item">
                        <a className="bd-toc-link" href="/docs/4.6/getting-started/introduction/">
                            Settings
                        </a>
                    </div>
                </nav>
            </div>

        </div>
    </>;
}

export default SideNav