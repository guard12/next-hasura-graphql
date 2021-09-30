import type { NextPage } from 'next'
import { useState } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

const Payment: NextPage = () => {
  const [width, setWidth] = useState(400)
  const [height, setHeight] = useState(800)
  const [background, setBackground] = useState("fff")
  return <div>
    <div style={{ padding: "20px", borderBottom: "1px solid black"}}>
      <Row gutter={16}>
      <Col span={1}>
          Height:
        </Col>
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
          /> px
        </Col>
        <Col span={2}>
          Background:
        </Col>
        <Col span={1}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#20232a", color: "white" }} onClick={() => setBackground("#20232a")}>Dark</div>
        </Col>
        <Col span={1}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "white", color: "black", border: "1px solid black" }} onClick={() => setBackground("white")}>Light</div>
        </Col>
        <Col span={1}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#80808014", color: "black" }} onClick={() => setBackground("#80808014")}>Gray</div>
        </Col>
        <Col span={1}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#452650", color: "white" }} onClick={() => setBackground("#452650")}>Purple</div>
        </Col>
      </Row>
      <Row>
        <Col span={1}>
          Width:
        </Col>
        <Col span={6}>
          <Slider
            min={1}
            max={1000}
            onChange={(value) => setWidth(value)}
            value={typeof width === 'number' ? width : 0}
          />
          <InputNumber
            title="Width"
            min={0}
            max={1000}
            style={{ margin: '0 16px' }}
            step={50}
            value={width}
            onChange={(value) => setWidth(value)}
          /> px
        </Col>
      </Row>
    </div>
    <div style={{ backgroundColor: background, display: 'flex', justifyContent: 'center', padding: '20px 0px' }}>
      <iframe style={{ border: 'none' }} width={`${width}px`} height={`${height}px`} src={process.env.NEXT_PUBLIC_PAYMENT_URL} />
    </div>
  </div>
}

export default Payment;