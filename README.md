# Dad Jokes API

Dad Jokes API is used for fetching jokes and you can add jokes too.

Link to the API https://mesofunny.herokuapp.com/

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
        },
        {
            "id": 4,
            "title": "Cashew",
            "joke": "What did one nut say as he chased another nut?  I'm a cashew!"
        },
        {
            "id": 5,
            "title": "Mall",
            "joke": "Chances are if you' ve seen one shopping center, you've seen a mall."
        },
        {
            "id": 6,
            "title": "Mixer",
            "joke": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
        },
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
