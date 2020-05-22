#!/bin/sh

#cp -a /node_modules .

#yarn serve

yarn global add serve

serve -l 8080 -s dist
