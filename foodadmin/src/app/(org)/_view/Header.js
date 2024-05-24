"use client";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  BookOpenText,
  HelpCircle,
  KeyRound,
  LogOut,
  MenuIcon,
  MessageSquareMore,
  NotebookTabs,
  User,
} from "lucide-react";

function Header() {
  return (
    <div className="border-bottom p-3">
      <div className="d-flex justify-content-between">
        <div
          style={{
            // marginLeft: "50px",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Header
        </div>
        <div>
          <Menu
            arrow={true}
            align={"end"}
            menuButton={
              <MenuButton className="btn">
                <HelpCircle size={20} />
                <span className="ms-1" style={{ fontSize: "15px" }}>
                  Help
                </span>
              </MenuButton>
            }
            transition
            className="me-4"
          >
            <MenuItem>
              <MessageSquareMore />
              <span className="ms-2">Chat with us</span>
            </MenuItem>
            <MenuItem>
              <HelpCircle />
              <span className="ms-2">Help center</span>
            </MenuItem>
            <MenuItem>
              <BookOpenText />
              <span className="ms-2">New Features</span>
            </MenuItem>
          </Menu>

          <Menu
            arrow={true}
            align={"end"}
            menuButton={
              <MenuButton className="btn">
                <MenuIcon size={22} />
              </MenuButton>
            }
            transition
          >
            <MenuItem>
              <User />
              <span className="ms-2">Deepak Kumar</span>
            </MenuItem>
            <MenuItem>
              <KeyRound />
              <span className="ms-2">Change Password</span>
            </MenuItem>
            <MenuItem>
              {" "}
              <NotebookTabs /> <span className="ms-2">Application Log</span>
            </MenuItem>
            <MenuItem>
              <LogOut />
              <span className="ms-2">Logout</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
