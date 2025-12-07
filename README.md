# Crop Monitoring System

A full-stack application for monitoring crops with weather-based alerts and notifications.

## Project Structure

```
samanth2/
├── springboot-backend/    # Spring Boot REST API
├── backend/               # Go Weather Service
└── farmer-weather-dashboard/  # React Frontend
```

## Prerequisites

- Java 17+
- Node.js 18+
- Go 1.21+
- MySQL 8.0+
- Maven 3.6+

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd samanth2
```

### 2. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE farmer_details;
```

2. The database schema will be automatically created on first run.

### 3. Environment Variables Setup

#### Spring Boot Backend

1. Copy the example environment file:
```bash
cd springboot-backend
cp .env.example .env
```

2. Edit `.env` and fill in your values:
```env
# Server Configuration
SERVER_PORT=8080

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=farmer_details
DB_USERNAME=root
DB_PASSWORD=your_database_password_here

# Mail Configuration (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_email_app_password_here

# Weather API Configuration
WEATHER_API_BASE_URL=http://localhost:8081
WEATHER_API_CURRENT_ENDPOINT=/weather/current

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

**Note for Gmail:** You need to generate an App Password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate an App Password for "Mail"
4. Use that password in `MAIL_PASSWORD`

#### Go Weather Service

1. Copy the example environment file:
```bash
cd backend
cp .env.example .env
```

2. Edit `.env` and add your OpenWeatherMap API key:
```env
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Get your free API key from: https://openweathermap.org/api

#### React Frontend

1. Copy the example environment file:
```bash
cd farmer-weather-dashboard
cp .env.example .env
```

2. Edit `.env` if you need to change API URLs:
```env
VITE_API_BASE_URL=http://localhost:8080
VITE_WEATHER_API_BASE_URL=http://localhost:8081
```

### 4. Running the Application

#### Start Go Weather Service (Terminal 1)
```bash
cd backend
go mod download
go run main.go
```
Service will run on `http://localhost:8081`

#### Start Spring Boot Backend (Terminal 2)
```bash
cd springboot-backend
mvn clean install
mvn spring-boot:run
```
Backend will run on `http://localhost:8080`

#### Start React Frontend (Terminal 3)
```bash
cd farmer-weather-dashboard
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

### 5. Access the Application

Open your browser and navigate to: `http://localhost:5173`

## Features

- **User Authentication**: JWT-based authentication with email/password
- **Crop Management**: Add, edit, delete crops with weather thresholds
- **Weather Monitoring**: Real-time weather data from OpenWeatherMap API
- **Alert System**: Automated alerts when weather exceeds crop thresholds
- **Email Notifications**: Email alerts sent once per day when thresholds are exceeded
- **Dashboard**: Real-time weather display and recent alerts

## Environment Variables Reference

### Spring Boot Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `SERVER_PORT` | Spring Boot server port | `8080` |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_PORT` | MySQL port | `3306` |
| `DB_NAME` | Database name | `farmer_details` |
| `DB_USERNAME` | Database username | `root` |
| `DB_PASSWORD` | Database password | *(required)* |
| `MAIL_HOST` | SMTP host | `smtp.gmail.com` |
| `MAIL_PORT` | SMTP port | `587` |
| `MAIL_USERNAME` | Email address | *(required)* |
| `MAIL_PASSWORD` | Email app password | *(required)* |
| `WEATHER_API_BASE_URL` | Go weather service URL | `http://localhost:8081` |
| `CORS_ALLOWED_ORIGINS` | Allowed CORS origins | `http://localhost:5173,http://localhost:3000` |

### Go Weather Service (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |

### React Frontend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Spring Boot API URL | `http://localhost:8080` |
| `VITE_WEATHER_API_BASE_URL` | Go weather service URL | `http://localhost:8081` |

## Security Notes

- **Never commit `.env` files** - They are already in `.gitignore`
- **Share `.env` files securely** - Use encrypted channels or password managers
- **Use App Passwords for Gmail** - Never use your regular Gmail password
- **Keep API keys secure** - Don't share them publicly

## Deployment

For production deployment:

1. Update `.env` files with production values
2. Set environment variables on your hosting platform
3. Update CORS settings for your production domain
4. Use secure database credentials
5. Configure production email service

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2-Step Verification is enabled
- Review application logs for errors

### Weather API Errors
- Verify OpenWeatherMap API key is valid
- Check API key quota/limits
- Ensure Go service is running

## License

This project is for educational purposes.

