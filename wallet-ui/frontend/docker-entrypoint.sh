#!/bin/sh
set -e

# This script runs at container startup and injects runtime environment variables

echo "Injecting runtime environment variables..."

# Find all JavaScript files in the build directory
js_files=$(find /usr/share/nginx/html -name "*.js")

# Parse environment variables that begin with 'REACT_APP_'
envs=$(printenv | grep ^REACT_APP_)

# Define the specific replacements needed
echo "Replacing REACT_APP_APP_NAME with ${REACT_APP_APP_NAME}"
echo "Replacing REACT_APP_OPENFORT_PUBLIC_KEY with ${REACT_APP_OPENFORT_PUBLIC_KEY}"
echo "Replacing REACT_APP_SHIELD_PUBLIC_KEY with ${REACT_APP_SHIELD_PUBLIC_KEY}"
echo "Replacing REACT_APP_BACKEND_URL with ${REACT_APP_BACKEND_URL}"
echo "Replacing REACT_APP_OPENFORT_ECOSYSTEM_ID with ${REACT_APP_OPENFORT_ECOSYSTEM_ID}"

# Replace placeholder values with actual environment variables
for js_file in $js_files; do
  sed -i "s|\"__REACT_APP_APP_NAME__\"|\"${REACT_APP_APP_NAME}\"|g" $js_file
  sed -i "s|\"__REACT_APP_OPENFORT_PUBLIC_KEY__\"|\"${REACT_APP_OPENFORT_PUBLIC_KEY}\"|g" $js_file
  sed -i "s|\"__REACT_APP_SHIELD_PUBLIC_KEY__\"|\"${REACT_APP_SHIELD_PUBLIC_KEY}\"|g" $js_file
  sed -i "s|\"__REACT_APP_BACKEND_URL__\"|\"${REACT_APP_BACKEND_URL}\"|g" $js_file
  sed -i "s|\"__REACT_APP_OPENFORT_ECOSYSTEM_ID__\"|\"${REACT_APP_OPENFORT_ECOSYSTEM_ID}\"|g" $js_file
  
  # Also replace single quotes
  sed -i "s|'__REACT_APP_APP_NAME__'|'${REACT_APP_APP_NAME}'|g" $js_file
  sed -i "s|'__REACT_APP_OPENFORT_PUBLIC_KEY__'|'${REACT_APP_OPENFORT_PUBLIC_KEY}'|g" $js_file
  sed -i "s|'__REACT_APP_SHIELD_PUBLIC_KEY__'|'${REACT_APP_SHIELD_PUBLIC_KEY}'|g" $js_file
  sed -i "s|'__REACT_APP_BACKEND_URL__'|'${REACT_APP_BACKEND_URL}'|g" $js_file
  sed -i "s|'__REACT_APP_OPENFORT_ECOSYSTEM_ID__'|'${REACT_APP_OPENFORT_ECOSYSTEM_ID}'|g" $js_file
done

echo "Environment variables injected successfully"

# Start nginx
exec nginx -g "daemon off;"