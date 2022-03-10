namespace Shared.Settings
{
    public class SecuritySettings
    {
        public SecuritySettings(string accessTokenSecret, string apikeyHeader, string apiKeyPwd)
        {
            AccessTokenSecret = accessTokenSecret;
            ApikeyHeader = apikeyHeader;
            ApikeyPwd = apiKeyPwd;
        }

        public string AccessTokenSecret { get; init; }

        public string ApikeyHeader { get; init; }

        public string ApikeyPwd { get; init; }
    }
}
