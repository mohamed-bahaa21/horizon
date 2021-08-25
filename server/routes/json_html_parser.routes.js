const path = require('path');
const express = require('express');
const route = express.Router();

const JsonHtmlParserCtrl = require(path.resolve(__basename, 'controllers', 'json_html_parser.controllers'));

// parser
route.get('/', JsonHtmlParserCtrl.getLandingLocal);

module.exports = route;