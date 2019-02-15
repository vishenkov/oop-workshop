install: install-deps

run:
	npx babel-node -- 'src/bin/get-geo.js' 10

install-deps:
	yarn

build:
	rm -rf dist
	yarn build

test:
	yarn test

lint:
	yarn eslint .

publish:
	npm publish

.PHONY: test
