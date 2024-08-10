import dataBase from '../utils/dataBase.js';

const notesController = (app) => {
    app.get('/notes', (_, res) => {
        dataBase.query('SELECT * FROM keep_notes', (error, results) => {
            if (error) {
                console.error('Error fetching notes:', error);
                return res.status(500).json({ status: 'error', message: 'Failed to fetch notes' });
            }
            res.json({status:true, message: 'success', data: results });
        });
    });

    app.post('/add', (req, res) => {
        const { content } = req.body;
        console.log(req.body);
        if(content){
            dataBase.query('INSERT INTO keep_notes (content) VALUES (?)', [content], (error, results) => {
                if (error) {
                    console.error('Error adding note:', error);
                    return res.status(500).json({ status: 'error', message: 'Failed to add note' });
                }
                res.json({ status: true, message:"success", id: results.insertId });
            });
        } else {
            return res.status(500).json({ status: 'error', message: 'note can not br empty' });
                }
    });

    app.put('/edit', (req, res) => {
        const { id, content } = req.body;
        console.log( req.body);
        if (id && content) {
            dataBase.query('UPDATE keep_notes SET content = ? WHERE id = ?', [content, id], (error, results) => {
                if (error) {
                    console.error('Error updating note:', error);
                    return res.status(500).json({ status: 'error', message: 'Failed to update note' });
                }
                if (results.affectedRows === 0) {
                    return res.status(404).json({ status: 'error', message: 'Note not found' });
                }
                res.json({ status: true, message: "Note edited successfully" });
            });
        } else {
            return res.status(400).json({ status: 'error', message: 'Note ID and content must be provided' });
        }
    });

    app.delete('/delete/', (req, res) => {
        const { id } = req.body;
        console.log( req.body);
        if (id) {
            dataBase.query('DELETE FROM keep_notes WHERE id = ?', [id], (error, results) => {
                if (error) {
                    console.error('Error deleting note:', error);
                    return res.status(500).json({ status: 'error', message: 'Failed to delete note' });
                }
                if (results.affectedRows === 0) {
                    return res.status(404).json({ status: 'error', message: 'Note not found' });
                }
    
                res.json({ status: true, message: "Note deleted successfully"});
            });
        } else {
            return res.status(400).json({ status: 'error', message: 'Note ID must be provided' });
        }
    });
    
    
    
    
};

export default notesController;
