declare namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      DB_SSL?: string;
      PORT?: string;
      NODE_ENV?: 'development' | 'production' | 'test';
    }
}