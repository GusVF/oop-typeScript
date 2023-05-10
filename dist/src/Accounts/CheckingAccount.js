"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
class CheckingAccount extends Account_1.default {
    constructor(limit, params) {
        super(params);
        this._limit = limit;
    }
}
exports.default = CheckingAccount;
