const handleImgEntries = (req, res, db) => {
    const { id } = req.body;
    db('users')
        .where('id', '=', id)
        .increment('entries', 1) // increment(column, amount)
        .returning('entries')
        .then((entries) => {
            res.json(entries[0]);
        })
        .catch((err) => res.status(400).json('unable to get entries'));
}

module.exports = {
    handleImgEntries
}