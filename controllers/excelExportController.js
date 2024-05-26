// const excel = require("exceljs");

// function generateColumns(headers) {
//   return headers.map((header) => ({
//     header,
//     key: header.replace(/\s/g, "_").toUpperCase(),
//     width: 10,
//   }));
// }
// function getCurrentDateTime() {
//   const now = new Date();
//   return now.toLocaleString(); // Format the date and time as a string
// }

// async function exportToExcel(
//   res,
//   headers,
//   datatoShow,
//   workSheetName,
//   excelFileName
// ) {
//   try {
//     console.log("In Function 1 ..........", getCurrentDateTime());

//     const workbook = new excel.Workbook();
//     const worksheet = workbook.addWorksheet(workSheetName);

//     worksheet.columns = generateColumns(headers);
//     worksheet.addRows(datatoShow);

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=${excelFileName}.xlsx`
//     );

//     // Write Excel file to response
//     await workbook.xlsx.write(res);
//     console.log("In Function 2..........", getCurrentDateTime());

//     // End the response
//     res.end();
//   } catch (error) {
//     console.error("Error exporting to Excel:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

// module.exports = { exportToExcel };

const excel = require("exceljs");

function generateColumns(headers) {
  return headers.map((header) => ({
    header,
    key: header.replace(/\s/g, "_").toUpperCase(),
    width: 10,
  }));
}

function getCurrentDateTime() {
  return new Date().toLocaleString(); // Format the date and time as a string
}

function setExcelHeaders(res, excelFileName) {
  res.set({
    "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "Content-Disposition": `attachment; filename=${excelFileName}.xlsx`
  });
}

function exportToExcel(
  res,
  headers,
  dataToShow,
  workSheetName,
  excelFileName,
  endResponse = true
) {
  try {
    console.log("In Function 1 ..........", getCurrentDateTime());

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet(workSheetName);

    worksheet.columns = generateColumns(headers);
    worksheet.addRows(dataToShow);

    setExcelHeaders(res, excelFileName);
    workbook.xlsx.write(res).then(() => {
      console.log("In Function 2..........", getCurrentDateTime());
      if (endResponse) {
        res.end();
      }
    }).catch(error => {
      console.error("Error exporting to Excel:", error.message);
      res.status(500).json({ error: "Internal server error" });
    });
  } catch (error) {
    console.error("Error exporting to Excel:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { exportToExcel };

