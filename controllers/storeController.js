const mongoose = require('mongoose');
const Store = mongoose.model('Store')

exports.homePage = (req, res) => {
	console.log(11)
	res.render('index')
}

exports.addStore = (req, res) => {
	res.render('editStore', { title: 'Add Store' })
};

exports.createStore = (req, res) => {
	const store = new Store(req.body)
	store.save(function(err, store) {
		if(!err){
			console.log('It worked!')
			res.redirect('/');
		}
	});
};