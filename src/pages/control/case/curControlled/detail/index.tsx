import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'umi';
import { Tabs, Button } from 'antd';
import type { TabsProps } from 'antd';
import Detail from './detail';
import History from './history';
import Modal from './modal';

const Index: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(">>>>>>>location", location)
    const modalRef = useRef<HTMLInputElement | null>(null);

    const onChange = (key: string) => {
        console.log(key);
    };
    const back = () => {
        // @ts-ignore
        navigate(`${location.state.formPage}`, { replace: true })
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '预警明细',
            children: <Detail modalRef={modalRef} />,
        },
        {
            key: '2',
            label: '历史控制记录',
            children: <History modalRef={modalRef} />,
        },
    ];

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarExtraContent={<Button onClick={back}>返回</Button>} />
            {/* @ts-ignore */}
            <Modal ref={modalRef} />
        </>
    )
}

export default Index
