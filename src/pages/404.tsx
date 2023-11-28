import { history } from 'umi';
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'umi';

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/home');
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backHome}>
          Back Home
        </Button>
      }
    />
  )
};

export default NoFoundPage;
