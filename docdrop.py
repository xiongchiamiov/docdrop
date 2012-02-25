#!/usr/bin/env python2

import pystache
import web

from pycco.main import generate_documentation

urls = (
	'/', 'main'
)

class main:
	def GET(self):
		return pystache.render(open('docdrop.html').read(), {})
	def POST(self):
		formInput = web.input(docableFile={})
		if formInput['docableFile'] == {}:
			filename = 'unknown.unknown'
			code = formInput.keys()[0] + formInput[formInput.keys()[0]]
			#import ipdb; ipdb.set_trace()
		else:
			filename = formInput['docableFile'].filename
			code = formInput['docableFile'].value
		
		if filename == '':
			return 'Please submit a file.'
		
		documentedSource = generate_documentation(filename, code)
		return documentedSource

if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()

