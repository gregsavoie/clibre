"""
WSGI config for clibre project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os, sys, site

from django.core.wsgi import get_wsgi_application
from django.conf import settings

site.addsitedir(settings.BASE_DIR + "/venv/lib/python3.4/site-packages")
sys.path.append(settings.BASE_DIR)
sys.path.append(settings.BASE_DIR + "/clibre")
os.environ["DJANGO_SETTINGS_MODULE"] = "clibre.settings"
activate_env=settings.BASE_DIR + "/venv/bin/activate_this.py"
exec(open(activate_env, 'r').read())

application = get_wsgi_application()
