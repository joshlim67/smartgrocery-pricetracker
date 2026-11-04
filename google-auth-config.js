// ==========================================================================
// GOOGLE OAUTH 2.0 CONFIGURATION
// Google Identity Services (GIS) Web SDK Client Configuration
// ==========================================================================

export const GOOGLE_OAUTH_CONFIG = {
  // Client ID resmi Google Cloud Console
  clientId: localStorage.getItem('sg_google_client_id') || "211452764074-c8vujhogu8l2rit7gltkr40kbb49994g.apps.googleusercontent.com",
  // Redirect URI yang didaftarkan di Google Cloud Console
  redirectUri: "http://localhost:5173/api/auth/callback/google"
};

if (typeof window !== 'undefined') {
  window.GOOGLE_OAUTH_CONFIG = GOOGLE_OAUTH_CONFIG;
}