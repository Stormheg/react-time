default: clean install start

clean:
	rm -rf dist/

start:
	yarn start

build:
	yarn run build

fix:
	yarn run fix

lint:
	yarn run lint

install:
	yarn install