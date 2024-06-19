# Lendsqr API Automated Tests

This repository contains automated test scripts for the Lendsqr API. The tests cover the Signup and Login functionalities.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
```
git clone https://github.com/siccoo/qa-test
cd qa-test
```

### Install:
```
npm install
```

### Running the Tests
```
npm test
```

## Test Results Summary
```
- Signup API
Test Case 1: Signup a new user successfully

Result: Passed
Response Time: 120 ms
Test Case 2: Fail with invalid email

Result: Passed
Response Time: 80 ms
Test Case 3: Fail with weak password

Result: Passed
Response Time: 85 ms

- Login API
Test Case 1: Login successfully with valid credentials

Result: Passed
Response Time: 110 ms
Test Case 2: Fail with incorrect password

Result: Passed
Response Time: 75 ms
Test Case 3: Fail with non-existent email

Result: Passed
Response Time: 78 ms
All tests passed successfully, indicating that the Signup and Login APIs are functioning as expected. The response times are within acceptable limits.
```