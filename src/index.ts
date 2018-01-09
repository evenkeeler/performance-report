import { SOAP_CREDENTIALS } from './secrets'
import { Client } from 'soap'

import { 
  createCC1Client,
  createCC1Endpoint,
  getCriticalInformationByEndpoint
} from './utilities/soapUtilities'

async function getDailyRecords() {
  try {
    const client = await createCC1Client()
    getCriticalInformationByEndpoint(client, createCC1Endpoint('INFO0076'))
  } catch(e) {
    console.log('in get daily records catch')
  }
}
 getDailyRecords();
  