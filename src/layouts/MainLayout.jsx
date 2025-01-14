import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h3>this is MainLayout</h3>
            
        </div>
    );
};

export default MainLayout; 