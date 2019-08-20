import React, {Component} from 'react';
import BasketForm from './BasketForm';
import {connect} from 'react-redux';

class BasketFormContainer extends Component {
    state={name: '', surname: '', phone: '', email: ''};

    onChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value})
    }

    buy = (e) => {
        const {name,surname,phone,email} = this.state;
        const {basket} = this.props;
        document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(name);
        document.cookie = encodeURIComponent('surname') + '=' + encodeURIComponent(surname);
        document.cookie = encodeURIComponent('phone') + '=' + encodeURIComponent(phone);
        document.cookie = encodeURIComponent('email') + '=' + encodeURIComponent(email);
        document.cookie = encodeURIComponent('userAgent') + '=' + encodeURIComponent(navigator.userAgent);
        document.cookie = encodeURIComponent('cart') + '=' + encodeURIComponent(basket);
        axios.post('http://localhost:4000/orders', {
            "user": {"name": name,
            "surname": surname,
            "phone": phone,
            "email": email,
            "userAgent": navigator.userAgent
            },
            "cart": basket
        })
       
    }

    render() {
        return (
            <div><BasketForm buy={this.buy} onChange={this.onChange}{...this.state}/></div>
        )
    }
}

const mapStateToProps = ({basket}) => {
    return {
        basket
    }
}

export default connect(mapStateToProps)(BasketFormContainer);