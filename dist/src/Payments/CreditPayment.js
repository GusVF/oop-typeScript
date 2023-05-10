"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("./Payment"));
class CreditPayment extends Payment_1.default {
    makePayment() {
        throw new Error("Method not implemented.");
    }
}
exports.default = CreditPayment;
