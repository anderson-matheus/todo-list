# Requirements

docker >= 26.1.3
docker compose >= v2.27.0


## Install

```
cd backend
cd src
cp .env.example .env
cd ../
cd ../
docker compose up -d
docker exec -it todo_list_backend npx prisma db pull
```

## Backend tests

```
docker exec -it todo_list_backend npm test
```

# Url's
### Backend
[http://localhost:4000](http://localhost:4000)