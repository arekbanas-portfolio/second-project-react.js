import React, { Component } from 'react';
import { Translation } from 'react-i18next';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            message: '',
            send: '',
            mailSent: false,
            error: null,

            errors: {
                username: false,
                email: false,
                message: false
            }
         }

         this.messages = {
             username_incorrect: <Translation>{t => <>{t('valid-name')}</>}
             </Translation>,
             email_incorrect: <Translation>{t => <>{t('valid-email')}</>}
             </Translation>,
             message_incorrect: <Translation>{t => <>{t('valid-message')}</>}
             </Translation>,
         }

         this.handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({
                [name]: value,
            })
         }

         this.handleSubmit = (e) => {
            e.preventDefault();
            const validation = this.formValidation();
            if(validation.correct) {
                this.setState({
                    username: '',
                    email: '',
                    message: '',
                    send: <Translation>{t => <>{t('sent-msg')}</>}
                    </Translation>,

                    errors: {
                        username: false,
                        email: false,
                        message: false
                    }
                })
            } else {
                this.setState({
                    errors: {
                        username: !validation.username,
                        email: !validation.email,
                        message: !validation.message
                    }
                })
            }
         }

         this.formValidation = () => {
            const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
             let username = false;
             let email = false;
             let message = false;
             let correct = false;

             if(this.state.username.length > 3) {
                 username = true;
             }

             if(this.state.email.match(reg)) {
                 email = true;
             }

             if(this.state.message.length > 5) {
                 message = true;
             }

             if(username && email & message) {
                 correct = true;
             }

             return ({
                username,
                email,
                message,
                correct
             })
         }
    }

    componentDidUpdate() {
        if(this.state.send !== '') {
            setTimeout(() => this.setState({
                send: ''
            }), 5000)
        }
    }

    render() { 
        return ( 
            <section>
                <div className="form-contact-wrapper">
                    <div className="form-contact">
                    <h1>
                        <Translation>{t => <>{t('form')}</>}
                        </Translation>
                    </h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <label htmlFor="user">
                            <Translation>{t => <>{t('name')}</>}
                            </Translation>
                            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
                            {this.state.errors.username && <span className="error">{this.messages.username_incorrect}</span>}
                            </label>
                            
                            <label htmlFor="email">Email:
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            {this.state.errors.email && <span className="error">{this.messages.email_incorrect}</span>}
                            </label>
                            
                            <label htmlFor="message">
                            <Translation>{t => <>{t('message')}</>}
                            </Translation>
                            <textarea type="text" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
                            {this.state.errors.message && <span className="error">{this.messages.message_incorrect}</span>}
                            </label>

                            <button className="submit-form">
                                <Translation>{t => <>{t('send')}</>}
                                </Translation>
                            </button>
                        </form>
                        {this.state.send && <h2>{this.state.send}</h2>}
                    </div>
                </div>
                <div className="contact-waves">
                    <div className="header__wave header__wave1"></div>
                    <div className="header__wave header__wave2"></div>
                    <div className="header__wave header__wave3"></div>
                    <div className="header__wave header__wave4"></div>
                </div>
            </section>
         );
    }
}
 
export default Contact;