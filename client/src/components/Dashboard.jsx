import React from "react";
import { Card, List, Typography, Rate, Space, Button } from "antd";
import { BookOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Dashboard = () => {
  // Sample data - replace with your actual data from API/state
  const bookReviews = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://covers.openlibrary.org/b/id/12842422-L.jpg",
      rating: 4.5,
      review: "Great book about building good habits and breaking bad ones.",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "Deep Work",
      author: "Cal Newport",
      cover: "https://covers.openlibrary.org/b/id/10473639-L.jpg",
      rating: 5,
      review: "Essential reading for improving focus and productivity.",
      date: "2023-04-10"
    },
  ];

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <Title level={3}>My Book Reviews</Title>
        <Button type="primary" href="/review">
          Add New Review
        </Button>
      </div>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        dataSource={bookReviews}
        renderItem={(book) => (
          <List.Item>
            <Card
              hoverable
              cover={
                <div style={{ height: "200px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    alt={book.title}
                    src={book.cover}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
              }
              actions={[
                <Button type="text" icon={<EditOutlined />} />,
                <Button type="text" danger icon={<DeleteOutlined />} />,
              ]}
            >
              <Card.Meta
                title={<Text strong>{book.title}</Text>}
                description={
                  <Space direction="vertical" size="small">
                    <Text type="secondary">{book.author}</Text>
                    <Rate disabled allowHalf defaultValue={book.rating} />
                    <Text>{book.review}</Text>
                    <Text type="secondary" style={{ fontSize: "0.8rem" }}>
                      Reviewed on {book.date}
                    </Text>
                  </Space>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dashboard;