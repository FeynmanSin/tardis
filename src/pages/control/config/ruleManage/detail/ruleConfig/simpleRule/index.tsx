import React, { useState, useRef } from 'react';
import { Form, Input, Row, Col, Button, Table, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Modal from './modal';

const SimpleRule = () => {

    const [dataSource, setDataSource] = useState<{}[]>([]);
    const [count, setCount] = useState(1);
    const [editKey, setEditKey] = useState<number | string>()
    const [inputData, setInputData] = useState('')
    const modalRef = useRef();
    const handleAdd = () => {
        setEditKey(count);
        const newData = {
            count: count,
            1: '',
            2: '`Edward King ${count}`',
            3: '32',
            4: '32',
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        console.log('>>>>>>', dataSource)
    };

    const saveDataSource = (record) => {
        console.log(">>>>>>dataSource", dataSource)
        console.log('>>>>>record', record)
        let _dataSource = dataSource.map(item => {
            if (item.count == record.count) {
                item = {
                    ...record,
                    1: inputData
                };
            }
            return item
        })
        console.log('>>>>>>>dataSource', _dataSource)
        setEditKey('');
        setInputData('')
        setDataSource(_dataSource);
    }
    const cancel = (record) => {
        let _dataSource = dataSource.filter(item => item.count != record.count);
        setDataSource(_dataSource)
    }
    const isEditing = (count) => {
        console.log(">>>>>>editKey", editKey)
        console.log(">>>>>>count", count)
        if (count == editKey) {
            return true
        } else {
            return false
        }
    }
    const onChange = (e, record) => {
        setInputData(e.target.value)
    }
    const showModal = () => {
        console.log('>>>>>>111')
        modalRef.current.showModal()
    }
    const columns: ColumnsType = [
        {
            title: '指标名称',
            dataIndex: '1',
            align: "center",
            width: 400,
            render: (text, record) => {
                console.log('>>>>record', record)
                let editing = isEditing(record.count);

                console.log(">>>>>editing", editing)
                {
                    return editing ? <Input onChange={(e) => onChange(e)} /> : <span>{text}</span>
                }
            }
        },
        {
            title: '运算关系',
            dataIndex: '2',
            align: "center",
            width: 400,
            render: (text, record) => {
                let editing = isEditing(record.count);
                console.log(">>>>>editing", editing)
                {
                    return editing ? <Select style={{ width: '100%' }} /> : <span>{text}</span>
                }

            }

        },
        {
            title: '阈值',
            dataIndex: '3',
            align: "center",
            width: 400,
            render: (text, record) => {
                return <Input />
            }
        },
        {
            title: '时间限制条件',
            dataIndex: '4',
            align: "center",
            width: 400,
            render: (text, record) => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Input />
                        <Select style={{ width: 100, marginLeft: 12 }} />
                    </div>
                )
            }
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <>
                        <a onClick={() => saveDataSource(record)}>保存</a>
                        {` | `}
                        <a onClick={() => cancel(record)}>取消</a>
                    </>
                )
            }
        },
    ];



    return (
        <>
            <Form>
                <Row>
                    <Col style={{ marginRight: 12 }}>
                        <Form.Item label="埋点名称">
                            <Input.Search onSearch={showModal} />
                        </Form.Item>
                    </Col>
                    <Col style={{ marginRight: 12 }}>
                        <Form.Item label="系统名称">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 12 }}>
                        <Form.Item label="埋点分组">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col style={{ marginRight: 12 }}>
                        <Form.Item label="埋点URL">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ display: 'flex', marginBottom: 12, alignItems: 'center' }}>
                <div>预警指标：</div>
                <Button type="primary" onClick={handleAdd}>新增</Button>
            </div>
            <Table bordered columns={columns} dataSource={dataSource} pagination={false} />
            <Modal ref={modalRef} />
        </>
    )
}

export default SimpleRule