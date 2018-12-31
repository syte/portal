yarn install
server/node_modules/.bin/sequelize db:create
server/node_modules/.bin/sequelize db:migrate
server/node_modules/.bin/sequelize db:seed
