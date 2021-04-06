from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# To serve the single page applcation of react (ie only one index.html file in total)
index = never_cache(TemplateView.as_view(template_name="index.html"))