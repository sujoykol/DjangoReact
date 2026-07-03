from rest_framework import serializers
from .models import Wishlist


class WishlistSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(
        source="product.name",
        read_only=True
    )

    product_price = serializers.DecimalField(
        source="product.price",
        max_digits=10,
        decimal_places=2,
        read_only=True,
    )

    product_image = serializers.SerializerMethodField()

    class Meta:
        model = Wishlist
        fields = [
            "id",
            "product",
            "product_name",
            "product_price",
            "product_image",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def get_product_image(self, obj):
        image = obj.product.images.filter(
            is_primary=True
        ).first()

        if image:
            request = self.context.get("request")
            return request.build_absolute_uri(image.image.url)

        return None