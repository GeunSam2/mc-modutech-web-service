IMAGE_NAME := mc-modutech-win-site
EXPOSEPORT := 3000
TAG := v1

help:			## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


build:			## Build docker image.
	docker build -t $(IMAGE_NAME):$(TAG) -f docker/Dockerfile .

run:			## Run with docker image.
	docker run -it --rm -p 3000:$(EXPOSEPORT) $(IMAGE_NAME):$(TAG)