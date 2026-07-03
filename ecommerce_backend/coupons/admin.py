from django.contrib import admin
from .models import Coupon  # Import your coupon model here

# Register your model to the admin panel
admin.site.register(Coupon)