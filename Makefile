init:
	@echo "Construção inicial da aplicação..."
	cp .env.example .env
	cp src/services/graphql/config-example.js src/services/graphql/config.js
	docker-compose up --build -d

build:
	@echo "Inicializando e construindo a aplicação..."
	docker-compose up --build -d

build-watch:
	@echo "Inicializando e construindo a aplicação..."
	docker-compose up --build

up:
	@echo "Levantando a aplicação..."
	docker-compose up -d

down:
	@echo "Removendo containers da aplicação..."
	docker-compose down

start:
	@echo "Iniciando a aplicação..."
	docker-compose start

stop:
	@echo "Paralizando a aplicação..."
	docker-compose stop

status:
	@echo "Status da aplicação..."
	docker-compose ps

log:
	@echo "Logs da aplicação..."
	docker-compose logs