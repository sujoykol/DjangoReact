import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {

    const location = useLocation();

    const paths = location.pathname
        .split("/")
        .filter(Boolean);

    return (

        <div className="breadcrumb-wrap">
            <div className="container">

                <ul className="breadcrumb">

                    <li className="breadcrumb-item">
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                        >
                            Home
                        </Link>
                    </li>

                    {paths.map((path, index) => {

                        const url =
                            "/" + paths.slice(0, index + 1).join("/");

                        const isLast =
                            index === paths.length - 1;

                        return (
                            <li
                                key={url}
                                className={`breadcrumb-item ${isLast ? "active" : ""}`}
                            >
                                {isLast ? (
                                    path.replace(/-/g, " ")
                                ) : (
                                    <Link
                                        to={url}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {path.replace(/-/g, " ")}
                                    </Link>
                                )}
                            </li>
                        );

                    })}

                </ul>

            </div>
        </div>

    );
};

export default Breadcrumb;