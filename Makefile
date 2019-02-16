install: install-deps

run:
	npx babel-node -- 'src/bin/get-geo.js' 124.21.33.13

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
