

const MessageSelf = () => {

    const prop1 = { name: "You", message: "This is a sample" };

    return (
        <div className="flex justify-end">
            <div className="flex flex-col bg-[#63d7b0] w-max px-3 py-3 m-1 rounded-3xl">
                <p>{prop1.message}</p>
                <p className="self-end text-xs font-light mt-1">12.00</p>
            </div>
        </div>
    );
};

export default MessageSelf;