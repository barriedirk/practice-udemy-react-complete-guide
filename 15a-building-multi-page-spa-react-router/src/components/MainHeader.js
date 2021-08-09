import { NavLink, Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
    // with anchor, the page is refresh again and again, to avoid this, use Link
    //
    // return (
    //     <header>
    //         <nav>
    //             <ul>
    //                 <li>
    //                     <a href="/welcome">Welcome</a>
    //                 </li>
    //                 <li>
    //                     <a href="/products">Products</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </header>
    // );

    // with Link
    //
    // return (
    //     <header className={classes.header}>
    //         <nav>
    //             <ul>
    //                 <li>
    //                     <Link to="/welcome">Welcome</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/products">Products</Link>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </header>
    // );

    // NavLink to use a active class selection
    //
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
