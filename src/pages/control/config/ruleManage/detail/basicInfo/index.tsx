import React from 'react';
import { Card, Form, Row, Col, Input, Select, Radio } from 'antd';

const BasicInfo = () => {
    return (
        <Card size='small' title="预警规则基本信息" style={{ height: '100%', marginBottom: 12 }}>
            <Form>
                <Row>
                    <Col >
                        <Form.Item label="预警类型">
                            <Select style={{ width: 200, marginRight: 12 }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="规则状态">
                            <Radio.Group style={{ marginRight: 12 }}>
                                <Radio>启用</Radio>
                                <Radio>停用</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="预警等级">
                            <Select style={{ width: 200, marginRight: 12 }} />
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 12 }}>
                        <Form.Item label="规则名称">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="计算周期">
                            <Row>
                                <Col>
                                    <Input style={{ width: 80, marginRight: 12 }} />
                                </Col>
                                <Col><span style={{ lineHeight: '30px', marginRight: 12 }}>天</span></Col>

                                <Col>
                                    <Input style={{ width: 80, marginRight: 12 }} />

                                </Col>
                                <Col><span style={{ lineHeight: '30px', marginRight: 12 }}>小时</span></Col>
                                <Col>
                                    <Input style={{ width: 80, marginRight: 12 }} />
                                </Col>
                                <Col><span style={{ lineHeight: '30px', marginRight: 12 }}>分钟</span></Col>

                            </Row>


                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item label="规则说明">
                        <Input.TextArea rows={5} style={{ width: 500 }} />
                    </Form.Item>

                </Row>
            </Form>

        </Card >
    )
}

export default BasicInfo