import json
import requests
import redis
import websocket
import random
import time
import datetime

ws = websocket.WebSocket()

for i in range(1000):
    time.sleep(3)
    time1 = datetime.datetime.now().strftime('%H:%M:%S')
    ws.connect('ws://127.0.0.1:8000/channel/mantap/')
    data = {
        'idx': time1,
        'value': random.randint(1, 100),
    }
    ws.send(json.dumps(data))
    ws.close()
