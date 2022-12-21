'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


const multer = require('multer');

// subida de imágenes mediante librería de NodeJS multer
const storage = multer.diskStorage({
	
	destination: function (req, file, cb) {
		cb(null, './uploads/users')
	},

	filename: function (req, file, cb) {
		cb(null, "user" + Date.now() + file.originalname);
	}
});

var md_auth = true;
const upload = multer({storage : storage});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.post('/upload-avatar', ProjectController.getImageFile /* ProjectController.uploadAvatar */ );
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;