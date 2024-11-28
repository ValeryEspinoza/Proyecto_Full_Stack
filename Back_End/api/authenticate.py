import jwt
from datetime import datetime, timedelta
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.conf import settings
from rest_framework.authentication import CSRFCheck
from rest_framework import exceptions

# Secret key and algorithm for signing tokens
SECRET_KEY = settings.SECRET_KEY
ALGORITHM = "HS256"

# Utility functions for token handling
def generate_token(data, expiry_minutes=30):
    """
    Generate a JWT token.
    """
    expiration = datetime.utcnow() + timedelta(minutes=expiry_minutes)
    payload = {
        "data": data,
        "exp": expiration,
        "iat": datetime.utcnow()
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token):
    """
    Decode a JWT token.
    """
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise ValueError("Token has expired.")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid token.")

def enforce_csrf(request):
    """
    Enforce CSRF validation for the request.
    """
    check = CSRFCheck()
    check.process_request(request)
    reason = check.process_view(request, None, (), {})
    if reason:
        raise exceptions.PermissionDenied(f"CSRF Failed: {reason}")

# Custom Authentication Class
class CustomAuthentication(JWTAuthentication):
    """
    Custom authentication class to handle JWT and CSRF enforcement.
    """
    def authenticate(self, request):
        """
        Authenticate the user using JWT from cookies or headers and enforce CSRF.
        """
        header = self.get_header(request)
        raw_token = None

        if header is None:
            raw_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
        else:
            raw_token = self.get_raw_token(header)

        if raw_token is None:
            return None

        # Validate the token
        validated_token = self.get_validated_token(raw_token)

        # Enforce CSRF check
        enforce_csrf(request)

        # Return the user and validated token
        return self.get_user(validated_token), validated_token
