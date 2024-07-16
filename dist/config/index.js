"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
require("dotenv/config");
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}
exports.JWT_SECRET = process.env.JWT_SECRET;
