
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let userId = req.params.id;
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, userId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}