import React, { Component } from 'react';

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
             username_incorrect: 'Nazwa użytkownika musi mieć conajmniej 3 znaki.',
             email_incorrect: 'Podano nieprawidłowy adres email.',
             message_incorrect: 'Wiadomosć musi mieć conajmniej 5 znaków'
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
                    send: 'Formularz został wysłany!',

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
                    <h2>Formularz kontaktowy:</h2>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <label htmlFor="user">Imię:
                            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
                            {this.state.errors.username && <span className="error">{this.messages.username_incorrect}</span>}
                            </label>
                            
                            <label htmlFor="email">Email:
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            {this.state.errors.email && <span className="error">{this.messages.email_incorrect}</span>}
                            </label>
                            
                            <label htmlFor="message">Wiadomość:
                            <textarea type="text" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
                            {this.state.errors.message && <span className="error">{this.messages.message_incorrect}</span>}
                            </label>

                            <button className="submit-form">Wyślij</button>
                        </form>
                        {this.state.send && <h3>{this.state.send}</h3>}
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