/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import axios from 'axios';

async function getUser() {
    try {
        const user = await axios.get('https://randomuser.me/api/?inc=name,email,phone,picture');
        const { name, email, phone, picture } = user.data.results[0];
        return { name, email, phone, picture };
    } catch (err) {
        console.log(err);
    }
}

export default getUser;
