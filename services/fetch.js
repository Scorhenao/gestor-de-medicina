/**CRUD */
const express = require('express');
const app = express();

export const post = (req,res) =>{
    app.post('/api/endpoint', (req, res) => {
        res.send('post');
    });
}

export const get = (req,res) =>{
    app.get('/api/endpoint', (req, res) => {
        res.send('get');
    });
}

export const update = (req,res) =>{
    app.put('/api/endpoint', (req, res) => {
        res.send('update');
    });
}

export const drop = (req,res) =>{
    app.delete('/api/endpoint', (req, res) => {
        res.send('delete');
    });
}