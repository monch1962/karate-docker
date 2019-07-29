# karate-docker

Container to let you run Karate tests inside Docker with minimal/no knowledge of Karate

## Build container image

To build

`$ docker build . -t karate-docker`

## Execute tests

To run, with test feature files stored in `./features` and results being written to `./results`

`$ docker run -v "$(pwd)/features:/features" -v "$(pwd)/results:/results" karate-docker:latest`
