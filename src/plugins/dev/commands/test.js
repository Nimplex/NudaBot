exports.exec = async ({ message, args }) => {
  Johny.models.embed({ object: message, description: args[0] })
}

exports.data = {
  triggers: ['test'],
  description: 'test',
  usage: undefined,
  permissions: {
    bot: [],
    user: []
  }
}