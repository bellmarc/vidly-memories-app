import React from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withUsers} from '../context/UserProvider.js';

class LoginForm extends React.Component {
  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // value of user
        this.props.userLogin(values)
        this.props.form.resetFields()
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="login-form-container">

    <article className="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
      <h2 className="login-header">Log in to Vidly</h2>
      <Form onSubmit={this.handleLoginSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please type your email address!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email Address"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please type your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
            )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
          <div>
          New User? <Link to={"/signup"} className="signup-link-btn">SignUp Here</Link>
          </div>
        </Form.Item>
      </Form>
    </article>
    </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);



export default withUsers(Login)