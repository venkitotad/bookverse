import React from "react";
import { Button, Form, Input, Typography, Card, Divider, Space, message } from "antd";
import { MailOutlined, LockOutlined, GoogleOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async () => {
    
  };

  const handleForgotPassword = () => {
    const email = form.getFieldValue('email');
    if (email) {
      message.success(`Password reset link sent to ${email} (simulated)`);
    } else {
      message.warning("Please enter your email first");
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
            <Title level={3} style={{ marginBottom: 8 }}>Sign In</Title>
            <Text type="secondary">Sign in to continue your reading journey</Text>
          </div>

        

          <Form
            form={form}
            name="signin"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
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
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" }
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />} 
                placeholder="••••••••" 
                size="large"
              />
            </Form.Item>

            <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
              <Link onClick={handleForgotPassword}>Forgot Password?</Link>
            </div>
            
               

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                size="large"
                loading={loading}
              >
                Sign In
              </Button>
              
               <Divider plain>or sign in with Google</Divider>
                <Button 
            icon={<GoogleOutlined />} 
            block 
            size="large"
            style={{ marginBottom: "1rem" }}
          >
            Sign in with Google
          </Button>

      
              
            </Form.Item>
          </Form>

          <div style={{ textAlign: "center" }}>
            <Text>Don't have an account? <Link onClick={() => navigate("/signup")}>Sign up</Link></Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default SignIn;