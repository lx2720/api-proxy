#!/bin/bash

App='proxy'
ProjectHome='/home/wild/proxy'
RunHome='/opt/proxy'
Time=`date '+%Y%m%d%H%M%S'`

cd $ProjectHome
git pull

kill -9 $(ps -ef|grep node|awk '/'$App.js'/{print $2}')

cp -f $RunHome/$App.js $RunHome/$App-$Time.js
cp -f $ProjectHome/$App.js $RunHome/$App.js

cd $RunHome
nohup node $App.js > $App.log 2>&1 &
