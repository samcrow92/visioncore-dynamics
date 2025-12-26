from django.shortcuts import render



# main landing page
def landing_page(request):
    return render(request, 'landing/index.html')
