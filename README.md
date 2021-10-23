## HttpOnly, Secure Cookies Example

[![Docker Image Release](https://github.com/seanghay/httponly-cookies-sample/actions/workflows/ci.yml/badge.svg)](https://github.com/seanghay/httponly-cookies-sample/actions/workflows/ci.yml)

### Docker Compose

```yml
version: '3'
services:
  app: 
    image: ghcr.io/seanghay/httponly-cookies-sample:latest
    restart: unless-stopped 
    ports:
      - "127.0.0.1:3009:3009"
```