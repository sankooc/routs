const Excel = require("exceljs");
const _ = require("lodash");

exports.excel = (req, res) => data => {
  const workbook = new Excel.Workbook();
  workbook.creator = "routs";
  const sheet = workbook.addWorksheet("routs_test");
  sheet.columns = [
    { header: "name", key: "name", width: 20 },
    { header: "age", key: "age", width: 20 },
    { header: "gender", key: "gender", width: 20 }
  ];
  sheet.addRow(data);
  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=routs.xlsx`);
  workbook.xlsx.write(res);
};
