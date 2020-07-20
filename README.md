# explore
## Explore this product application module

### Table of Contents
1. [How to run](#how-to-run)
1. [Urls Paths](#url-paths)

---

### How to run
Run the following commands in terminal
1. Run install
```json
  npm install
```
2. Seed database if there is not existing data
```json
  npm run db:seed
```
3. Run webpack (dev or production)
```json
  npm run build
```

```json
  npm run pbuild
```
4. Run the server
```json
  npm start
```
5. Access urls
[Urls Paths](#url-paths) http://localhost:3141/0001/
---

### URL paths

  Note:
  roomId is a NUM from 001 to 100

  * Single application use `http://localhost:3141/:roomId/`
  * Proxy application use `http://localhost:3141/explorethis/:roomId/`


**Path Parameters:**
  * `roomId` Zero padded number from 001 to 100

