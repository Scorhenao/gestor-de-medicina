import { URL_USERS } from '../routes';

const express = require('express')
const app = express()

const nameInput = document.getElementByIdg('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const newUser = {
        name,
        email,
        password
    }

    fetch(URL_USERS, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
})