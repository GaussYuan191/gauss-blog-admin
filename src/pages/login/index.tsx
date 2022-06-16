import { useLocalStorageState, useRequest, useMount } from "ahooks";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Card } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { FormProps } from "antd/lib/form/Form";
import { RouterProps } from "react-router";
import { login } from "../../utils";
import { setToken } from "../../utils";
import "./index.scss";

const LoginForm = (props: FormProps & RouterProps) => {
  /** 使用useLocalStorageState aHooks 保存用户勾选状态 */
  const [remember, setRemember] = useLocalStorageState<boolean>("remember", {
    defaultValue: false,
  });
  /** 创建表单实例 */
  const [form] = Form.useForm();
  /** 封装登录接口 */
  const userLogin = (userInfo: object): Promise<object> => {
    return new Promise(async (resolve, reject) => {
      let { data } = await login(userInfo);
      if (data.code && data.code == 1) resolve(data.result);
      else reject(data);
    });
  };
  /** 使用 useReuqest aHooks 处理用户登录*/
  const { run } = useRequest(userLogin, {
    manual: true,
    onSuccess: (result: object) => {
      setToken(result);
      props.history.push("/home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  /** 用户登录 */
  const onFinish = (values: any) => {
    //用户勾选
    if (remember) {
      window.localStorage.setItem("userInfo", JSON.stringify(values));
    }
    run(values);
  };
  /** 保存账号密码 */
  const rememberAcct = (e: CheckboxChangeEvent): void => {
    setRemember(e.target.checked);
  };
  /** 组件挂载时 加载本地存储的用户信息 */
  useMount(() => {
    if (remember) {
      let userInfo = JSON.parse(
        window.localStorage.getItem("userInfo") || "{}"
      );
      form.setFieldsValue({ ...userInfo });
    }
  });
  return (
    <div id="login">
      <div className="content">
        <Card
          className="login-card"
          hoverable
          title="博客管理系统后端"
          headStyle={{ textAlign: "center", fontSize: 18 }}
        >
          <Form
            form={form}
            className="login-form"
            initialValues={{ remember: remember }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                allowClear
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                allowClear
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox onChange={rememberAcct} checked={remember}>
                保持登录
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
