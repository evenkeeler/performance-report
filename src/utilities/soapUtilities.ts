import * as path from 'path'
import { Client, createClient, BasicAuthSecurity } from 'soap'
import { SOAP_CREDENTIALS } from './../secrets'


const { wsdl, username, password } = SOAP_CREDENTIALS


const createCC1Endpoint = (uri: string):string => 
  `https://${uri}.attendanceondemand.com:8192/cc1exec.aew/soap/IAeXMLBridge`


const createCC1Client = (): Promise<Client> => 
    new Promise((resolve, reject) => {
      createClient(wsdl, (err, client) => {
        if (err) {
          reject(err)
        } else {
          resolve(client)
        }
      })
    })


/* 
  get the proper information for each company
  active employee count: 
*/



async function getCriticalInformationByEndpoint(client, uri: string) {

  client.setEndpoint(uri)

  try {

    client.IAeXMLBridgeservice.IAeXMLBridgePort.getCompanyName(null, (err, result) => {
      console.log(result);
    })

  } catch(e){
    console.log('Error')
  }

}



export {
  createCC1Endpoint,
  createCC1Client,
  getCriticalInformationByEndpoint,
}