const ChatArea = () => {
  return (
    <div className="flex-[0.7] flex flex-col">
      {/* Chat area Header */}
      <div className="bg-orange-300">Header</div>

      {/* Chat area  */}
      <div className="bg-green-300 flex-1"> Message</div>

      {/* Chat area Text input */}
      <div className="bg-yellow-500">Text</div>
    </div>
  );
};

export default ChatArea;
