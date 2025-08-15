#!/bin/sh
set -e

# This script runs at container startup and injects runtime environment variables

echo "Injecting runtime environment variables..."

# Create the env-config.js file with actual runtime values
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  REACT_APP_APP_NAME: "${REACT_APP_APP_NAME:-}",
  REACT_APP_OPENFORT_PUBLIC_KEY: "${REACT_APP_OPENFORT_PUBLIC_KEY:-}",
  REACT_APP_SHIELD_PUBLIC_KEY: "${REACT_APP_SHIELD_PUBLIC_KEY:-}",
  REACT_APP_BACKEND_URL: "${REACT_APP_BACKEND_URL:-}",
  REACT_APP_OPENFORT_ECOSYSTEM_ID: "${REACT_APP_OPENFORT_ECOSYSTEM_ID:-}"
};
EOF

echo "Environment variables injected successfully"

# Start nginx
exec nginx -g "daemon off;"