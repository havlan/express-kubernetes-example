# Express kubernetes example

- express-api (Node.js express source code and docker file)
- k8s (combined kubernetes config yaml file)

## Updating the app

- Use versioning(?)
- Rebuilding and pushing 

```yaml
docker login
docker built -t havlan/node-express-example
docker push havlan/node-express-example
```

