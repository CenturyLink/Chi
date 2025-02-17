#!/bin/bash

# Create the backstopjs image
docker build -t backstopjs -f backstop_data/docker/Dockerfile .