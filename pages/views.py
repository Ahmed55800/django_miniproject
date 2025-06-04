from django.shortcuts import render
from .models import Product

# Create your views here.

def addpage(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        price = request.POST.get('price')
        stock = request.POST.get('stock')
        seller = request.POST.get('seller')
        category = request.POST.get('category')

        product = Product(
            name=name,
            description=description,
            price=price,
            stock=stock,
            seller=seller,
            category=category,
        )
        if product.price != 0:
            product.save()
        return render(request, 'pages/addpage.html', {'message': 'Product added successfully!'})
    return render(request, 'pages/addpage.html')

def home(request):
    return render(request, 'pages/home.html', {'pro': Product.objects.all()})

def home(request):
    return render(request, 'pages/home.html', {'pro': Product.objects.all()})

