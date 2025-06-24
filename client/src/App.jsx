import React from "react";
import { ConfigProvider, Layout, Menu, theme as antTheme } from "antd";
import {
  HomeOutlined,
  BookOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Review from "./pages/Review";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";

const { Header, Content } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", key: "/", icon: <HomeOutlined /> },
    { label: "About", key: "/about", icon: <InfoCircleOutlined /> },
    { label: "Review a Book", key: "/review", icon: <BookOutlined /> },
    { label: "Sign In", key: "/signin", icon: <LoginOutlined />, style: { marginLeft: "auto" } },
    { label: "Sign Up", key: "/signup", icon: <UserAddOutlined /> },
  ];

  const handleClick = (e) => navigate(e.key);

  return (
    <ConfigProvider
      theme={{
        algorithm: antTheme.defaultAlgorithm, // use darkAlgorithm for dark theme
        token: {
          colorPrimary: "#ff4d4f", // 🔥 Primary color (buttons, active links, etc.)
          fontFamily: "Poppins, sans-serif",
          borderRadius: 10,
          colorBgBase: "#fffefa",
        },
        components: {
          Layout: {
            headerBg: "#ffffff",
            headerColor: "#222",
          },
          Menu: {
            itemColor: "#333",
            itemHoverColor: "#ff4d4f",
            itemSelectedColor: "#ff4d4f",
            horizontalItemSelectedColor: "#ff4d4f",
            horizontalItemHoverColor: "#ff7875",
            itemActiveBg: "#fff1f0",
          },
          Button: {
            colorPrimary: "#ff4d4f",
            borderRadius: 8,
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)", display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "#ff4d4f", margin: 0, marginRight: "24px", cursor: "pointer" }} onClick={() => navigate('/')}>
            Bookverse
          </h1>
          <Menu
            theme="light"
            mode="horizontal"
            items={menuItems}
            onClick={handleClick}
            style={{ flexWrap: "wrap", flex: 1 }}
          />
        </Header>

        <Content style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Content>
      </Layout>
      
    </ConfigProvider>
   
  );
};

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}