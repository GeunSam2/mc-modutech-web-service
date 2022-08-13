IMAGE_NAME := geunsam2/mc-modutech-win-site
EXPOSEPORT := 3000
TAG := v1

help:			## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: build
build:			## Build docker image.
	docker build -t $(IMAGE_NAME):$(TAG) -f docker/Dockerfile .
	docker build --platform=linux/amd64 -t $(IMAGE_NAME):$(TAG)-amd64 -f docker/Dockerfile .

.PHONY: publish
publish: build	## Build docker image.
	docker push $(IMAGE_NAME):$(TAG)
	docker push $(IMAGE_NAME):$(TAG)-amd64

.PHONY: run
run:			## Run with docker image.
	docker run -it --rm -p 3000:$(EXPOSEPORT) $(IMAGE_NAME):$(TAG)