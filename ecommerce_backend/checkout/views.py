from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import ShippingAddress
from .serializers import ShippingAddressSerializer


class ShippingAddressViewSet(viewsets.ModelViewSet):
    serializer_class = ShippingAddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ShippingAddress.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)