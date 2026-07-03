from django.urls import path
from .views import (
    CreateOrderView,
    OrderListAPIView,
    OrderDetailAPIView,
)

urlpatterns = [
    path("create/", CreateOrderView.as_view(), name="create-order"),
    path("", OrderListAPIView.as_view(), name="order-list"),
    path("<int:pk>/", OrderDetailAPIView.as_view(), name="order-detail"),
]