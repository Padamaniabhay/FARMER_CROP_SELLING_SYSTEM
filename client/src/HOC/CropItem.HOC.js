import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import CropItemLayout from "../Layout/cropItem.layout";

const CropItemLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    element={<CropItemLayout><Component /></CropItemLayout>}
                />
            </Routes>
        </>
    );
};

export default CropItemLayoutHOC;