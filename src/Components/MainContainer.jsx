import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";


const MainContainer = () => {
    return (
        <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-3xl">
            <Sidebar></Sidebar>
            <WorkArea></WorkArea>
        </div>
    );
};

export default MainContainer;