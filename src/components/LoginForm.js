import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {
    emailChanged,
    passChanged,
    loginUser
} from '../actions';
import {Card, CardSection, Button, Input, Spinner} from './common';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPassChange(text) {
        this.props.passChanged(text)
    }

    onSubmit() {
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.isLoading) {
          return  <Spinner size="large"/>
        }
       return (
           <Button onPress={this.onSubmit.bind(this)}>
            Login
            </Button>
       )

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPassChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={{ fontSize: 20, color: 'red', alignSelf: 'center'}}>{this.props.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, isLoading} = auth;
    return {
        email,
        password,
        error,
        isLoading
    }
};

// const mapStateToProps = state => {
//     return {
//         email: state.auth.email,
//         password: state.auth.password,
//         error: state.auth.error
//     }
// };

export default connect(mapStateToProps, {emailChanged, passChanged, loginUser})(LoginForm);