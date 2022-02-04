#!/usr/bin/env python2
import sys, json;
from datetime import datetime, timedelta

json_file = json.load(sys.stdin)
current_time= (datetime.utcnow() - timedelta(hours=48))
for pr in json_file:
  if datetime.strptime(pr['closed_at'], '%Y-%m-%dT%H:%M:%SZ') >= current_time:
    print pr['number'],
