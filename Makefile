default: clean install start

clean:
	rm -rf dist/

start:
	yarn start

build:
	yarn run build

fix:
	yarn run fix-js

lint:
	yarn run lint-js
	yarn run lint-styles

install:
	yarn install