### Usage

請查閱[drf_yasg](https://github.com/axnsan12/drf-yasgt/) github找尋對應的版本，需要對應的版本有
* Django
* djangorestframework


### Installation
```cmd
$ pip install -r requestments.txt
```


### Quickstart
In settings.py:
```python
INSTALLED_APPS = [
   ...
   'django.contrib.staticfiles',  # required for serving swagger ui's css/js files
   'drf_yasg',
   ...
]
```

In urls.py:
```python
...
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

...

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
   url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   ...
]

```

### Run Server

```cmd
$ python manage.py runserver
```

點擊這個[連結](http://127.0.0.1:8000/swagger/) ，即可以看到你的user api都被列在上面