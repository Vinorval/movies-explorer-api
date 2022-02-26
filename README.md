# movies-explorer-api

# Описание
Бекэнд - чать сервиса с фильмами для диплома Яндкс.Практикума. Бек способен к авторизации пользователей, изменению их данных и сохранению информации о фильмах, которые понравились пользователю.

К Бекэнду есть возможность обратится по адресу: (К сожалению, на данный момент все ссылки недоступны)
  1. http://api.vinorval.movies.nomoredomains.icu
  2. https://api.vinorval.movies.nomoredomains.icu
  3. http://178.154.227.115

## Используемые технологии
  1. Noda.js
  2. Moongoza
  3. Express.js

## Как локально запустить проект
1. Для начало с помощью командой git clone https://github.com/Vinorval/movies-explorer-api.git загрузить себе код.
2. Проверить, что у вас есть приложение MongoDB (Если нет,то можно загрузить:
  * для Windows - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition 
  * для MacOS - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/  
  * для Linux - https://docs.mongodb.com/manual/administration/install-on-linux/
)
3. Далее загрузить все библиотеки, которые описаны в файле package.json. Лучше всего воспользоваться командой npm init
4. В терменале запустите базу данных MongoBD командой mongod 
5. Остается только запустить сам сервер командой npm start
