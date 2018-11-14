# Запуск

1. скопируйте `.env-example` из папки `.docker/` в корень проекта и переименуйте на `.env`
2. скопируйте свой проект в папку `project`.
3. выполните `docker-compose up` в корне этого проекта

Обновились зависимости? - `docker-compose exec app npm i`
сбросить установленные пакеты и базу данных - `docker-compose down -v`

Удалить все образы и хранилища:

```
docker system prune -af
```

Возникнут вопросы - пишите в телеграме @dmitryvakhnenko
