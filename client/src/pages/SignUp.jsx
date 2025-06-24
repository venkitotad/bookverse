import React from "react";
import { Button, Form, Input, Typography, Card, Divider, Space, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log("✅ Form Submitted:", values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success("Account created successfully!");
      navigate("/dashboard"); // Redirect after successful signup
    } catch (error) {
      message.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "1rem"
    }}>
      <Card 
        style={{ 
          width: "100%", 
          maxWidth: 480, 
          padding: "2rem",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
        }}
        hoverable
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={3} style={{ marginBottom: 8 }}>Join Bookverse</Title>
            <Text type="secondary">Create your account to start tracking your reading journey</Text>
          </div>

        

          <Form
            form={form}
            name="signup"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your name" },
                { min: 2, message: "Name must be at least 2 characters" }
              ]}
            >
              <Input 
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />} 
                placeholder="John Doe" 
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" }
              ]}
            >
              <Input 
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />} 
                placeholder="you@example.com" 
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter a password" },
                { min: 8, message: "Password must be at least 8 characters" }
              ]}
              hasFeedback
            >
              <Input.Password 
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />} 
                placeholder="••••••••" 
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />} 
                placeholder="••••••••" 
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                size="large"
                loading={loading}
              >
                Create Account
              </Button>
            </Form.Item>
               <Divider plain>or</Divider>
              <Button 
            icon={<GoogleOutlined />} 
            block 
            size="large"
            style={{ marginBottom: "1rem" }}
          >
            Sign up with Google
          </Button>

       
            
          </Form>

          <div style={{ textAlign: "center" }}>
            <Text>Already have an account? <Link onClick={() => navigate("/signin")}>Sign in</Link></Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default SignUp;