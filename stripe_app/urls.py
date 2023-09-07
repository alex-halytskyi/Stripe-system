from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from stripe_app.views import *

app_name = 'Main'

urlpatterns = [
    # main menu pages
    path('', main, name='main'),
    # stripe pages
    path('stripe_pay/', stripe_pay, name='stripe_pay'),
    path('stripe/success/', stripe_pay_success, name='stripe_pay_success'),
    path('stripe/cancel/', stripe_pay_cancelled, name='stripe_pay_cancelled'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)