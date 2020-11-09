const { MqttClient } = require('mqtt')
const mqtt = require('mqtt')
const topic = 'vibracao'
const fs = require('fs')
var caFile = fs.readFileSync('/home/allan/Documentos/mosquitto/certs/ca.crt')
var KEY = fs.readFileSync('/home/allan/Documentos/mosquitto/certs/server.key')
var CERT = fs.readFileSync('/home/allan/Documentos/mosquitto/certs/server.crt')
 

const client = mqtt.connect('mqtt://localhost:8883',{
    clientId:'Admin',
    username:'admin',
    password:'123',
    ca:caFile,
    key:KEY,
    cert:CERT,
    rejectUnauthorized:false
})


client.on('message', (topic,message) => {
    message = message.toString()
    console.log(`Received ${message} on topic ${topic}`)
})

client.on('connect', () => {
    client.subscribe(topic)
})