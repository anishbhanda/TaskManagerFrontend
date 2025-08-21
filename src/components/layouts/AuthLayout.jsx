import React from "react";

function AuthLayout({ children }) {
    return (
        <div className="">
            <div className="">
                <h2 className="">AuthLayout</h2>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
