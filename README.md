# Requirements

- docker >= 26.1.3
- docker compose >= v2.27.0


## Install

```
git clone git@github.com:anderson-matheus/todo-list.git
cd todo-list

cp .env.example .env

cd backend
cd src
cp .env.example .env
cd ../
cd ../

cd frontend
cp .env.example .env
cd ../

docker compose --env-file .env up -d --force-recreate --build
docker exec -it todo_list_backend npx prisma db push
docker exec -it todo_list_backend npx prisma generate
docker exec -it todo_list_backend npx prisma db pull
```

## Backend tests

```
docker exec -it todo_list_backend npm test
```


## Api documentation
- [postman - documentation](Todo-list.postman_collection.json)

## Frontend tests
```
docker exec -it todo_list_frontend npm test
```

# Url's
### Backend
[http://localhost:4000](http://localhost:4000)

### Frontend
[http://localhost:3000](http://localhost:3000)