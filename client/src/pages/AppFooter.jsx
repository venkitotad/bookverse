import React from "react";
import { Layout, Typography, Divider } from "antd";
import { HeartOutlined, RocketOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ 
      textAlign: "center", 
      background: "#f0f2f5",
      padding: "2rem 1rem",
      borderTop: "1px solid #e8e8e8"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Text style={{ fontSize: "1rem" }}>
          <strong>BookReview</strong> — Built with <HeartOutlined style={{ color: "#ff4d4f" }} /> for learning and reflecting
        </Text>
        
        <Divider style={{ margin: "1rem 0", borderColor: "#d9d9d9" }} />
        
        <div style={{ marginBottom: "0.5rem" }}>
          <Text type="secondary">
            Inspired by <Link href="https://sive.rs/book" target="_blank" rel="noopener">Derek Sivers' book notes</Link>
          </Text>
        </div>
        
        <div>
          <Text type="secondary" style={{ fontSize: "0.85rem" }}>
            <RocketOutlined style={{ marginRight: 4 }} />
            &copy; {new Date().getFullYear()} BookReview App. All rights reserved.
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;