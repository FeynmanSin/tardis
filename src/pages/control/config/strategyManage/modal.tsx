import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Form, Input, Select, Row, Col } from 'antd';

const searchFormConfig = [
    {
        label: '操作时间',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '系统名称',
        type: 'input',
        id: '1'
    },
    {
        label: '埋点名称',
        type: 'input',
        id: '2'
    },
    {
        label: '埋点URL',
        type: 'input',
        id: '3'
    },
    {
        label: '日志固化状态',
        type: 'radio',
        id: '7',
        options: [
            { id: '', name: '全部' },
            { id: '1', name: '已固化' },
            { id: '2', name: '未固化' },
        ]

    },
]




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
            title="新增策略"
            destroyOnClose
            maskClosable
            centered
            // width={1920}
            styles={{ body: { height: 300 } }}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={onOK}
        >
            <Form labelCol={{ span: 4 }} >
                <Form.Item label="控制策略">
                    <Select>

                    </Select>
                </Form.Item>
                <Form.Item label="控制方式">
                    <Select>

                    </Select>
                </Form.Item>
                <Form.Item label="控制时间">
                    <Row>
                        <Col>
                            <Input style={{ width: 261, marginRight: 12 }} />
                        </Col>
                        <Col>
                            <Select style={{ width: 120 }}>
                            </Select>
                        </Col>
                    </Row>

                </Form.Item>
                <Form.Item label="提示信息">
                    <Input.TextArea rows={4} />
                </Form.Item>

            </Form>

        </Modal>
    )
})

export default memo(Index);