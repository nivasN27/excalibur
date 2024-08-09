import express from 'express';

const note = express()

note.get('/notes', (_, res) => {
    const obj = {
        id: 1,
        note: 'Hello there',
        imageList: []
    }
    return res.json({
        data: obj
    })
})

export default note;
