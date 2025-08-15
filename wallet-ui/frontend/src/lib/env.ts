// Helper to get environment variables at runtime
// This supports both build-time (process.env) and runtime (window._env_) variables

declare global {
  interface Window {
    _env_?: {
      REACT_APP_APP_NAME?: string;
      REACT_APP_OPENFORT_PUBLIC_KEY?: string;
      REACT_APP_SHIELD_PUBLIC_KEY?: string;
      REACT_APP_BACKEND_URL?: string;
      REACT_APP_OPENFORT_ECOSYSTEM_ID?: string;
    };
  }
}

export const getEnvVar = (key: string): string | undefined => {
  // First check runtime env (from Kubernetes ConfigMap)
  if (typeof window !== 'undefined' && window._env_ && window._env_[key as keyof typeof window._env_]) {
    const value = window._env_[key as keyof typeof window._env_];
    // Don't return placeholder values
    if (value && value !== 'PLACEHOLDER') {
      return value;
    }
  }
  
  // Fallback to build-time env (for local development)
  const processEnvKey = key as keyof typeof process.env;
  const value = process.env[processEnvKey] as string | undefined;
  if (value && value !== 'PLACEHOLDER') {
    return value;
  }
  
  return undefined;
};

// Export convenience getters
export const env = {
  get APP_NAME() {
    return getEnvVar('REACT_APP_APP_NAME');
  },
  get OPENFORT_PUBLIC_KEY() {
    return getEnvVar('REACT_APP_OPENFORT_PUBLIC_KEY');
  },
  get SHIELD_PUBLIC_KEY() {
    return getEnvVar('REACT_APP_SHIELD_PUBLIC_KEY');
  },
  get BACKEND_URL() {
    return getEnvVar('REACT_APP_BACKEND_URL');
  },
  get OPENFORT_ECOSYSTEM_ID() {
    return getEnvVar('REACT_APP_OPENFORT_ECOSYSTEM_ID');
  }
};