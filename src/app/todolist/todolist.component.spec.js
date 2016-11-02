"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var index_1 = require('./index');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: '<as-todolist></as-todolist>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var todoCompiled;
var todolistCmp;
describe('TodolistComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [index_1.TodolistModule]
        });
    });
    it('should have been created successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            expect(todoCompiled).toBeDefined();
        });
    }));
    it('should add todo successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            todolistCmp.todo = new index_1.Todo('test', true);
            todolistCmp.addTodo();
            fixture.detectChanges();
            var items = todoCompiled.querySelectorAll('.list-group-item');
            expect(items.length).toEqual(3);
            var item = items[items.length - 1];
            expect(item.querySelector('label').textContent).toEqual(' test');
            expect(item.querySelector('input[type="checkbox"]').value).toBeTruthy();
        });
    }));
    it('should delete todo successfully', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            todolistCmp.delTodo(0);
            fixture.detectChanges();
            expect(todoCompiled.querySelectorAll('.list-group-item').length)
                .toEqual(1);
        });
    }));
});
//# sourceMappingURL=todolist.component.spec.js.map