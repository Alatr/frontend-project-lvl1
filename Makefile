install:
	npm install
brain-games:
	node ./bin/brain-games.js
test:
	node ./src/cli.js
publish:
	npm publish --dry-run