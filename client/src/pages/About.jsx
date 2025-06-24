import React from "react";
import { Typography, Divider, Card, Space } from "antd";
import { BulbOutlined, DatabaseOutlined, ApiOutlined, ToolOutlined, RocketOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: 900, 
      margin: "0 auto",
      minHeight: "calc(100vh - 64px - 70px)" // Adjust for header/footer
    }}>
      <Card 
        style={{ 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 12,
          border: "none"
        }}
      >
        <Typography>
          <Title level={2} style={{ marginBottom: 24 }}>About This Project 📚</Title>

          <Paragraph style={{ fontSize: 16 }}>
            I love reading non-fiction books — but I often forget the key insights after I'm done.
            That's why I started taking notes and storing them digitally.
          </Paragraph>

          <Paragraph style={{ fontSize: 16 }}>
            This capstone project is inspired by <a href="https://sive.rs/book" target="_blank" rel="noopener noreferrer">Derek Sivers' book notes</a> — a beautiful and efficient way to organize, review, and revisit what you've read.
          </Paragraph>

          <Divider style={{ borderColor: "#f0f0f0" }} />

          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div>
              <Title level={4}><BulbOutlined style={{ marginRight: 8 }} />Objectives</Title>
              <Paragraph style={{ fontSize: 16 }}>
                This project serves as a hands-on full-stack development challenge. It helps you:
              </Paragraph>
              <ul style={{ fontSize: 16 }}>
                <li>Integrate public APIs (Open Library Covers API)</li>
                <li>Build RESTful routes with Express.js</li>
                <li>Use PostgreSQL to persist and manage book data</li>
                <li>Perform full CRUD (Create, Read, Update, Delete) operations</li>
                <li>Design a sortable, user-friendly book notes site</li>
              </ul>
            </div>

            <Divider style={{ borderColor: "#f0f0f0" }} />

            <div>
              <Title level={4}><DatabaseOutlined style={{ marginRight: 8 }} />Tech Stack</Title>
              <ul style={{ fontSize: 16 }}>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, EJS Templates (or React)</li>
                <li><strong>Backend:</strong> Node.js, Express.js</li>
                <li><strong>Database:</strong> PostgreSQL with <Text code>pg</Text></li>
                <li><strong>API:</strong> Open Library Covers API</li>
              </ul>
            </div>

            <Divider style={{ borderColor: "#f0f0f0" }} />

            <div>
              <Title level={4}><ToolOutlined style={{ marginRight: 8 }} />Features</Title>
              <ul style={{ fontSize: 16 }}>
                <li>Search and display book covers from Open Library</li>
                <li>Write, edit, and delete book reviews and notes</li>
                <li>Sort by rating, recency, or title</li>
                <li>Data stored persistently in a PostgreSQL database</li>
                <li>Responsive and user-friendly layout</li>
              </ul>
            </div>

            <Divider style={{ borderColor: "#f0f0f0" }} />

            <div>
              <Title level={4}><RocketOutlined style={{ marginRight: 8 }} />What's Next</Title>
              <Paragraph style={{ fontSize: 16 }}>
                This is just the start — you could add tags, quotes, favorite status, or public sharing options next.
              </Paragraph>

              <Paragraph style={{ fontSize: 16 }}>
                Built with ❤️ as a personal learning journey and a way to remember the best of what I've read.
              </Paragraph>
            </div>
          </Space>
        </Typography>
      </Card>
    </div>
  );
};

export default About;