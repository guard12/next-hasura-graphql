import type { NextPage } from 'next'
import { useState } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

const Payment: NextPage = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  return <div>
    <Row>
      <Col span={6}>
        <Slider
          min={1}
          max={1000}
          onChange={(value) => setHeight(value)}
          value={typeof height === 'number' ? height : 0}
        />
        <InputNumber
          min={0}
          max={1000}
          style={{ margin: '0 16px' }}
          step={50}
          value={height}
          onChange={(value) => setHeight(value)}
        />
      </Col>
    </Row>
    <Row>
      <Col span={6}>
        <Slider
          min={1}
          max={1000}
          onChange={(value) => setWidth(value)}
          value={typeof width === 'number' ? width : 0}
        />
        <InputNumber
          min={0}
          max={1000}
          style={{ margin: '0 16px' }}
          step={50}
          value={width}
          onChange={(value) => setWidth(width)}
        />
      </Col>
    </Row>

    <div style={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', padding: '20px 0px'}}>
      <iframe style={{ border: 'none'}} width={`${width}px`} height={`${height}px`} src="http://localhost:3000/demo/payment" />
    </div>
  </div>
}

export default Payment;