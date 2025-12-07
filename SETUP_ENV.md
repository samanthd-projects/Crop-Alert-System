# Environment Variables Setup Guide

This guide will help you set up environment variables for all three services.

## Quick Setup

### 1. Spring Boot Backend

Create `springboot-backend/.env` file with:

```env
# Server Configuration
SERVER_PORT=8080

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=farmer_details
DB_USERNAME=root
DB_PASSWORD=sam@database

# Mail Configuration (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=samanthsamanth2@gmail.com
MAIL_PASSWORD=Samanthd@123

# Weather API Configuration
WEATHER_API_BASE_URL=http://localhost:8081
WEATHER_API_CURRENT_ENDPOINT=/weather/current

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

### 2. Go Weather Service

Create `backend/.env` file with:

```env
OPENWEATHER_API_KEY=e58364c6f5bdd064916ca76878172898
```

### 3. React Frontend

Create `farmer-weather-dashboard/.env` file with:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_WEATHER_API_BASE_URL=http://localhost:8081
```

## Important Notes

1. **All `.env` files are in `.gitignore`** - They won't be committed to GitHub
2. **Share `.env` files securely** - Use encrypted channels when sharing with team members
3. **Never commit real passwords** - Only `.env.example` files are in the repository
4. **Update for production** - Change values when deploying to production

## Verification

After creating `.env` files:

1. **Go Service**: Restart the Go service - it will load `.env` automatically
2. **Spring Boot**: Restart the Spring Boot app - it will load `.env` on startup
3. **React**: Restart the dev server - Vite will load `.env` automatically

## Troubleshooting

- If environment variables aren't loading, check:
  - File is named exactly `.env` (not `.env.txt`)
  - File is in the correct directory (same as `main.go` or `pom.xml`)
  - No syntax errors in `.env` file (no spaces around `=`)
  - Restart the service after creating/updating `.env`

