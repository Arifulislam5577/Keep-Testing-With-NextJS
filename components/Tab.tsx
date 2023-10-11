"use client";
import { Tabs } from "keep-react-demo";
import { Gear, GridFour, Phone, User, WarningCircle } from "phosphor-react";

const TabsComponent = () => {
  return (
    <Tabs
      aria-label="Default tabs"
      style="underline"
      borderPosition="bottom"
      iconPosition="left"
    >
      <Tabs.Item title="Profile" icon={<User size={20} />}>
        Profile content
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={<Gear size={20} />}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item
        disabled={true}
        title="Disabled"
        icon={<WarningCircle size={20} />}
      >
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

export default TabsComponent;
