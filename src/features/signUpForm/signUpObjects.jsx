import { useState } from 'react';
import SignUpForm from './SignUpForm';

export default function CreateUser (){
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        address: '',
        postcode: '',
        email: '',
        dob: '',
        password: '',
    })
    console.log(form);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
    })
    };
}
