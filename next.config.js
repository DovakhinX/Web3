/** @type {import('next').NextConfig} */
const nextConfig = {

    resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
      },
}
import path from 'path';

export default nextConfig
