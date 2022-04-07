1. Создать токен с помощью @bot_father
2. Создать репозиторий на github (chat-bot)
3. Создать локальную папку chat-bot. Открыть её в VS Code
4. Клонировать в неё репозиторий (точка в конце команды важна)
git clone <название_репозитория> .
5. Создать package.json
npm init -y
6. Установить пакеты npm
npm i dotenv
npm i express
npm i node-telegram-bot-api
npm i -D nodemon
7. Перенести файлы app.js и bot.js в новый проект
8. Создать файл .env и добавить token
9. Добавить в package.json скрипт для старта приложения
10. Запустить и протестировать приложение
npm run chat
