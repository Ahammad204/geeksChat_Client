import {
  AccountCircle,
  AddCircle,
  GroupAdd,
  Nightlight,
  PersonAdd,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="flex-[0.3]">
      {/* Sidebar Header */}

      <div className="bg-white rounded-3xl px-1 py-3 m-3 flex justify-between">
        <div>
          <IconButton>
            <AccountCircle></AccountCircle>
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAdd></PersonAdd>
          </IconButton>

          <IconButton>
            <GroupAdd></GroupAdd>
          </IconButton>

          <IconButton>
            <AddCircle></AddCircle>
          </IconButton>

          <IconButton>
            <Nightlight></Nightlight>
          </IconButton>
        </div>
      </div>

      {/* Sidebar Search */}

      <div></div>
      {/* Sidebar Conversation */}

      <div></div>
    </div>
  );
};

export default Sidebar;
