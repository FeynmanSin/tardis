import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Input, Form, Row, Col, Select, Radio, DatePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import BaseTable from '@/components/Basics/BaseTable';

const Index: React.FC = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

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


    const columns: ColumnsType = [
        {
            title: '控制策略',
            dataIndex: '1',
            align: "center",
            width: 200,
        },
        {
            title: '版本号',
            dataIndex: '2',
            align: "center",
            width: 200,
        },
        {
            title: '策略描述',
            dataIndex: '3',
            align: "center",
            width: 200,
        },
    ];
    const dataSource = [
        {
            id: '3333',
            1: '拒绝访问',
            2: '20210901000001',
            3: '禁用账号，禁用1天',
        },

    ]

    const rowSelection = {
        type: 'radio',
        selectedRowKeys: selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[], selectedRows: []) => {
            console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRows(selectedRows);
        },
    };
    const selectRow = (record: any) => {
        console.log('>>>>>>', record)
        console.log('>>>>>>', selectedRowKeys)
        setSelectedRowKeys([record.id]);

        // this.setState({ selectedRowKeys: [record.id], selectedRows: [record] });
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
            title="执行控制策略"
            destroyOnClose
            maskClosable
            centered
            width={1000}
            styles={{ body: { height: 560 } }}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={onOK}
        >
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
                pagination={false}
                rowSelection={{
                    ...rowSelection,
                }}
                // @ts-ignore
                onRow={(record: any) => {
                    return {
                        onClick: () => selectRow(record), // 点击行
                    };
                }}
            />
            <Form style={{ marginTop: 20 }}>
                <Row>
                    <Col>
                        <Form.Item label="控制时间" >
                            <Row>
                                <Col>
                                    <Input />
                                </Col>
                                <Col>
                                    <Select style={{ width: 100, marginLeft: 10 }}>
                                        <Select.Option>天</Select.Option>
                                    </Select>
                                </Col>

                            </Row>
                        </Form.Item>
                    </Col>
                    <Col style={{ marginLeft: 16 }}>
                        <Form.Item label="证据固化">
                            <Row style={{ alignItems: 'center' }}>
                                <Col style={{ marginLeft: 12 }}>
                                    <Radio.Group >
                                        <Radio>全部日志</Radio>
                                        <Radio>部分日志</Radio>
                                    </Radio.Group>
                                </Col>
                                <Col style={{ marginLeft: 12 }}>
                                    <DatePicker.RangePicker format={'YYYY/MM/DD'} />
                                </Col>

                            </Row>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
            <div style={{ marginBottom: 4 }}>备注说明：</div>
            <Input.TextArea style={{ resize: 'none' }} rows={4} placeholder=' 请写明控制原因或其他相关说明' />
        </Modal >
    )
})

export default memo(Index);