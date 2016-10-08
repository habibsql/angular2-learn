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
var core_1 = require('@angular/core');
var report_service_1 = require('./report.service');
var ReportsComponent = (function () {
    function ReportsComponent(reportService) {
        this.reportService = reportService;
        this.reports = [];
        this.reportSource = [];
        this.selectAll = false;
        this.reportIds = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportSource = this.reportService.getAllReports();
        this.reports = this.reportSource;
        this.reportSource.map(function (r) { return _this.reportIds.push(r.reportId); });
    };
    ReportsComponent.prototype.onSort = function (columnName, sortDirection) {
        this.reports.sort(function (x, y) {
            return ((x[columnName] === y[columnName] ? 0 : ((x[columnName] > y[columnName]) ? 1 : -1)));
        });
    };
    ReportsComponent.prototype.onSelectAll = function () {
        var _this = this;
        this.selectAll = !this.selectAll;
        this.reports.map(function (r) { return r.isSelected = _this.selectAll; });
    };
    ReportsComponent.prototype.onSearch = function (searchText) {
        if (searchText === "") {
            this.reports = this.reportSource;
            return;
        }
        this.reports = this.reportSource.filter(function (r) { return r.reportId.toString() == searchText
            || r.reportTitle == searchText; });
    };
    ReportsComponent.prototype.onExport = function () {
        var reports = this.reports.filter(function (r) { return r.isSelected; });
        var dataList = [];
        reports.map(function (r) {
            dataList.push(r.reportId + " - " + r.reportTitle);
        });
        alert("You are selected: " + dataList.join(" | "));
    };
    ReportsComponent.prototype.onDelete = function (reportId) {
        var success = confirm("Are you sure want to delete this report: " + reportId);
        if (success) {
            var index = this.reports.findIndex(function (r) { return r.reportId === reportId; });
            this.reports.splice(index, 1);
        }
    };
    ReportsComponent.prototype.onFilter = function (reportId) {
        if (reportId.toString() === "Select All...") {
            this.reports = this.reportSource;
            return;
        }
        this.reports = this.reportSource.filter(function (r) { return r.reportId === reportId; });
    };
    ReportsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "report-view",
            templateUrl: "reports.component.html",
            styleUrls: ["reports.component.css"],
            providers: [report_service_1.ReportService]
        }), 
        __metadata('design:paramtypes', [report_service_1.ReportService])
    ], ReportsComponent);
    return ReportsComponent;
}());
exports.ReportsComponent = ReportsComponent;
//# sourceMappingURL=reports.component.js.map