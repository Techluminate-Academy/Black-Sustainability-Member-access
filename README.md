# Black-Sustainability-Member-Access
This is a code example on how to access the api for member records from BSN Network


# Member Records API Documentation

This document explains how to access the protected Member Records API using an API token. The token is generated from our authentication system and must be included in your requests to authenticate and access member data.

---

## Overview

The Member Records API is secured via an API token that is unique to your developer account. You must include the API token as a Bearer token in the `Authorization` header when making API requests.

> **Important:**  
> - The API token is generated via our token management interface. It is displayed only once; please copy and store it securely.
> - If you lose the token, you must revoke it and generate a new one.

---

## API Endpoint

**Endpoint URL:**  



**Query Parameters:**

- `page` (optional): The page number (default is `1`).
- `limit` (optional): The number of records per page (default is `50`).

**Request Header:**  
Include the following header in your requests:

- `Authorization: Bearer YOUR_API_TOKEN_HERE`

Replace `YOUR_API_TOKEN_HERE` with your actual API token.

---

## Example Usage

### Using cURL

```bash
curl -X GET "https://yourdomain.com/api/member-records?page=1&limit=50" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_TOKEN_HERE"



async function fetchMemberRecords(apiToken) {
  try {
    const response = await fetch("https://yourdomain.com/api/member-records?page=1&limit=50", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch member records");
    }
    const data = await response.json();
    console.log("Member Records:", data);
    return data;
  } catch (error) {
    console.error("Error fetching member records:", error.message);
    return null;
  }
}

// Example usage:
const myApiToken = "YOUR_API_TOKEN_HERE"; // Replace with your actual token
fetchMemberRecords(myApiToken);



sing Postman
Create a New Request:

Set the request method to GET.
Use the URL:
bash
Copy
https://yourdomain.com/api/member-records?page=1&limit=50
Add Request Headers:

Key: Content-Type
Value: application/json
Key: Authorization
Value: Bearer YOUR_API_TOKEN_HERE
Send the Request:

Click Send and verify that you receive a JSON response containing the member records and pagination metadata.




Response Format
A successful response will return a JSON object similar to the following:


{
  "success": true,
  "page": 1,
  "limit": 50,
  "totalPages": 10,
  "totalCount": 500,
  "data": [
    {
      "_id": "64a0f1c9a3e4c123456789ab",
      "field1": "value1",
      "field2": "value2"
      // ... other member record fields ...
    }
    // More records...
  ]
}


Error Responses
401 Unauthorized:
If the API token is missing or invalid, you will receive a 401 error:


{ "success": false, "error": "Missing or invalid Authorization header" }

or

{ "success": false, "error": "Invalid API token" }



500 Internal Server Error:
If an unexpected error occurs, a 500 error with an error message will be returned:


{ "success": false, "error": "Internal server error" }



How to Obtain and Manage Your API Token
Generate Your API Token:

Sign in via our email authentication system.
Visit the token management page (e.g., /token) in your application.
Click on Generate API Token and copy the token immediately (it will be displayed only once).
Revoking and Regenerating:

If you need to revoke the current token, use the revoke functionality on the token management page.
You can then generate a new token as needed.
Storing the Token:

Important: Store your token securely (for example, in a secure password manager). Once the token is hidden, you cannot retrieve it again from the system.
