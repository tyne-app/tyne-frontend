openssl req -x509 -nodes -new -sha512 \
  -days 365 -newkey rsa:4096 -keyout ca.key \
  -out ca.pem