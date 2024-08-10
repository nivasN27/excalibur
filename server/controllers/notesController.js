import dataBase from '../utils/dataBase.js';
import upload from '../utils/storage.js'

const notesController = (app) => {
    app.get('/notes', (_, res) => {
        dataBase.query('SELECT * FROM keep_notes', (error, results) => {
            if (error) {
                console.error('Error fetching notes:', error);
                return res.status(500).json({ status: 'error', message: 'Failed to fetch notes' });
            }
            const updatedResults = results.map(note => {
                const imageListString = note.imageList;
                const imageListArray = imageListString
                    ? imageListString.split(',').filter(item => item.trim() !== '') 
                    : [];
    
                return {
                    ...note,
                    imageList: imageListArray
                };
            });
            res.json({status: 'success', data: updatedResults });
        });
    });

    app.post('/add',upload.array('uploadfile'), (req, res) => {
        const { content } = req.body;
        let imageList = '';
         req.files.map(file => {
            imageList += file.path + ',';
        });

        console.log(req.body, imageList);
            dataBase.query('INSERT INTO keep_notes (content, imageList) VALUES (?, ?)', [content, imageList], (error, results) => {
                if (error) {
                    console.error('Error adding note:', error);
                    return res.status(500).json({ status: 'error', message: 'Failed to add note' });
                }
                res.json({ status: 'added', id: results.insertId });
            });
    });
    
    
};

export default notesController;
