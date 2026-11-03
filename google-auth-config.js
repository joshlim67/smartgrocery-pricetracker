// ==========================================================================
// GOOGLE OAUTH 2.0 CONFIGURATION
// Google Identity Services (GIS) Web SDK Client Configuration
// ==========================================================================

export const GOOGLE_OAUTH_CONFIG = {
  // Masukkan Google OAuth 2.0 Client ID dari Google Cloud Console Anda di sini:
  clientId: localStorage.getItem('sg_google_client_id') || ""
};

if (typeof window !== 'undefined') {
  window.GOOGLE_OAUTH_CONFIG = GOOGLE_OAUTH_CONFIG;
}
