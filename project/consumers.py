import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async


class DataConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.groupname = self.scope['url_route']['kwargs']['room']

        await self.channel_layer.group_add(
            self.groupname,
            self.channel_name,
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.groupname,
            self.channel_name,
        )

    async def receive(self, text_data):
        datapoint = json.loads(text_data)
        val = datapoint['value']
        idx = datapoint['idx']

        await self.channel_layer.group_send(
            self.groupname,
            {
                'type': 'deprocessing',
                'value': val,
                'idx': idx
            }
        )

        print('>>>>', text_data)

    async def deprocessing(self, event):
        valOther = event['value']
        idx = event['idx']
        await self.send(text_data=json.dumps({'value': valOther, 'idx': idx}))
