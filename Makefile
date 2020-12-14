install:
	npm install
brain-games:
	node ./bin/brain-games.js
brain-even:
	node ./bin/brain-even.js
test:
	node ./src/cli.js
publish:
	npm publish --dry-run
lint:
	npx eslint .