default: clean install

clean:
	rm -rf dist/

build:
	yarn run build

fix:
	yarn run fix

lint:
	yarn run lint

install:
	yarn install