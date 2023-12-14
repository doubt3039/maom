from django.urls import path

from . import views


urlpatterns = [
    path('',views.home,name='home'),
    path('upload',views.uploadpdf,name="upload"),
    path("download/<str:name>/",views.download,name="download"),
    path('login',views.login,name="login"),
    path('admin',views.admin,name="admin"),
    path("logout",views.logout,name="logout"),
    path('refresh',views.refresh,name="refresh"),
    path('loginpage',views.loginpage,name="loginpage"),
    path('getid',views.getid,name="getid")
]