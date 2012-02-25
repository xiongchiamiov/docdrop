#!/usr/bin/env python2

# May you recognize your weaknesses and share your strengths.
# May you share freely, never taking more than you give.
# May you find love and love everyone you find.

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
		# If we get the file via AJAX, it doesn't fill in the filename and such
		# properly.  Instead, the first part of the file contents is used as
		# the key. *shrug*
		if formInput['docableFile'] == {}:
			# pycco barfs if there's no file extension...
			filename = 'unknown.filename'
			code = formInput.keys()[0] + formInput[formInput.keys()[0]]
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

