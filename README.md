Easily see how your file will render in the literate programming style
popularized by [docco].

[docco]: http://jashkenas.github.com/docco/

docdrop was inspired by [markdrop] and uses a modified version of [pycco].

[markdrop]: https://github.com/zachwill/markdrop
[pycco]: http://fitzgen.github.com/pycco/

# Installation and Usage

	$> git clone git://github.com/xiongchiamiov/docdrop.git
	$> cd docdrop
	$> virtualenv --no-site-packages env
	$> source env/bin/activate
	$> pip install -r requirements.txt
	$> python docdrop.py

You will probably also want to turn off debug information, which you can do by
adding `web.config.debug = False` after importing the `web` module.

# Q & A

**This has lots of gaping security holes!**

Probably, yes; I haven't given that too much of a look yet.

**The rendered documentation looks a bit funky.**

I noticed some issues with the files I was testing, but those problems existed
in pycco as well (that is, they're not my fault).  I'll be trying to fix these
and get them merged upstream.

