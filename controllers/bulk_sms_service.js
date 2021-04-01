exports.bulkSmsService = (req, res) => {
    res.status(200).json({
        message:'Data fetch succuessfully',
        data: [{
            title: 'Rating: 4.7',
            content: 'Data'
        }]
    })
}