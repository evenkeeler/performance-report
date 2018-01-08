import { Client, createClient } from 'soap'
import { SOAP_CREDENTIALS } from './../secrets'

const { wsdl } = SOAP_CREDENTIALS

const createCC1Endpoint = (uri: string):string => 
  `https://${uri}.attendanceondemand.com:8192/cc1exec.aew/soap/IAeXMLBridge`


const createCC1Client = () => 
  createClient(wsdl, (err, client) => {
    console.log(client);
  })

export {
  createCC1Endpoint,
  createCC1Client
}