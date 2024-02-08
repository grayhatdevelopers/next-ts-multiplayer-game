/** @type {import('next').NextConfig} */
import localIpAddress from 'local-ip-address';

const fullNextConfig = async () => {
    // TODO: Somehow get the right port, too. Right now it's hardcoded to 3000.
    const url = `http://${localIpAddress()}:3000/`
    return {
      env: {
        NEXT_PUBLIC_LOCAL_IP_ADDRESS: url,
      }
    }
  }

export default fullNextConfig;
