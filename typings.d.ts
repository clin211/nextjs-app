declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_BASEURL: string;
        DB_PORT: string;
        DB_HOST: string;
        DB_USER: string;
        DB_PASS: string;
    }
}
