import React, { useRef } from 'react'
import { Card, Form, Row, Col, Input, Select, Button } from 'antd';

import DetailTable from './detailTable';
import Modal from './modal';

const Detail = () => {
    const modalRef = useRef();
    const showModal = () => {
        modalRef.current.showModal()
    }

    return (
        <Card size="small" title="埋点详情" bodyStyle={{ overflow: 'hidden', height: 'calc(100vh - 210px)' }}>
            <div style={{ display: 'flex', marginBottom: 12 }}>
                <div>当前分组：</div>
                <div>/ 新国家不良反应持有人直报系统 / 反馈数据下载</div>
            </div>
            <Form>
                <Row>
                    <Col md={10}>
                        <Form.Item label="埋点名称">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Item label="埋点名称">
                            <Select />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Item label="埋点名称">
                            <Input.TextArea rows={4} style={{ resize: 'none' }} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ marginRight: 12 }}>添加URL:</div>
                <Button type="primary" onClick={showModal}>添加</Button>
            </div>
            <DetailTable modalRef={modalRef} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
                <Button type='primary' style={{ marginRight: 12 }}>保存</Button>
                <Button>取消</Button>
            </div>
            <Modal ref={modalRef} />
        </Card>
    )
}

export default Detail;