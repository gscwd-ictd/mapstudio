export const logtoConfig = {
  endpoint: "http://localhost:3001/",
  baseUrl: "http://localhost:3000",
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!,
  cookieSecure: process.env.NODE_ENV === "production",
};
