System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SimpleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SimpleComponent = (function () {
                function SimpleComponent() {
                    this.name = "da";
                    this.isCalling = true;
                }
                SimpleComponent.prototype.toggleCalling = function () {
                    this.isCalling = !this.isCalling;
                };
                SimpleComponent = __decorate([
                    core_1.Component({
                        selector: "simple-component",
                        template: "\n        <h1>Hallo Angular 2!</h1>\n        <div>\n            <label [hidden]=\"!isCalling\">Ich bins {{name}}.</label>\n            <div>\n                <input [(ngModel)]=\"name\" />\n                <button (click)=\"toggleCalling()\">toggle Calling</button>\n            <div>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleComponent);
                return SimpleComponent;
            }());
            exports_1("SimpleComponent", SimpleComponent);
        }
    }
});
//# sourceMappingURL=simple.component.js.map