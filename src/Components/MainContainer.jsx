import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";




const MainContainer = () => {
    return (
        <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-3xl">
            <Sidebar></Sidebar>
            <ChatArea></ChatArea>
        </div>
    );
};

export default MainContainer;