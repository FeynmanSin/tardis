import React, { useRef, useState } from 'react';
import { Button, Table, Select, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import Modal from './modal';
import BaseTable from '@/components/Basics/BaseTable';

const ComplexRule = () => {
    const [dataSource2, setDataSource2] = useState<{}[]>([]);
    const [count, setCount] = useState(1);
    const [editKey, setEditKey] = useState<number | string>()
    const [inputData, setInputData] = useState('')
    const modalRef = useRef();
    const showModal = () => {
        modalRef.current.showModal();
    }
    const getTableData = () => {

    }

    const columns: ColumnsType = [
        {
            title: '关系',
            dataIndex: '2',
            align: "center",
            width: 200,
        },
        {
            title: '系统名称',
            dataIndex: '3',
            align: "center",
            width: 120,
        },
        {
            title: '埋点分组',
            dataIndex: '4',
            align: "center",
            width: 120,
        },
        {
            title: '埋点编号',
            dataIndex: '5',
            align: "center",
            width: 120,
        },
        {
            title: '埋点名称',
            dataIndex: '6',
            align: "center",
            width: 200,
        },
        {
            title: '埋点URL',
            dataIndex: '7',
            align: "center",
            width: 200,
        },

        {
            title: '预警指标',
            dataIndex: '9',
            align: "center",
            width: 80,
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <div>
                        <a>修改</a>
                        {` | `}
                        <a >删除</a>
                    </div>
                )
            }
        },
    ];
    const dataSource = [
        {
            1: '高',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '有',
            9: '待审'
        },
        {
            1: '中',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '无',
            9: '待审'
        },
        {
            1: '低',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '有',
            9: '待审'
        },
    ]




    const handleAdd = () => {
        setEditKey(count);
        const newData = {
            count: count,
            1: '',
            2: '`Edward King ${count}`',
            3: '32',
            4: '32',
        };
        setDataSource2([...dataSource2, newData]);
        setCount(count + 1);
        console.log('>>>>>>', dataSource2)
    };

    const saveDataSource = (record) => {
        console.log(">>>>>>dataSource", dataSource2)
        console.log('>>>>>record', record)
        let _dataSource = dataSource2.map(item => {
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
        setDataSource2(_dataSource);
    }
    const cancel = (record) => {
        let _dataSource = dataSource.filter(item => item.count != record.count);
        setDataSource2(_dataSource)
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

    const columns2: ColumnsType = [
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <div>组合条件：</div>
                <Button type="primary" onClick={showModal}>新增</Button>
            </div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, marginTop: 12 }}>
                <div>组合指标：</div>
                <Button type="primary" onClick={handleAdd}>新增</Button>
            </div>
            <Table bordered columns={columns2} dataSource={dataSource2} pagination={false} />
            <Modal ref={modalRef} />
        </>
    )
}

export default ComplexRule