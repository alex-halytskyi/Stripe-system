from django.db import models

# Create your models here.
class StripePayment(models.Model):
    user = models.CharField(max_length=250, verbose_name='User email')
    session_id = models.CharField(null=True, blank=True, max_length=500)
    payment_id = models.CharField(null=True, blank=True, max_length=500)
    services = models.JSONField(verbose_name='Purchased services', blank=True, null=True, default=list)
    status = models.CharField(null=True, blank=True, max_length=100)
    created_at = models.DateTimeField(verbose_name='Create date', auto_now_add=True)

    def __str__(self):
        return f'Stripe Payment: {self.user}'

    class Meta:
        verbose_name = 'Stripe Payment'