import { useState } from "react";
import { HomeOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Router } from "./navigation/Router";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<a href="/">Accueil</a>, "1", <HomeOutlined />),
  getItem(<a href="/users">Utilisateurs</a>, "2", <TeamOutlined />),
  getItem(<a href="/profile/hugo">Moi</a>, "3", <UserOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          selectedKeys={[
            items.find(
              (i) =>
                i.label.props.href.toLowerCase() === currentPath.toLowerCase()
            )?.key,
          ]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ padding: "5%" }}>
        <Router />
      </Layout>
    </Layout>
  );
};
export default App;
