import { Card, List, Row, Col, Input, Divider, BackTop } from 'antd';
import React, { Component } from 'react';
import './fontStyles/fontFace.scss'
import './App.css';

const coverDiv = (item) => {
  return (
    <div style={{ background: '#e3e9eb', height: '180px', lineHeight: '180px' }}>
      <h1 style={{ fontFamily: `${item.name}` }}>{item.name}</h1>
    </div>
  )
}

class App extends Component {
  state = {
    data: []
  }

  reset = () => {
    this.setState({
      data: window.globalData
    })
  }

  onFocus = () => {
    this.reset()
  }

  onChange = (e) => {
    const { value } = e.target;
    console.log(value)
    if (value.length === 0) {
      this.reset()
    }
  }

  onSearch = (text) => {
    const result = this.state.data.filter((item) => {
      return item.name.indexOf(text) !== -1
    })

    console.log(result)

    this.setState({
      data: result
    })
  }

  render() {
    return (
      <div className="App">
        <BackTop />
        <Row align="middle" style={{ height: '300px', backgroundImage: "linear-gradient(#fff, #f0f4f5)" }}>
          <Col offset={8} span={8}>
            <Input.Search
              placeholder="输入字体名称"
              size="large"
              onSearch={this.onSearch}
              onFocus={this.onFocus}
              onChange={this.onChange}
            />
          </Col>
        </Row>
        <Row style={{ background: '#f0f4f5' }}>
          <Divider />
          <Col span={16} offset={4}>
            <div>
              <List
                grid={{
                  gutter: 8, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 4,
                }}
                dataSource={this.state.data}
                renderItem={
                  (item) => (
                    <List.Item>
                      <a href={item.url}>
                      <Card
                        hoverable
                        cover={coverDiv(item)}
                      >
                        <Card.Meta title={item.name} />
                      </Card>
                      </a>
                    </List.Item>
                  )
                }
              ></List>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      data: window.globalData
    })
  }



}

export default App;
