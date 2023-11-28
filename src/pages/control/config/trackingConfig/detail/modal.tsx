import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker, Radio } from 'antd';

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
            title="添加URL"
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
                <Form.Item label="埋点URL">
                    <Input />
                </Form.Item>
                <Form.Item label="埋点状态">
                    <Radio.Group>
                        <Radio>启用</Radio>
                        <Radio>停用</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="开始时间">
                    <DatePicker />
                </Form.Item>

                <Form.Item label="结束时间">
                    <DatePicker />
                </Form.Item>
            </Form>

        </Modal>
    )
})

export default memo(Index);