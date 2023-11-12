# Read me before creating the project

This is a dockerized version of a skeleton project with User Authentication using JWT tokens that we can use for later projects.

## Installation steps

- `cd backend`
- Rename docker container names
- `docker-compose -p "skeleton-project" up --build -d`
- `docker exec -it php-skeleton bash`
- `composer install`
- `php bin/console lexik:jwt:generate-keypair`
- Rename database url to mysql://.....@db-skeleton... to db-project
- `php bin/console doctrine:database:create`

## Supported version

This project currently uses **Symfony 6.4.x**.
