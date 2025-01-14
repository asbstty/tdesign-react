import React from 'react';
import { Alert, Space } from 'tdesign-react';

export default function AlertBase() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert theme="success" message="这是一条成功的消息提示" />
      <Alert theme="info" message="这是一条普通的消息提示" close />
      <Alert theme="warning" message="这是一条警示消息" close={'关闭'} />
      <Alert theme="error" message="高危操作/出错信息提示" />
    </Space>
  );
}
