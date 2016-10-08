"use strict";
var report_model_1 = require('./report.model');
var ReportService = (function () {
    function ReportService() {
    }
    ReportService.prototype.getAllReports = function () {
        return [
            new report_model_1.Report(11, "Report 1", "2016-01-01"),
            new report_model_1.Report(22, "Report 2", "2016-01-02"),
            new report_model_1.Report(3, "Report 3", "2016-01-03"),
            new report_model_1.Report(4, "Report 4", "2016-01-04"),
            new report_model_1.Report(5, "Report 5", "2016-01-05")];
    };
    return ReportService;
}());
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map