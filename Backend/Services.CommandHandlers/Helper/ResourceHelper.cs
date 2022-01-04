using System.Globalization;

namespace Services.CommandHandlers.Helper
{
    internal static class ResourceHelper
    {
        public static string GetString(string messageId, string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                language = "en";
            }

            return CommandHandlers.Resource.ResourceManager.GetString(messageId, CultureInfo.GetCultureInfo(language));
        }
    }
}
