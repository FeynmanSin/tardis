import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Button, Spin, Form, Input, message } from 'antd';
import { login, captcha, getRsaPublicKey } from '@/services/system/sso';
import {
  setAccessToken,
  setAccessTokenExpiresIn,
  setAcquireTokenTime,
  setRefreshToken
} from '@/utils/auth';
import { useNavigate } from 'umi';
import { CodeEnum } from '@/utils/result';
import JSEncrypt from './jsencrypt';



const Login: React.FC = () => {
  const [captChaLoading, setCaptChaLoading] = useState<any>(false);
  const [btnLoading, setBtnLoading] = useState<any>(false);
  const [captchaData, setCaptchaData] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const onFinish = async (values: API.System.LoginDTO) => {
    console.log('Received values of form: ', values);
    try {
      setBtnLoading(true);
      // 登录
      const rsa = await getRsaPublicKey();
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(rsa.data);
      if (values) {
        let loginParams: API.System.LoginDTO = { // 登录参数
          username: values.username,
          password: encrypt.encrypt(values.password as string),
          imageVerificationCode: values.imageVerificationCode,
          uuid: captchaData.uuid,
          loginMode: "IMAGE_VERIFICATION_CODE"
        };
        const res = await login({ ...loginParams });
        if (CodeEnum.SUCCESS === res.code) {
          // 设置token
          setAcquireTokenTime(new Date().getTime())
          setAccessToken(res.data.access_token);
          setAccessTokenExpiresIn(res.data.expires_in)
          setRefreshToken(res.data.refresh_token)
          message.success('登录成功！');
          // const urlParams = new URL(window.location.href).searchParams;
          // navigate(urlParams.get('redirect') || '/');
          navigate('/');
        }
      }
    } catch (error) {
      message.error('登录失败，请重试！');
    } finally {
      setBtnLoading(false);
    }
  };


  const refreshCaptcha = async () => {
    setCaptChaLoading(true);
    const res = await captcha();
    if (res.code === 200) {
      setCaptchaData(res.data);
    }
    setCaptChaLoading(false);
  }

  return (
    <div
      style={{
        width: 600,
        height: 392,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(0,0,0,1)'
      }}>
      <div style={{ marginBottom: 24, fontSize: 26, color: '#333333', fontWeight: 700 }}>Tardis</div>
      <Form
        name="normal_login"
        className="login-form"
        style={{
          width: 420
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
            style={{ height: 50 }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            style={{ height: 50 }}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          name="imageVerificationCode"
          rules={[{ required: true, message: '请输入验证码!' }]}
        >
          <div style={{ display: 'flex' }}>
            <Input
              style={{ height: 50, width: 'calc(100% - 120px)', marginRight: 10 }}
              prefix={<SafetyCertificateOutlined className="site-form-item-icon" />}
              placeholder="验证码"
            />
            <Spin spinning={captChaLoading}>
              <img style={{ width: 110, height: 50, }} src={captchaData?.imageEncode} alt="" onClick={refreshCaptcha} />
            </Spin>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              height: 50,
              background: 'rgba(245, 154, 35, 0.9215686274509803)',
              border: 'none',
              color: 'white'
            }}
            htmlType="submit"
            loading={btnLoading}
            block
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;