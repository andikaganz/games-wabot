let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [0895429450605]
│ • Dana [0895429450605]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/628978161093
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
