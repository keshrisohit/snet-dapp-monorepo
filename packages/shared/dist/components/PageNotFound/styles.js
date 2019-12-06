"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    pageNotFoundContainer: {
      padding: '52px 13% 0'
    },
    mediaContentContainer: {
      display: 'flex'
    },
    contentContainer: {
      '& p': {
        margin: '24px 0',
        color: MUITheme.palette.text.darkGrey,
        fontSize: 16,
        lineHeight: '20px'
      }
    },
    description: {
      textAlign: 'center',
      '& p': {
        marginTop: 32,
        color: MUITheme.palette.text.darkGrey,
        fontSize: 14,
        '& a': {
          color: MUITheme.palette.primary.main
        }
      }
    }
  };
};

exports.useStyles = useStyles;