#!/bin/sh

echo 'Waiting for ' $1

echo 'Updating code................'
git pull origin master
echo 'Code Updated................'

echo 'Test Starts................'
if [ $1 ]; then
	protractor --baseUrl=$1 protractor.conf.js
else
	protractor protractor.conf.js
fi
