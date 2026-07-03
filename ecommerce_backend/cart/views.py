from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from .models import Cart
from .models import CartItem

from products.models import Product

from .serializers import CartSerializer

class CartView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        if cart.coupon:

            coupon = cart.coupon
            now = timezone.now()

            invalid = (
                not coupon.active or
                coupon.valid_from > now or
                coupon.valid_to < now
            )

            if invalid:
                cart.coupon = None
                cart.save()

        #serializer = CartSerializer(cart)
        serializer = CartSerializer(
            cart,
            context={
                "request": request
            }
        )   

        return Response(serializer.data)

class AddToCartView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request):

        product_id = request.data.get(
            "product_id"
        )

        quantity = int(
            request.data.get(
                "quantity",
                1
            )
        )

        product = Product.objects.get(
            id=product_id
        )

        cart, created = Cart.objects.get_or_create(
            user=request.user
        )

        item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product
        )

        if not created:
            item.quantity += quantity
        else:
            item.quantity = quantity

        item.save()

        return Response(
            {"message": "Added to cart"}
        )


class RemoveCartItemView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def delete(
        self,
        request,
        item_id
    ):

        CartItem.objects.filter(
            id=item_id,
            cart__user=request.user
        ).delete()

        return Response(
            {"message": "Removed"}
        )


class UpdateCartItemView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def put(
        self,
        request,
        item_id
    ):

        item = CartItem.objects.get(
            id=item_id,
            cart__user=request.user
        )

        item.quantity = request.data.get(
            "quantity"
        )

        item.save()

        return Response(
            {"message": "Updated"}
        )