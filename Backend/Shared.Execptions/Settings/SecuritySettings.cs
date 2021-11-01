namespace Shared.Settings
{
    public class SecuritySettings
    {
        public SecuritySettings(string accessTokenSecret)
        {
            AccessTokenSecret = accessTokenSecret;
        }

        public string AccessTokenSecret { get; init; }
    }
}
