from django.utils import timezone

from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from cart.models import Cart

from .models import Coupon
from .serializers import CouponSerializer


class CouponViewSet(ModelViewSet):

    permission_classes = [
        IsAuthenticated
    ]

    queryset = Coupon.objects.all()

    serializer_class = CouponSerializer

    @action(
        detail=False,
        methods=["post"],
        url_path="apply"
    )
    def apply(
        self,
        request
    ):

        code = request.data.get("code")

        if not code:
            return Response(
                {
                    "message": "Coupon code is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:

            coupon = Coupon.objects.get(
                code=code,
                active=True
            )

        except Coupon.DoesNotExist:

            return Response(
                {
                    "message": "Invalid coupon."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        now = timezone.now()

        if coupon.valid_from > now:

            return Response(
                {
                    "message": "Coupon is not active yet."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if coupon.valid_to < now:

            return Response(
                {
                    "message": "Coupon has expired."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Get user's cart
        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        # Save coupon in cart
        cart.coupon = coupon
        cart.save()

        return Response(
            {
                "message": "Coupon applied successfully.",
                "coupon": CouponSerializer(coupon).data
            },
            status=status.HTTP_200_OK
        )