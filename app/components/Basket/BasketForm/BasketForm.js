import React from 'react';

const BasketForm = ({ name, surname, phone, email, onChange, buy }) => {
   
    return (
        <div>
            <form method="POST" onSubmit={buy}>
                <h1>Basket form</h1>
                <label>Name</label><input type='text' value={name} onChange={onChange} />
                <label>surname</label><input type='text' value={surname} onChange={onChange} />
                <label>phone</label><input type='text' value={phone} onChange={onChange} />
                <label>email</label><input type='text' value={email} onChange={onChange} />
                <button type='submit'>submit</button>
            </form> 
        </div >     
    ) 
} 

export default BasketForm;