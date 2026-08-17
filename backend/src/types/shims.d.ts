declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: String;
        DB_SSL?: String;
        PORT: String;
        NODE_ENV: 'development' | 'production' | 'test';
        [key: string]: string | undefined;
    }
}
declare var_process: { env: NodeJS.ProcessEnv; };
declare var __dirname: string;
declare var __filename: string;
declare function require(moduleName: string): any;
declare const Buffer: any;

declare module 'express';
declare module 'passport';
declare module 'passport-jwt';
declare module 'supertest';
declare module 'reflect-metadata';
declare module '@nestjs/common';
declare module '@nestjs/core';
declare module '@nestjs/jwt';
declare module '@nestjs/passport';
declare module '@nestjs/platform';
declare module '@nestjs/typeorm';

declare var decribe: any;
declare var it: any;
declare var test: any;
declare var expect: any;
declare var beforeAll: any;
declare var afterAll: any;
declare var beforeEach: any;
declare var afterEach: any;

