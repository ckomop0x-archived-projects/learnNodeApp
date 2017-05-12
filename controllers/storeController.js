exports.homePage = (req, res) => {
	console.log(11)
	res.render('index')
}

exports.addStore = (req, res) => {
	res.render('editStore', { title: 'Add Store' })
};