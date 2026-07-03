from decimal import Decimal
import uuid

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from cart.models import Cart
from .models import Order, OrderItem
from .serializers import OrderSerializer


class CreateOrderView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:
            cart = Cart.objects.get(user=request.user)

        except Cart.DoesNotExist:
            return Response(
                {"error": "Cart not found."},
                status=status.HTTP_404_NOT_FOUND
            )

        cart_items = cart.items.all()

        if not cart_items.exists():
            return Response(
                {"error": "Cart is empty."},
                status=status.HTTP_400_BAD_REQUEST
            )

        shipping_address = request.user.shipping_addresses.first()

        if not shipping_address:
            return Response(
                {"error": "Shipping address not found."},
                status=status.HTTP_400_BAD_REQUEST
            )

        subtotal = Decimal("0.00")

        for item in cart_items:
            subtotal += item.product.price * item.quantity

        shipping_charge = Decimal("50.00")

        tax = Decimal("0.00")

        grand_total = subtotal + shipping_charge + tax

        order = Order.objects.create(
            order_number=f"ORD-{uuid.uuid4().hex[:8].upper()}",
            user=request.user,
            shipping_address=shipping_address,
            subtotal=subtotal,
            tax=tax,
            shipping_charge=shipping_charge,
            grand_total=grand_total,
        )

        for item in cart_items:

            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
                subtotal=item.product.price * item.quantity,
            )

        cart_items.delete()
        cart.coupon = None
        cart.save()
        serializer = OrderSerializer(order)

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )
    
class OrderListAPIView(generics.ListAPIView):

    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(
            user=self.request.user
        ).order_by("-created_at")  

class OrderDetailAPIView(generics.RetrieveAPIView):

    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)      