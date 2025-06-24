import React from "react";
import { Form, Input, Button, Rate, Typography, Card } from "antd";
import { BookOutlined, UserOutlined, BarcodeOutlined, EditOutlined, StarOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const Review = () => {
  const onFinish = (values) => {
    console.log("📚 Book Review Submitted:", values);
    // You can now send: { title, author, isbn, review, rating } to backend
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      padding: "1rem",
      minHeight: "calc(100vh - 64px)"
    }}>
      <Card
        style={{ 
          width: "100%",
          maxWidth: 600,
          padding: "2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          border: "none"
        }}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
          <EditOutlined style={{ marginRight: 8 }} />
          Write a Book Review
        </Title>

        <Form 
          layout="vertical" 
          onFinish={onFinish}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <Form.Item
            label="Book Title"
            name="title"
            rules={[{ required: true, message: "Please enter the book title" }]}
          >
            <Input 
              prefix={<BookOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="e.g., Atomic Habits" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Please enter the author's name" }]}
          >
            <Input 
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="e.g., James Clear" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="ISBN (Optional)"
            name="isbn"
            rules={[
              {
                pattern: /^[\d-]+$/,
                message: "Please enter a valid ISBN (numbers and dashes only)",
              },
            ]}
          >
            <Input 
              prefix={<BarcodeOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="e.g., 978-0143127741" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Your Review"
            name="review"
            rules={[{ required: true, message: "Please write your review" }]}
          >
            <TextArea 
              rows={5} 
              placeholder="Share your thoughts about the book..." 
              style={{ resize: "none" }}
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please rate the book" }]}
          >
            <Rate 
              character={<StarOutlined />}
              style={{ fontSize: 24 }} 
              allowHalf 
            />
          </Form.Item>

          <Form.Item style={{ marginTop: "2rem" }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              block
              size="large"
              icon={<EditOutlined />}
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Review;