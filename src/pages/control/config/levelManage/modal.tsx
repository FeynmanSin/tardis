import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';

const Index: React.FC = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            showModal,
        };
    }, []);

    const showModal = (record: any) => {
        setVisible(true);
    }
    const getTableData = () => {

    }

    const onCancel = () => {
        setVisible(false)
    }
    const onOK = () => {
        setVisible(false)
    }

    return (
        <Modal
            open={visible}
            title="新增预警级别"
            destroyOnClose
            maskClosable
            centered
            // width={1920}
            styles={{ body: { height: 250 } }}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={onOK}
        >
            <Form labelCol={{ span: 5 }} >
                <Form.Item label="预警级别名称">
                    <Input />
                </Form.Item>
                <Form.Item label="预警颜色">
                    <Select>
                        <Select.Option>红色</Select.Option>
                        <Select.Option>橙色</Select.Option>
                        <Select.Option>灰色</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="说明">
                    <Input.TextArea rows={4} />
                </Form.Item>

            </Form>

        </Modal>
    )
})

export default memo(Index);