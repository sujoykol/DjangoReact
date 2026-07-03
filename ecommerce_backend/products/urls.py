from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet,
    FeaturedProductViewSet,
    RecentProductsView,
    RelatedProductAPIView,
)

router = DefaultRouter()

router.register(
    "products",
    ProductViewSet,
    basename="products"
)

router.register(
    "featured-products",
    FeaturedProductViewSet,
    basename="featured-products"
)

urlpatterns = [

    path(
        "recent-products/",
        RecentProductsView.as_view(),
        name="recent-products"
    ),

    path(
        "products/<int:pk>/related/",
        RelatedProductAPIView.as_view(),
        name="related-products",
    ),

]

urlpatterns += router.urls