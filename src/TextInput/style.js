export default theme => ({
  container: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3.75,
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerError: {
    marginBottom: theme.spacing.unit * 1.25,
  },
  inputLabel: {
    marginBottom: theme.spacing.unit,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#14222e',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    width: '100%',
    borderRadius: 4,
    height: theme.spacing.unit * 7.5,
    marginTop: theme.spacing.unit,
    backgroundColor: 'white',
    border: 'solid 1px #d3dae0',
    paddingLeft: theme.spacing.unit * 2.5,
    fontSize: 14,
    outline: 'none',
  },
  inputError: {
    borderColor: '#E33765',
    color: '#E33765',
  },
  inputSuccess: {
    borderColor: '#65b513',
    color: '#65b513',
  },
  disabled: {
    backgroundColor: '#f2f5fa',
    border: '1px solid #d3dae0',
    cursor: 'default',
    color: '#c9c9c9',
  },
  error: {
    fontSize: 12,
    marginTop: theme.spacing.unit * 0.5,
    width: '100%',
    color: '#E33765',
  },
  success: {
    fontSize: 12,
    marginTop: theme.spacing.unit * 0.5,
    width: '100%',
    color: '#65b513',
  },
});
