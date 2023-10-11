"use client";
import { Sidebar } from "keep-react-demo";
import {
  Chat,
  Handbag,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
} from "phosphor-react";

const SidebarComponent = () => {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="w-1/4"
    >
      <Sidebar.Logo href="" img="/images/keepLogo.svg" imgAlt="Keep logo" />
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={<ShoppingCart size={24} />}
            label="E-commerce"
          >
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<SignIn size={24} />}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarComponent;
