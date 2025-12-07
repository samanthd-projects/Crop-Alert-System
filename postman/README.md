# Postman Collections

This folder contains Postman collections for testing both backend services.

## Collections

### 1. Spring Boot Backend - Crop Monitoring System
**File:** `SpringBoot_Backend.postman_collection.json`

Contains all endpoints for the Spring Boot backend:
- **Farmer Service**: Signup, Login, Get Farmer, Update Farmer
- **Crop Service**: Add, Get, Update, Delete crops
- **Weather Service**: Get current weather and check rules
- **Alert Service**: Get alerts by farmer, recent alerts, alerts by crop
- **Notification Service**: Get all notifications, notifications by event

### 2. Go Weather Service
**File:** `Go_Weather_Service.postman_collection.json`

Contains endpoints for the Go weather service:
- Get Current Weather
- Get Weather History (7 days)

## How to Import

1. Open Postman
2. Click **Import** button (top left)
3. Select the JSON file(s) you want to import
4. Click **Import**

Alternatively:
- Drag and drop the JSON files into Postman

## Usage

### Spring Boot Backend
- Base URL: `http://localhost:8080`
- Make sure Spring Boot is running on port 8080

### Go Weather Service
- Base URL: `http://localhost:8081`
- Make sure Go service is running on port 8081

## Testing Flow

1. **Start with Farmer Signup**
   - Use "Signup" request to create a new farmer
   - Note the `id` from the response

2. **Add Crops**
   - Use "Add Crop" request with the farmer ID
   - Set appropriate thresholds for testing

3. **Get Weather**
   - Use "Get Current Weather" to fetch weather
   - This will automatically check rules and generate alerts

4. **Check Alerts**
   - Use "Get Alerts by Farmer" to see generated alerts
   - Use "Get Recent Alerts" to see alerts from last 7 days

5. **Check Notifications**
   - Use "Get All Notifications" to see notification logs

## Example Request Bodies

### Signup Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "password123",
  "location": "bangalore"
}
```

### Add Crop Request
```json
{
  "cropName": "Tomato",
  "season": "Kharif",
  "minTemp": 15.0,
  "maxTemp": 35.0,
  "minRain": 50.0,
  "maxRain": 150.0,
  "minWind": 5.0,
  "maxWind": 30.0,
  "emailEnabled": true,
  "smsEnabled": true
}
```

## Notes

- Update the `farmerId` and `cropId` in requests based on your actual data
- The Go weather service must be running for Spring Boot weather endpoints to work
- All endpoints support CORS for frontend integration

