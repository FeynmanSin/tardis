import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Button } from 'antd';
import SimpleRule from '../simpleRule';




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


    const onCancel = () => {
        setVisible(false)
    }
    const onOK = () => {
        setVisible(false)
    }

    return (
        <Modal
            open={visible}
            title="选择埋点"
            destroyOnClose
            maskClosable
            centered
            width={1920}
            styles={{ body: { height: 560 } }}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={onOK}
        >
            <SimpleRule />
        </Modal>
    )
})

export default memo(Index);