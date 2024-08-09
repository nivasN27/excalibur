import dataBase from '../utils/dataBase.js';

const notesController = (app) => {
    app.get('/notes', (_, res) => {
        dataBase.query('SELECT * FROM keep_notes', (error, results) => {
            if (error) {
                console.error('Error fetching notes:', error);
                return res.status(500).json({ status: 'error', message: 'Failed to fetch notes' });
            }
            res.json({status: 'success', data: results });
        });
    });

    app.post('/add', (req, res) => {
        const { note } = req.query;
        
        if(note){
            dataBase.query('INSERT INTO keep_notes (content) VALUES (?)', [note], (error, results) => {
                if (error) {
                    console.error('Error adding note:', error);
                    return res.status(500).json({ status: 'error', message: 'Failed to add note' });
                }
                res.json({ status: 'added', id: results.insertId });
            });
        }  else {
            res.status(400).json({ status: 'error', message: 'Note content is required' });
        }
        
    })
    
};

export default notesController;
