# karate-docker

Container to let you run Karate tests inside Docker with minimal/no knowledge of Karate

## Build container image

To build

`$ docker build . -t karate-docker`

## Execute mock

If you set environment variable MOCK within the container, it will attempt to run mocks rather than execute tests.

To run, with mock `.feature` file stored in ./mock-server, and mock listening on TCP/8999

`$ docker run -e MOCK=1 -v "$(pwd)/mock-server:/features" karate-docker:latest`

## Execute tests

To run, with test feature files stored in `./features` and results being written to `./results`

`$ docker run -v "$(pwd)/features:/features" -v "$(pwd)/results:/results" karate-docker:latest`
