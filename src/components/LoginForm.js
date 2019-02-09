import React, { Component } from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import FlexView from 'react-flexview'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import InlineMessage from '@atlaskit/inline-message'
import {Redirect} from 'react-router'

const enhance = connect(
  ({ firebase: { auth } }) => ({ auth})
)

class LoginForm extends Component {

  state = { message: { type: 'none' } }

  login = (credentials) => {
    this.props.firebase.login(credentials).then(
      function(response){
        this.setState({message: {type: 'confirmation', description: 'Login succeeded!'}})
      }.bind(this), 
      function(err){
        this.setState({message: {type: 'error', description: err.message}})
      }.bind(this)
    )
  }

  render () {
    let action = ''
    if (this.state.message.type === 'confirmation' || this.state.message.type === 'error') {
      action = <InlineMessage title={this.state.message.description} type={this.state.message.type}/>
    }
  
    return (
      <Form onSubmit={(credentials) => this.login(credentials)}>
        {({ formProps }) => (
          <form {...formProps}>
            {action}
            <Field name="email" defaultValue="" label="User name" isRequired>
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="password" defaultValue="" label="Password"isRequired>
              {({ fieldProps }) => <TextField type="password" {...fieldProps} />}
            </Field>
            <FlexView style={ {marginTop: 20} }>
              <FlexView grow={1} />
              <FlexView>
                <Button type="submit" appearance="primary">
                  Submit
                </Button>
              </FlexView>
            </FlexView>
          </form>
        )}
      </Form>
    );
  }
}

export default enhance(withFirebase(LoginForm));