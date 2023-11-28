import React from 'react';
import { Row, Col } from 'antd';
import Tree from './tree';
import Detail from './detail'

const TrackingConfig = () => {
    return (
        <Row gutter={10}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <Tree />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} >
                <Detail />
            </Col>
        </Row>
    )
}

export default TrackingConfig