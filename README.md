# karate-docker

Container to let you run Karate tests inside Docker with minimal/no knowledge of Karate

## Build container image

To build

`$ docker build . -t karate-docker`

## Execute mock

If you set environment variable MOCK within the container, it will attempt to run mocks rather than execute tests.

To run, with mock `.feature` file stored in ./mock-server, karate-config.js stored in ./config and mock listening on TCP/8999

`$ docker run -e MOCK=1 -v "$(pwd)/mock-server:/features" -v "$(pwd)/config:/config" karate-docker:latest`

## Execute your own .feature files

To run, with test feature files stored in `./features`, karate-config.js stored in `./config` and results being written to `./results`

`$ docker run -v "$(pwd)/features:/features" -v "$(pwd)/results:/results" -v "$(pwd)/config:/config" karate-docker:latest`

# Confirm that the container is working correctly

To test this container is working correctly,
- on the Docker host network, spin up a mock on TCP/8080 (by remapping the default TCP/8999)
- on the Docker host network, execute a test against that mock

`$ docker run -e MOCK=1 -v "$(pwd)/mock-server:/features" -v "$(pwd)/config:/config" --network="host" -p 8999:8080 karate-docker:latest &`

`$ docker run -v "$(pwd)/features:/features" -v "$(pwd)/config:/config" -v "$(pwd)/results:/results" --network="host" karate-docker:latest`
