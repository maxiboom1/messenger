class AppConfig {
    public socketPort = "3601";
    public restApiPort = "3600";
    public backendUrl = "http://localhost:";

    public registerUrl = "http://localhost:3600/api/register";
    public loginUrl = "http://localhost:3600/api/login";
}

const appConfig = new AppConfig();

export default appConfig;