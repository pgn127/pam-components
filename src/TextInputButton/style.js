export default theme => ({
  container: {
    display: 'flex',
    borderRadius: 4,
  },
  containerType1: {
    width: '100%',
    height: 45,
    marginTop: 8,
    extend: 'container',

  },
  containerDefault: {
    height: 60,
    width: 406,
    extend: 'container',
  },
  input: {
    width: '90%',
    height: '100%',
    border: 0,
    boxShadow: '0',
    outline: 'none',
    padding: theme.spacing.unit * 2.5,
  },
  inputDefault: {
    fontSize: 16,
    borderRadius: 2,
    extend: 'input',
  },
  inputType1: {
    fontSize: 14,
    borderRadius: 2,
    extend: 'input',
  },
  submitButton: {
    width: '15%',
    display: 'flex',
    alignItems: 'center',
  },
  exclamation: {
    marginRight: theme.spacing.unit * 1.25,
  },
  popover: {
    padding: theme.spacing.unit * 1.5,
    backgroundColor: '#000',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    fontSize: 20,
  },
  borderNormal: {
    borderColor: '#b8e986', // defaults
  },
  borderError: {
    borderColor: '#f5474a',
  },
  borderFocus: {
    borderColor: '#2196f3',
  },
});
