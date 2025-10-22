install-deps:
	cd backend && npm install
	cd frontend && npm install

run-server:
	cd backend && npm run start:dev

run-client:
	cd frontend && npm run dev