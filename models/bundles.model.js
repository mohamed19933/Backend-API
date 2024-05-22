// const { DataTypes } = require("sequelize");

// module.exports = model;

// function model(sequelize) {
//   const attributes = {
//     ID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     BUNDLE_ID: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     HEAT_CODE: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     TRK_ID: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     WEIGHT: {
//       type: DataTypes.FLOAT,
//       allowNull: true
//     },
//     LENGTH: {
//       type: DataTypes.FLOAT,
//       allowNull: true
//     },
//     BARS_NO: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     PROGRAM_ID: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     JOB_ID: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     WEIGHING_AREA: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     NOTE: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     SHIFT: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     CREW: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     BUNDLE_STANDARD: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     SIZE: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     COMPATIBLE_STEEL_GRADE: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     CREATION_DATE: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     IS_MIXED: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true
//     },
//     INSERT_TYPE: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     PRINTER_STATUS: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     POINTER: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     PRODUCTION_DATE: {
//       type: DataTypes.DATE,
//       allowNull: true
//     }
//   };

//   const options = {
//     freezeTableName: true,
//     timestamps: false,
//   };
  
//   return sequelize.define("HIS_PRD_BUNDLE_5", attributes, options);
// }


const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BUNDLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HEAT_CODE: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('HEAT_CODE');
        return rawValue ? rawValue.split('**')[0] : null;
      }
    },
    TRK_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WEIGHT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LENGTH: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    BARS_NO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROGRAM_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JOB_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WEIGHING_AREA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOTE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SHIFT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CREW: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BUNDLE_STANDARD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SIZE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    COMPATIBLE_STEEL_GRADE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CREATION_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IS_MIXED: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    INSERT_TYPE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRINTER_STATUS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    POINTER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRODUCTION_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };

  return sequelize.define("HIS_PRD_BUNDLE_5", attributes, options);
}
