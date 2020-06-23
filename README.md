# Endpoints

## Usuário

### POST /users

#### Payload

```
{
    "fullName": "Douglas Soares",
    "email": "ds@ds.ds"
}
```

#### Resposta

`201 Created`

```
{
    "id": 8,
    "fullName": "Douglas Soares",
    "email": "as@as.as",
    "created_at": "2020-06-23T00:22:53.327Z",
    "updated_at": "2020-06-23T00:22:53.327Z"
}
```

### POST /users/login

#### Payload

```
{
    "email": "ds@ds.ds"
}
```

#### Resposta

`200 OK`

```
{
    "user": {
        "id": 8,
        "fullName": "Douglas Soares",
        "email": "as@as.as",
        "created_at": "2020-06-23T00:22:53.327Z",
        "updated_at": "2020-06-23T00:22:53.327Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5Mjg3MTg2NX0.cCKe6GsxW1w347Kd0mxuQCaVwwg7tOQ5-gsbdsjljns"
}
```

### POST /tasks
#### Headers
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5Mjg3MTg2NX0.cCKe6GsxW1w347Kd0mxuQCaVwwg7tOQ5-gsbdsjljns`
#### Payload

```
{
    "description": "Subir essa API :D",
    "completed": false
}
```

#### Resposta

`201 Created`

```
{
    "id": 7,
    "description": "Subir Essa Api",
    "completed": false,
    "user_id": 8,
    "created_at": "2020-06-23T00:29:52.706Z",
    "updated_at": "2020-06-23T00:29:52.706Z"
}
```

### GET /tasks

#### Headers
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5Mjg3MTg2NX0.cCKe6GsxW1w347Kd0mxuQCaVwwg7tOQ5-gsbdsjljns`

#### Resposta

`200 OK`

```
[
    {
        "id": 7,
        "description": "Subir Essa Api",
        "completed": false,
        "user_id": 8,
        "created_at": "2020-06-23T00:29:52.706Z",
        "updated_at": "2020-06-23T00:29:52.706Z"
    },
    {
        "id": 8,
        "description": "Outra task de exemplo :O",
        "completed": true,
        "user_id": 8,
        "created_at": "2020-06-23T00:32:42.260Z",
        "updated_at": "2020-06-23T00:32:42.260Z"
    }
]
```

### PUT /tasks/:id
#### Headers
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5Mjg3MTg2NX0.cCKe6GsxW1w347Kd0mxuQCaVwwg7tOQ5-gsbdsjljns`
#### Payload

`200 OK`

```
{
    "completed": true
}
```

#### Resposta

```
{
    "id": 7,
    "description": "Subir Essa Api",
    "completed": true,
    "user_id": 8,
    "created_at": "2020-06-23T00:29:52.706Z",
    "updated_at": "2020-06-23T00:31:43.706Z"
}
```

### DELETE /tasks/:id

#### Headers
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5Mjg3MTg2NX0.cCKe6GsxW1w347Kd0mxuQCaVwwg7tOQ5-gsbdsjljns`

#### Resposta

`204 No content`