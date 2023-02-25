import { Button, Form, Input, Space } from "antd";
import { ChangeEvent, useState } from "react";
import styles from './login.module.scss'

const defaultCredential = {
  username: '',
  password: ''
}

type UserCredential = typeof defaultCredential;

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const centerForm: string = `${styles.fit_to_screen} ${styles.center_item} ${styles.bg}`;

const Login: React.FC = () => {
  const [credential, setCredential] = useState<UserCredential>(defaultCredential);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCredential({ ...credential, [event.target.name]: event.target.value })
  };

  return (
    <div className={centerForm}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        className={styles.form_style}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập email/ tên đăng nhập!' }]}
        >
          <Input name="username" onChange={onInputChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password name="password" onChange={onInputChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;