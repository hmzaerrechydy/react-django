# react-django
An npm package to integrate react in a Django project with one command.

**Link**: https://www.npmjs.com/package/react-plus-django

## Install 
In the terminal go to your Django project directory and type: 
```

npm i react-plus-django

```

## Manual work
After installing the package you have to do the following: 
1. Add **frontend** into installed apps, this package will add a new app into your project so you need to add it to your installed apps in **settings.py**.
2. In the container of your project (the folder that contains settings.py) add the following path to the file **urls.py** inside **urlpatterns** and don't forget to import **include**:
```python
# your file by default imports path, add a comma and add include like this: 
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
# here is the line you need to add inside urlpatterns:
    path('', include('frontend.urls'))
]
```
3.Finally don't forget to run webpack, in the terminal go to the folder frontend, and run the following command: 
```
npm run dev
```
