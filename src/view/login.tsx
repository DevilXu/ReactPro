import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';

const FormItem = Form.Item;

type MyProps = {
  form: any
}
class Login extends React.Component<MyProps> {
  handleSubmit() {
    window.location.href="/about/haha"
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" onClick={ this.handleSubmit }>Primary</Button>
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(Login);;
