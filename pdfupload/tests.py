import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import datetime
import json
from pytz import timezone 
import firebase_admin



#configration data
c={
  "type": "service_account",
  "project_id": "kidding-606b7",
  "private_key_id": "2940e9da89cc0a7c2443ca1c67bc9f25831d7821",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDxQhd6xc7eCQRO\nlfelix49OZ4Qn+qxNod7xBkC7OxiiMohvJ6ZGTSXJTujfcFyWIQGW5EQ8cI0bvoZ\nKQ+lHiI9HpU9RpjuvL+A5NnT5K2UAt8S4sXhlMzkNVdrqT2+K+YL0tpuzd7v0A3S\nXQH0NlyXx09kMGGY0qZOI0K408h0gmImgiaBda0I+eX9Tv25EXn/VDvNK6g6+iv0\n6LFLNXlQUF7QIXeSSL5tg53DBFukhmREicjMDVKvXceQcKvfCRr1icYydjiPpT8y\nwvWVu/KjlYKv5yNUwr6Zz/LXKeyHixfGu8sDtUSlz9kwUDOcTkw6klERUGClYn5z\nphfg+f0XAgMBAAECggEAAhcFiO/mg0A4aX9ropw09nbsz8bViCJ3oFKtuQK1oNiq\nZV9rwWhSNkBPtTmVRSOWmogpiESn3xS96uRvcftz5l3A9OA12ipA+G/RTM6NfbgG\nph8RHlKlKp/P5DldX7oVvJSYaQmmSuqIFsl7XJLUpi0OU7rNkE0RhBL9WCTfvfIs\n5Rw00UPRZ0Lm9dWzRR4Vuii/GhJrk//9JpzLE6QfxQsPfjVG2eUDyrZj8wadgR9L\nqHlIH+b3XeSAETfst2rNEROYLEGAcitTD8LgJ+4iEKWhOdJlM3EIVKH3tl+WJzew\nAnxiEFycjAnSpMsdB3ZwlWBCyOMkBdXRTszVJjYtAQKBgQD40Wfqs4LBu5n1j+DD\n/LaF2+Tc7wWamDjFBbc3pve50+5egvJVFxAv31BsvrR28QyjweGdLFeQf3a3ygMV\n7nawo5ULIAYrCw18kmFys8ZnoVISvfhptXdtrTk7Z2MrL8XVAEzm0IYizZ3F2o/Q\ny7KrbGGiMDF1fT1WGxPDAG0iFwKBgQD4ONLrgLRdecdAVa9DAwP4XL1JtMD6e36s\nIXJMRy9bzmCbZhBR4F0ZD+8aojTzEtx6cgzIT/sHkWMowL67PMUzo1mzWTqz22yX\nxmmD0mwWmBU/8YCJ8qj8WfQtjObPG/g2jAlixjtSwJsVfLDPE+KHHFIHeCoBvSwu\nwZLhZTndAQKBgQDe4DSFN2bYwoKWQ9rBs4yLOv02KaSLZe70DLqhTx53hi7u2bzY\nG2CUgSQ5RFnCcQkxZmoBr8Z/2K0u0/UPoBsQ/nZzEKx1weDCxRwk8oO2L/qkbyYl\nCjeANrodS+64sII02aAI4KBGbIf2wmAwV0Yj52FNNn4XD6fxiS+abLdU4QKBgDlZ\nt7Hd7M5kIptEsNfEzJgHpVxwPN4ixmOy3putHs4RYtTEwiSIuDngKph2vdEjnHlV\n/IoToKZg+w4hanAMXGvP5BvCFAQWQILYvuxMI9kcjlxVyiMVQ+H6TqZvlaxog/Lm\nbAy8TFyUT8CpLJjLuV0KOBGtu9bnBFxRMUSOhM4BAoGAeZEApOrAd/EpY0ofyXSW\n/PsFpNzylf9J47nrRaVzP7gx/E2mUOi6WQw37PmyeSM3neeL86i+pJI6G2pZp9H1\ndu4UGoQoqBhYnc2wOkcWqwuh4MPm3efC9Rozs1KyBbzNhmQndUT12sLHWqcLIuB5\ndKcq1mK+2hvBqQCcQesZ660=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xuz5g@kidding-606b7.iam.gserviceaccount.com",
  "client_id": "113284413331211019629",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xuz5g%40kidding-606b7.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

config = {
  "apiKey": "AIzaSyBZAyZvVciHmU0ocYPD2nZ0BW9IZePZptU",
  "authDomain": "kidding-606b7.firebaseapp.com",
  "databaseURL": "https://kidding-606b7-default-rtdb.firebaseio.com",
  "projectId": "kidding-606b7",
  "storageBucket": "kidding-606b7.appspot.com",
  "messagingSenderId": "986582791827",
  "appId": "1:986582791827:web:524af3abbaebac18d27f66",
  "measurementId": "G-0WRH5NFR1L",
  "serviceAccount":c,
}


cred = credentials.Certificate(c)
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://kidding-606b7-default-rtdb.firebaseio.com"
})

base=pyrebase.initialize_app(config).auth()
ref_1=db.reference('')
k=ref_1.get(str(datetime.datetime.now().date()))[0]
today=k.get(str(datetime.datetime.now().date()))
print(today)

for gg in today:
    ref_1.child("project2").update({gg:today.get(gg)})
