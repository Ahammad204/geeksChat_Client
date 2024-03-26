import {
  AccountCircle,
  AddCircle,
  Groups,
  Nightlight,
  PersonAddAlt,
  Search,
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
            <PersonAddAlt></PersonAddAlt>
          </IconButton>

          <IconButton>
            <Groups></Groups>
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

      <div className="bg-white rounded-3xl px-3 py-3 m-3 flex items-center">
        <IconButton>
          <Search></Search>
        </IconButton>

        <input
          type="text"
          placeholder="Search"
          className="outline-0 border-none text-xl ml-3 w-full"
        />
      </div>
      {/* Sidebar Conversation */}

      <div></div>
    </div>
  );
};

export default Sidebar;
