import {Report} from './report.model';

export class ReportService{
    constructor(){}

    getAllReports():Report[]{
        return[
               new Report(11, "Report 1", "2016-01-01"),
                new Report(22, "Report 2", "2016-01-02"),
                new Report(3, "Report 3", "2016-01-03"),
                new Report(4, "Report 4", "2016-01-04"),
                new Report(5, "Report 5", "2016-01-05")];
    }
}