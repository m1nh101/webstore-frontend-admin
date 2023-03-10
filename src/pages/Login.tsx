import { Button, Form, Input } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredential } from "../common/type";
import useAuth from "../hooks/useAuth";
import styles from './login.module.scss'

const defaultCredential: UserCredential = {
  username: '',
  password: ''
}

const centerForm: string = `${styles.fit_to_screen} ${styles.center_item} ${styles.bg}`;

const Login: React.FC = () => {
  const [credential, setCredential] = useState<UserCredential>(defaultCredential);

  const [verify, setVerify] = useState<boolean>(false);

  const { auth } = useAuth();

  const navigate = useNavigate();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCredential({ ...credential, [event.target.name]: event.target.value })
  };

  useEffect(() => {
    if(verify) navigate('/');
  }, [verify, navigate])

  const onClickHandle = async (): Promise<any> => await auth(credential).then(res => {
    if(res === 'Completed') setVerify(true);
  });

  return (
    <div className={centerForm}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        size="large"
        className={styles.form_style}
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập email/ tên đăng nhập!' }]}
        >
          <Input name="username" onChange={onInputChange} />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password name="password" onChange={onInputChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={onClickHandle}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;