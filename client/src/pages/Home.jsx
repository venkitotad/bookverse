import React from "react";
import { Typography, Button, Card, Row, Col, Space, Divider } from "antd";
import { BookOutlined, StarOutlined, PlusOutlined, SearchOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

const featureCards = [
  {
    icon: <BookOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />,
    title: "Track What You Read",
    description: "Catalog your finished books with cover images, author details, and reading dates.",
    color: "#1890ff"
  },
  {
    icon: <StarOutlined style={{ fontSize: "2rem", color: "#faad14" }} />,
    title: "Rate and Reflect",
    description: "Add detailed reviews, personal notes, and star ratings for each book.",
    color: "#faad14"
  },
  {
    icon: <SearchOutlined style={{ fontSize: "2rem", color: "#52c41a" }} />,
    title: "Sort and Search",
    description: "Filter your library by rating, date, genre, or title with powerful search.",
    color: "#52c41a"
  },
  {
    icon: <TeamOutlined style={{ fontSize: "2rem", color: "#722ed1" }} />,
    title: "Share Insights",
    description: "Export or share your reviews with fellow book lovers.",
    color: "#722ed1"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      padding: "2rem 1rem", 
      maxWidth: 1200, 
      margin: "0 auto",
      minHeight: "calc(100vh - 64px - 70px)" // Adjust for header/footer
    }}>
      {/* Hero Section */}
      <Card
        style={{
          padding: "3rem 2rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #f9f9ff 0%, #f0f4ff 100%)",
          border: "none",
          marginBottom: "3rem",
          textAlign: "center"
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Title level={1} style={{ marginBottom: 0 }}>
            Welcome to BookReview 📚
          </Title>
          <Text type="secondary" style={{ fontSize: "1.2rem" }}>
            Read. Reflect. Remember.
          </Text>
          
          <Divider style={{ borderColor: "rgba(0, 0, 0, 0.06)" }} />
          
          <Paragraph style={{ fontSize: "1.1rem", maxWidth: 800, margin: "0 auto" }}>
            Document, organize, and reflect on all the books you've read. 
            Inspired by <a href="https://sive.rs/book" target="_blank" rel="noopener noreferrer">Derek Sivers' book notes</a>, 
            this app helps you capture what really mattered in each book.
          </Paragraph>
          
          <Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => navigate("/signin")}
              style={{ marginTop: "1rem" }}
            >
              Start Reviewing
            </Button>
            <Button
              type="default"
              size="large"
              onClick={() => navigate("/about")}
              style={{ marginTop: "1rem" }}
            >
              Learn More
            </Button>
          </Space>
        </Space>
      </Card>

      {/* Features Section */}
      <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Why Use BookReview?
      </Title>
      
      <Row gutter={[24, 24]} justify="center">
        {featureCards.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <Card
              bordered={false}
              hoverable
              style={{ 
                height: "100%",
                borderRadius: "1rem",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                borderTop: `4px solid ${feature.color}`
              }}
              bodyStyle={{ padding: "1.5rem" }}
            >
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <Title level={4} style={{ textAlign: "center" }}>
                {feature.title}
              </Title>
              <Paragraph style={{ textAlign: "center" }}>
                {feature.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Testimonial/CTA Section */}
      <Card
        style={{
          marginTop: "3rem",
          padding: "2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #f6faff 0%, #e6f7ff 100%)",
          border: "none",
          borderRadius: "1rem"
        }}
      >
        <Title level={3} style={{ marginBottom: "1rem" }}>
          Join Thousands of Readers
        </Title>
        <Paragraph style={{ fontSize: "1.1rem", maxWidth: 800, margin: "0 auto 1.5rem" }}>
          "BookReview has transformed how I engage with books. I remember more, reflect deeper, 
          and can easily revisit key insights from my reading journey."
        </Paragraph>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/signin")}
        >
          Start Your Reading Journey Today
        </Button>
      </Card>
    </div>
  );
};

export default Home;