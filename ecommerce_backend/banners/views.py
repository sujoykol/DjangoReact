from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Banner
from .serializers import BannerSerializer

class BannerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Banner.objects.filter(
        is_active=True
    ).order_by("order")

    serializer_class = BannerSerializer
    permission_classes = [AllowAny]

    def list(self, request, *args, **kwargs):
        print("===== BannerViewSet reached =====")
        return super().list(request, *args, **kwargs)