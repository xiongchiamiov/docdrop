#!/usr/bin/env python2

import pystache
import web

urls = (
	'/', 'main'
)

class main:
	def GET(self):
		return pystache.render(open('docdrop.html').read(), {})

if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()

