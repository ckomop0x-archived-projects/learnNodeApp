const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');

const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);

// Add store card
router.post('/add',
	storeController.upload,
	catchErrors(storeController.resize),
	catchErrors(storeController.createStore)
);

// Edit store card
router.post('/add/:id',
	storeController.upload,
	catchErrors(storeController.resize),
	catchErrors(storeController.updateStore)
);
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

// Show store
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

// Tags page
router.get('/tags', catchErrors(storeController.getStoreByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoreByTag));

// Login and register
router.get('/login', catchErrors(userController.loginForm));
router.get('/register', catchErrors(userController.registerForm));

// 1. Validate the registration data
// 2. Register the user
// 3. Log in user
router.post('/register',
	userController.validateRegister,
	catchErrors(userController.registerForm)
);

module.exports = router;
