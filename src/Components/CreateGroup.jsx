import { CheckCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CreateGroup = () => {
  return (
    <div
      className="flex self-center py-4 px-4 m-3 bg-white rounded-3xl justify-between"
      style={{
        flex: "0.7",
      }}
    >
      <input
        type="text"
        placeholder="Create a group"
        className="outline-0 border-none text-xl ml-3 w-full"
      />
      <IconButton>
        <CheckCircle></CheckCircle>
      </IconButton>
    </div>
  );
};

export default CreateGroup;
