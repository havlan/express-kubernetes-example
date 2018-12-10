# Express kubernetes example

- express-api (Node.js express source code and docker file)
- k8s (combined kubernetes config yaml file)

## Updating the app

- Rebuilding and pushing 

```yaml
docker login
docker build -t havlan/node-express-example .
docker push havlan/node-express-example
```

