# All thing you need

## HTTPS Setup

- Cài đặt [mkcert](https://github.com/FiloSottile/mkcert) theo hướng dẫn.
- Mở terminal tại root folder.
- chạy command.

``` bash
mkdir ssl && cd ssl
mkcert -key-file ./key.pem -cert-file ./cert.pem "localhost"
```
