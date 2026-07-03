from rest_framework import serializers

from .models import Coupon


class CouponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coupon

        fields = [
            "id",
            "code",
            "discount_percent",
            "active",
            "valid_from",
            "valid_to",
            "created_at",
        ]