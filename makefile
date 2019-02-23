clean:
	rm -Rf index.html
	rm -Rf bundle.js
	rm -Rf main.css
	rm -Rf img

build:
	cd src; npm run build

release: clean build
	cp src/dist/index.html .
	cp src/dist/bundle.js .
	cp src/dist/main.css .
	cp -R src/dist/img/ img/