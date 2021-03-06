"use strict";
var Payment = (function () {
    function Payment() {
        this.type = 'cash';
        this.amount = 0;
        this.receivedDate = new Date();
    }
    return Payment;
}());
exports.Payment = Payment;
var Member = (function () {
    function Member(email, done) {
        if (done === void 0) { done = false; }
        this.email = email;
        this.completed = done;
        this.joinedDate = new Date();
        this.payments = new Array();
        this.frequency = 12; //frequency of payments in months
        // members.push(this);
        // this.key = members.length;
    }
    Member.prototype.delete = function () {
        this.active = false;
    };
    Member.prototype.clear = function () {
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.completed = false;
    };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.model.js.map