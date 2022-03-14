namespace Domain.Model
{
    public class DeviceInfo
    {
        public string DeviceId { get; private set; }

        public string Name { get; private set; }

        public string Model { get; private set; }

        public string Platform { get; private set; }

        public string OpSystem { get; private set; }

        public string OsVersion { get; private set; }

        public string Manufacturer { get; private set; }

        public DeviceInfo(string deviceId, string name, string model, string platform, string opSystem, string osVersion, string manufacturer)
        {
            this.DeviceId = deviceId;
            this.Name = name;
            this.Model = model;
            this.Platform = platform;
            this.OpSystem = opSystem;
            this.OsVersion = osVersion;
            this.Manufacturer = manufacturer;
        }
    }
}
