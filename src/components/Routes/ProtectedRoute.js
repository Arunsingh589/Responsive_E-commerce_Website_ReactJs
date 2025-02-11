import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const login = localStorage.getItem("email");

    useEffect(() => {
        if (!login) {
            navigate("/login");
        }
    }, [login, navigate]);

    return login ? children : null;
};

export default ProtectedRoute;
