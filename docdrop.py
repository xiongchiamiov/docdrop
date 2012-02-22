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
		documentedSource = generate_documentation(formInput['docableFile'])
		#import pdb; pdb.set_trace()
		return documentedSource

if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()

