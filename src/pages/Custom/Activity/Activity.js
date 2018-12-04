import {  Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Form, Row, Col, Input, Select, DatePicker, Icon } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 10 },
      lg: { span: 15 },
    },
    labelCol :{
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 5 },
        lg: { span: 8 },
    }
  };

class Activity extends Component {

    render() {
        return (
            
                <Card title="仓库管理" bordered={false}>
                    <Form>

                        <Row>
                            <Col xs={24} sm={12} md={8} lg={6}  >
                                <FormItem {...formItemLayout} label="用户名"><Input  placeholder="Username" /></FormItem>
                            </Col>
                            <Col xs={24} sm={12} md={8}  lg={6}>
                                <FormItem {...formItemLayout} label="用户名"><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /></FormItem>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} >
                                <FormItem {...formItemLayout} label="用户名"><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /></FormItem>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} >
                                <FormItem {...formItemLayout} label="用户名"><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /></FormItem>
                            </Col>
                            <Col xs={24} sm={12} md={8}  lg={6}>
                                <FormItem {...formItemLayout} label="用户名"><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /></FormItem>
                            </Col>
                            <Col xs={24} {...formItemLayout} sm={12} md={8} lg={6}  >
                                <FormItem  {...formItemLayout} label="用户名"><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /></FormItem>
                            </Col>
                        </Row>

                    </Form>
                </Card>
            
        );
    }

}

export default Activity;