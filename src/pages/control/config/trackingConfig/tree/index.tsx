import React from 'react'
import { Card, Button } from 'antd'
import BaseTree from '@/components/Basics/BaseTree'
const Tree = () => {
    return (
        <Card extra={<Button type="primary">新增分组</Button>} size="small" title="埋点分组" bodyStyle={{ overflow: 'hidden', height: 'calc(100vh - 210px)', marginRight: 12 }}>
            <BaseTree />
        </Card>

    )
}

export default Tree