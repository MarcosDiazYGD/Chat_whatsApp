const success = ({status, message, data, res }) => {
  res.status(status).json( {
    erorr: false,
    status: status,
    message: message,
    data: data 
  });
}

const error = ({status, data, message, res, fields}) => {
 res.status(status).json( {
  error: true,
  status: status,
  message: message,
  fields: fields
 })
}

module.exports = {
  success,
  error
}