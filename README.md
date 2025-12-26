# My Django Project
# VisionCore Dynamics

This is a basic Django project setup.

## Setup Instructions

1.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: `venv\Scripts\activate`
    ```

2.  **Install Django:**
    ```bash
    pip install django
    ```

3.  **Start a new Django project:**
    ```bash
    django-admin startproject visioncore .
    ```
    (The `.` at the end creates the project in the current directory.)

4.  **Run migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Run the development server:**
    ```bash
    python manage.py runserver
    ```

    **Alternatively, run with GUNICORN:**
    ```bash
    gunicorn visioncore.wsgi:application --reload --bind 127.0.0.1:8000
    ```

    You can now access your project at `http://127.0.0.1:8000/`.

## Next Steps

*   Create your portfolio app: `python manage.py startapp portfolio`
*   Define models, views, and URLs.
*   Explore the Django documentation for more advanced features.