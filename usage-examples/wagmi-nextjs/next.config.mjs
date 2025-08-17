/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Handle HeartbeatWorker file
    config.module.rules.unshift({
      test: /HeartbeatWorker\.js$/,
      type: 'asset/source',
    })

    if (!isServer) {
      config.output.globalObject = 'self'
      config.resolve.fallback = { fs: false, module: false, path: false }
    }

    config.resolve.extensionAlias = { '.js': ['.js', '.ts'] }

    return config
  },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups'
                    }
                ]
            }
        ];
    }
}

export default nextConfig;
