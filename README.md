# Dad Jokes API

[![Build Status](https://travis-ci.org/mesofunny/back-end.svg?branch=master)](https://travis-ci.org/mesofunny/back-end)

Dad Jokes API is used for fetching jokes and you can add jokes too.

Link to the API https://mesofunny.herokuapp.com/

| VERB   |          ROUTE          |          FUNCTIONALITY          |
| :----- | :---------------------: | :-----------------------------: |
| GET    |            /            |           Index route           |
| POST   | /api/v1/users/register  |          Register user          |
| POST   |   /api/v1/users/login   |           Login user            |
| GET    |      /api/v1/jokes      |      Get all public jokes       |
| GET    |  /api/v1/jokesOfTheDay  |     Get the joke of the day     |
| POST   |   /api/v1/users/jokes   |          Add new joke           |
| GET    |   /api/v1/users/jokes   | Get the jokes created by a user |
| DELETE | /api/v1/users/jokes/:id |    Delete a particular joke     |
| PUT    | /api/v1/users/jokes/:id |    Update a particular joke     |

#### Request

**GET** request to **/**

#### Response

```
status: 200
```

```
 "Welcome to Jokes API",
```

#### Request

**POST** request to **/api/v1/users/register**

```
{
	"firstname": "Thompson",
	"lastname": "Janet",
	"email": "janet@gmail.com",
	"password": "janet1234567"
}
```

Note: All component of the request are strings, passwords must be at least 7 characters

#### Response

```
status: 201
```

```
{
    "firstname": "Thompson",
    "lastname": "Janet",
    "email": "janet@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjQ0MDE1MDksImV4cCI6MTU2NDQ4NzkwOX0.hJeAXAu83L5RP2oZ5COSlrTWHoppDim3GnQ48KReey8"
}
```

Notes:

- Store the token to the localstorage to be able to visit protected routes
- Email address is unique

#### Error

```
400 - Invalid inputs (firstname, lastname, email, password)
409 - Email address exists already
```

#### Request

**POST** request to **/api/v1/users/login**

```
{
	"email": "janet@gmail.com",
	"password": "janet1234567"
}
```

#### Response

```
status: 200
```

```
{
    "id": 1,
    "firstname": "Joker",
    "lastname": "Dad",
    "email": "qwad1011@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY0NDAyOTMyLCJleHAiOjE1NjQ0ODkzMzJ9.Tyta2pOdh3_2Y2_A6Dh9934_XHS-QFc58tWoNbDS86s"
}
```

#### Error

```
400 - Invalid inputs (email, password)
401 - Incorrect email or password
```

#### Request

**GET** request to **/api/v1/jokes**

#### Response

```
status: 200
```

```
{
    "jokes": [
        {
            "id": 1,
            "title": "Dreams",
            "joke": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
        },
        {
            "id": 2,
            "title": "Side",
            "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
            "id": 3,
            "title": "Guts",
            "joke": "Why didn’t the skeleton cross the road? Because he had no guts."
        }
    ]
}
```

#### Error

```
404 - No jokes
```

#### Request

**GET** request to **/api/v1/jokesOfTheDay**

#### Response

```
status: 200
```

```
{
    "joke": {
        "id": 14,
        "title": "Elevator",
        "joke": "My first time using an elevator was an uplifting experience. The second time let me down."
    }
}
```

#### Request

**POST** request to **/api/v1/users/jokes**

A valid jwt token must be passed in the **Authorization** header

```
{
	"title": "Sleep",
	"joke": "Slept like a log last night … woke up in the fireplace.",
	"status": "no"
}
```

Note:

- It is a protected route, so you're to provide a valid token
- Status only receive `yes` or `no`. It determines if the joke is to be made private or public. `yes` === `private` and `no` === `public`

#### Response

```
status: 201
```

```
Returns all jokes that have been created by a user
{
    "jokes": [
        {
            "id": 17,
            "title": "Laughing",
            "joke": "I am a laughter that laugh all the time"
        },
        {
            "id": 18,
            "title": "Laughing",
            "joke": "I am a laughter that laugh all the time"
        },
    ]
}
```

#### Error

```
400 - Invalid inputs (title, joke, status)
401 - Invalid token
401 - No token provided
```

#### Request

**GET** request to **/api/v1/users/jokes**

A valid jwt token must be passed in the **Authorization** header

#### Response

```
status: 200
```

```
Returns an array of jokes created by the user
{
    "jokes": [
        {
            "id": 17,
            "title": "Laughing",
            "joke": "I am a laughter that laugh all the time"
        },
        {
            "id": 18,
            "title": "Laughing",
            "joke": "I am a laughter that laugh all the time"
        },
    ]
}
```

Note:

- It is a protected route, so you're to provide a valid token

#### Error

```
401 - Invalid token
401 - No token provided
404 - No jokes is associated with this user
```

#### Request

**DELETE** request to **/api/v1/users/jokes/:id**
A valid jwt token must be passed in the **Authorization** header

#### Response

```
status: 204
```

```
{
    "message": "Deleted successfully"
}
```

#### Error

```
400 - User can only delete jokes they created
400 - No joke associated with this ID
401 - Invalid token
401 - No token provided
404 - No jokes is associated with this user
```

#### Request

**PUT** request to **/api/v1/users/jokes/:id**

A valid jwt token must be passed in the **Authorization** header

```
{
	"title": "Sleep",
	"joke": "Slept like a log last night … woke up in the fireplace.",
	"status": "no"
}
```

Note:

- It is a protected route, so you're to provide a valid token
- Status only receive `yes` or `no`. It determines if the joke is to be made private or public. `yes` === `private` and `no` === `public`

#### Response

```
status: 200
```

```
Returns the updated joke only
{
    "jokes": {
	"title": "Sleep",
	"joke": "Slept like a log last night … woke up in the fireplace.",
	"status": "no"
   }
}
```

#### Error

```
400 - Invalid inputs (title, joke, status)
401 - Invalid token
401 - No token provided
404 - No jokes is associated with this user
```

## Stretch

**Uploading image when signing up**

#### Request

**POST** request to **/api/v1/users/create**

```
{
	"firstname": "Thompson",
	"lastname": "Janet",
	"email": "janet@gmail.com",
	"password": "janet1234567",
	"photo": "pick file from local machine"
}
```

Note:

- All component of the request are strings, passwords must be at least 7 characters
- Use formData instead and append the data to it
- Add this to your headers

```
Accept: "application/json", "Content-Type": "multipart/form-data"
```

#### Response

```
status: 201
```

```
{
    "firstname": "Thompson",
    "lastname": "Janet",
    "email": "janet@gmail.com",
    "photo": "http://res.cloudinary.com/rexben/image/upload/v1564481480/qv6jzjiy219y1fxisgot.jpg"
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjQ0MDE1MDksImV4cCI6MTU2NDQ4NzkwOX0.hJeAXAu83L5RP2oZ5COSlrTWHoppDim3GnQ48KReey8",
}
```

Notes:

- Store the token to the localstorage to be able to visit protected routes
- Email address is unique
- Uploading image is optional

#### Error

```
400 - Invalid inputs (firstname, lastname, email, password)
409 - Email address exists already
```
