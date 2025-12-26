# VisionCore Dynamics

## Project Overview
**VisionCore Dynamics** is a Django-based web application. It is currently set up with the Django REST Framework and configured for static file serving using Whitenoise. The project structure follows standard Django conventions.

### Tech Stack
-   **Framework:** Django 6.0
-   **API:** Django REST Framework
-   **Server:** Gunicorn
-   **Static Files:** Whitenoise
-   **Database:** SQLite (default), with `psycopg2-binary` included for PostgreSQL support.

## Architecture
-   **`visioncore/`**: The project configuration directory containing `settings.py`, `urls.py`, and WSGI/ASGI configs.
-   **`landing/`**: A Django app intended for the landing page logic. Currently contains basic scaffolding (empty models).
-   **`staticfiles/`**: Directory for collected static files (CSS, JS, Images).

## Building and Running

### Prerequisites
-   Python 3.10+
-   Virtual environment (recommended)

### Installation
1.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
2.  **Apply Migrations:**
    ```bash
    python manage.py migrate
    ```

### Running the Application

**Development Server:**
```bash
python manage.py runserver
```

**Production Server (Gunicorn):**
```bash
gunicorn visioncore.wsgi:application --log-level debug --reload --bind 127.0.0.1:8000
```
*Note: The `--reload` flag is useful for development but should be omitted in production.*

## Key Files
-   **`visioncore/settings.py`**: Main configuration file. Includes `rest_framework` and `landing` in `INSTALLED_APPS`, and configures `whitenoise` middleware.
-   **`visioncore/urls.py`**: Root URL routing.
-   **`landing/models.py`**: Data models for the landing app (currently empty).
-   **`requirements.txt`**: List of Python dependencies.

## Development Conventions
-   **Static Files:** Managed via Whitenoise. Run `python manage.py collectstatic` to gather static files into `staticfiles/`.
-   **API:** `djangorestframework` is installed, suggesting future API development.
-   **Database:** configured for SQLite by default. If switching to PostgreSQL, ensure `DATABASES` in `settings.py` is updated.
